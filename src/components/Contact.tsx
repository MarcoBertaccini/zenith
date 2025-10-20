import { useState } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contatti" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00b7ff]/6 rounded-full blur-[180px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#8a2be2]/6 rounded-full blur-[140px] animate-pulse-glow animation-delay-400" />

      <div ref={ref} className="relative max-w-4xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] rounded-full mx-auto mb-6" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Inizia il <span className="text-gradient-electric text-glow">viaggio</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hai un progetto ambizioso? Portiamolo al suo punto più alto
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="relative group">
            <User className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${focusedField === 'name' ? 'text-[#00b7ff]' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-14 pr-5 py-5 bg-gradient-to-br from-black/40 to-[#00b7ff]/5 border-2 rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all duration-500 backdrop-blur-xl ${
                focusedField === 'name'
                  ? 'border-[#00b7ff]/60 inset-glow'
                  : 'border-[#00b7ff]/20 hover:border-[#00b7ff]/40'
              }`}
              required
            />
          </div>

          <div className="relative group">
            <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${focusedField === 'email' ? 'text-[#00b7ff]' : 'text-gray-500'}`} />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-14 pr-5 py-5 bg-gradient-to-br from-black/40 to-[#00b7ff]/5 border-2 rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all duration-500 backdrop-blur-xl ${
                focusedField === 'email'
                  ? 'border-[#00b7ff]/60 inset-glow'
                  : 'border-[#00b7ff]/20 hover:border-[#00b7ff]/40'
              }`}
              required
            />
          </div>

          <div className="relative group">
            <MessageSquare className={`absolute left-5 top-7 w-5 h-5 transition-colors duration-500 ${focusedField === 'message' ? 'text-[#00b7ff]' : 'text-gray-500'}`} />
            <textarea
              placeholder="Raccontami del tuo progetto..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={6}
              className={`w-full pl-14 pr-5 py-5 bg-gradient-to-br from-black/40 to-[#00b7ff]/5 border-2 rounded-2xl text-white placeholder-gray-500 focus:outline-none resize-none transition-all duration-500 backdrop-blur-xl ${
                focusedField === 'message'
                  ? 'border-[#00b7ff]/60 inset-glow'
                  : 'border-[#00b7ff]/20 hover:border-[#00b7ff]/40'
              }`}
              required
            />
          </div>

          <button
            type="submit"
            className="group relative w-full py-5 bg-gradient-to-r from-[#00b7ff] via-[#0095cc] to-[#8a2be2] rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center gap-3 overflow-hidden hover-glow-button"
          >
            <span className="relative z-10">Collabora con noi</span>
            <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#8a2be2] via-[#0095cc] to-[#00b7ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </form>

        <div className={`mt-16 p-8 rounded-2xl border border-[#00b7ff]/20 bg-gradient-to-br from-black/40 to-[#8a2be2]/5 backdrop-blur-xl text-center transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-3 text-sm uppercase tracking-wider">Oppure contattaci direttamente</p>
          <a
            href="mailto:info@zenith.ai"
            className="text-2xl text-gradient-electric font-bold hover:text-glow transition-all duration-500 inline-block hover:scale-105"
          >
            info@zenith.ai
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
