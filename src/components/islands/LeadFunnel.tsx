import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ui } from '../../i18n/ui';
import type { Lang } from '../../i18n/utils';

type Sector = 'professional' | 'retail' | 'b2b' | 'other';
type Team = 's' | 'm' | 'l' | 'xl';
type Hours = 's' | 'm' | 'l' | 'xl';
type Tools = 'yes' | 'no';
type Segment = 'hot' | 'warm' | 'cold';
type Stage = 'quiz' | 'result' | 'details' | 'done';

interface QuizAnswers {
  sector: Sector | null;
  team: Team | null;
  hours: Hours | null;
  tools: Tools | null;
}

const TEAM_WEIGHT: Record<Team, number> = { s: 1.5, m: 4, l: 8, xl: 12 };
const HOURS_WEIGHT: Record<Hours, number> = { s: 3, m: 7.5, l: 15, xl: 25 };
const HOURLY_VALUE_EUR = 30;
const AUTOMATION_SAVING_RATE = 0.6;
const WEEKS_PER_YEAR = 48;

function computeEstimate(team: Team, hours: Hours) {
  const weeklyHours = TEAM_WEIGHT[team] * HOURS_WEIGHT[hours];
  const weeklySavings = weeklyHours * HOURLY_VALUE_EUR * AUTOMATION_SAVING_RATE;
  const annualSavings = Math.round((weeklySavings * WEEKS_PER_YEAR) / 100) * 100;

  const score = TEAM_WEIGHT[team] * HOURS_WEIGHT[hours];
  let segment: Segment = 'cold';
  if (score >= 60) segment = 'hot';
  else if (score >= 20) segment = 'warm';

  return { annualSavings, segment };
}

function formatCurrency(value: number, lang: Lang) {
  return new Intl.NumberFormat(lang === 'it' ? 'it-IT' : 'en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

interface Props {
  lang: Lang;
}

export default function LeadFunnel({ lang }: Props) {
  const t = (key: keyof (typeof ui)['it']) => ui[lang][key] ?? ui.it[key];

  const [stage, setStage] = useState<Stage>('quiz');
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({ sector: null, team: null, hours: null, tools: null });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const estimate = useMemo(() => {
    if (!answers.team || !answers.hours) return null;
    return computeEstimate(answers.team, answers.hours);
  }, [answers.team, answers.hours]);

  const quizQuestions: {
    key: keyof QuizAnswers;
    label: string;
    options: { value: string; label: string }[];
  }[] = [
    {
      key: 'sector',
      label: t('funnel.q.sector.label'),
      options: [
        { value: 'professional', label: t('funnel.q.sector.professional') },
        { value: 'retail', label: t('funnel.q.sector.retail') },
        { value: 'b2b', label: t('funnel.q.sector.b2b') },
        { value: 'other', label: t('funnel.q.sector.other') },
      ],
    },
    {
      key: 'team',
      label: t('funnel.q.team.label'),
      options: [
        { value: 's', label: t('funnel.q.team.s') },
        { value: 'm', label: t('funnel.q.team.m') },
        { value: 'l', label: t('funnel.q.team.l') },
        { value: 'xl', label: t('funnel.q.team.xl') },
      ],
    },
    {
      key: 'hours',
      label: t('funnel.q.hours.label'),
      options: [
        { value: 's', label: t('funnel.q.hours.s') },
        { value: 'm', label: t('funnel.q.hours.m') },
        { value: 'l', label: t('funnel.q.hours.l') },
        { value: 'xl', label: t('funnel.q.hours.xl') },
      ],
    },
    {
      key: 'tools',
      label: t('funnel.q.tools.label'),
      options: [
        { value: 'yes', label: t('funnel.q.tools.yes') },
        { value: 'no', label: t('funnel.q.tools.no') },
      ],
    },
  ];

  function selectAnswer(key: keyof QuizAnswers, value: string) {
    const next = { ...answers, [key]: value };
    setAnswers(next);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setStage('result');
    }
  }

  function goBack() {
    if (quizStep > 0) {
      setQuizStep(quizStep - 1);
    }
  }

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = t('funnel.error.required');
    if (!email.trim()) {
      nextErrors.email = t('funnel.error.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = t('funnel.error.email');
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(false);

    try {
      const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
      const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase non configurato');
      }

      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase.from('leads').insert({
        nome: name,
        email,
        telefono: phone || null,
        azienda: company || null,
        messaggio: message || null,
        fonte: 'lead-funnel',
        risposte_quiz: answers,
        punteggio: estimate ? Math.round(estimate.annualSavings) : null,
        segmento: estimate?.segment ?? null,
      });

      if (error) throw error;

      setStage('done');
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const steps: { key: Stage; label: string }[] = [
    { key: 'quiz', label: t('funnel.step.quiz') },
    { key: 'result', label: t('funnel.step.result') },
    { key: 'details', label: t('funnel.step.details') },
    { key: 'done', label: t('funnel.step.done') },
  ];
  const currentStepIndex = steps.findIndex((s) => s.key === stage);

  return (
    <div className="hairline rounded-2xl p-6 sm:p-10 bg-ink-900/60">
      <ol className="flex items-center gap-3 mb-10">
        {steps.map((s, i) => (
          <li
            key={s.key}
            className="flex items-center gap-2"
            aria-current={i === currentStepIndex ? 'step' : undefined}
          >
            <span
              aria-hidden="true"
              className={`h-1.5 w-8 rounded-full transition-colors ${
                i <= currentStepIndex ? 'bg-accent-500' : 'bg-line'
              }`}
            />
            <span className="sr-only sm:not-sr-only font-mono text-[11px] text-fg-subtle">{s.label}</span>
          </li>
        ))}
      </ol>

      {stage === 'quiz' && (
        <div>
          <p className="font-mono text-xs text-fg-subtle mb-2">{`${quizStep + 1} / ${quizQuestions.length}`}</p>
          <h3 className="text-xl sm:text-2xl font-display font-medium mb-6">
            {quizQuestions[quizStep].label}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {quizQuestions[quizStep].options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => selectAnswer(quizQuestions[quizStep].key, option.value)}
                className="text-left hairline rounded-xl px-5 py-4 text-sm text-fg hover-lift hover:border-accent-500/60 hover:bg-ink-800"
              >
                {option.label}
              </button>
            ))}
          </div>
          {quizStep > 0 && (
            <button
              type="button"
              onClick={goBack}
              className="mt-6 inline-flex items-center gap-2 text-sm text-fg-subtle hover:text-fg-muted"
            >
              <ArrowLeft size={14} aria-hidden="true" /> {t('funnel.cta.back')}
            </button>
          )}
        </div>
      )}

      {stage === 'result' && estimate && (
        <div>
          <p className="eyebrow mb-3">{t('funnel.result.heading')}</p>
          <p className="text-4xl sm:text-5xl font-display font-semibold text-fg">
            {formatCurrency(estimate.annualSavings, lang)}
            <span className="text-lg text-fg-muted font-sans font-normal ml-2">{t('funnel.result.perYear')}</span>
          </p>
          <p className="mt-5 max-w-md text-sm text-fg-muted leading-relaxed">{t('funnel.result.body')}</p>
          <button
            type="button"
            onClick={() => setStage('details')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg text-ink-950 px-6 py-3 text-sm font-medium hover-lift hover:bg-white"
          >
            {t('funnel.result.cta')} <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      )}

      {stage === 'details' && (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block text-sm text-fg-muted mb-2">
                {t('funnel.details.name')}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-ink-950 hairline px-4 py-3 text-sm text-fg focus:outline-none focus:border-accent-500"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm text-fg-muted mb-2">
                {t('funnel.details.email')}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-ink-950 hairline px-4 py-3 text-sm text-fg focus:outline-none focus:border-accent-500"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="company" className="block text-sm text-fg-muted mb-2">
                {t('funnel.details.company')}
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg bg-ink-950 hairline px-4 py-3 text-sm text-fg focus:outline-none focus:border-accent-500"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="phone" className="block text-sm text-fg-muted mb-2">
                {t('funnel.details.phone')}
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg bg-ink-950 hairline px-4 py-3 text-sm text-fg focus:outline-none focus:border-accent-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm text-fg-muted mb-2">
                {t('funnel.details.message')}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full rounded-lg bg-ink-950 hairline px-4 py-3 text-sm text-fg focus:outline-none focus:border-accent-500"
              />
            </div>
          </div>

          {submitError && (
            <p role="alert" className="mt-5 text-sm text-red-400">
              {t('funnel.error.submit')}{' '}
              <a href="mailto:info@zenith-studio.it" className="underline">
                info@zenith-studio.it
              </a>
            </p>
          )}

          <p className="mt-6 text-xs text-fg-subtle">{t('funnel.details.privacy')}</p>

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-fg text-ink-950 px-6 py-3 text-sm font-medium hover-lift hover:bg-white disabled:opacity-60"
          >
            {submitting ? t('funnel.details.submitting') : t('funnel.details.submit')}
          </button>
        </form>
      )}

      {stage === 'done' && (
        <div>
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-500/15 text-accent-400">
            <Check size={18} aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-xl font-display font-medium">{t('funnel.done.heading')}</h3>
          <p className="mt-2 max-w-md text-sm text-fg-muted leading-relaxed">{t('funnel.done.body')}</p>
        </div>
      )}
    </div>
  );
}
