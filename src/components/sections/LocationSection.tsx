import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import lojaImg from '@/assets/loja.png';

const LocationSection = () => {
  return (
    <section id="localizacao" className="section-spacing bg-secondary/10">
      <div className="container-premium">
        <SectionHeading
          title="Nossa Localização"
          subtitle="Venha conhecer nossa loja física e ver de perto a qualidade dos nossos móveis"
        />

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-12">
          {/* Informações e Botão */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border w-full">
              <h3 className="text-2xl font-serif text-heading mb-6">Visite nosso espaço</h3>

              <div className="flex items-start gap-4 mb-8">
                <div className="mt-1 bg-wood/10 p-3 rounded-full text-wood">
                  {/* Ícone de Pin de Endereço */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-body text-sm uppercase tracking-wider mb-1 font-medium">Endereço Oficial</p>
                  <p className="text-heading text-lg font-medium leading-relaxed">
                    R. Tarumã, 322<br />
                    São Jerônimo<br />
                    Gravataí - RS, 94055-330
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/rivytvkCp9CLyBGTA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#EA4335] text-white font-medium text-lg rounded-xl hover:bg-[#D93025] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Ícone do Google Maps */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>

          {/* Foto da Fachada */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group bg-white/50">
              <img
                src={lojaImg}
                alt="Fachada ZK Arte em Madeira"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border-4 border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
