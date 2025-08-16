
import React from 'react';
import { WHATSAPP_GROUP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/ocean/1200/800')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Vender a exportação de peixes na cidade.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">
          Precisamos manter o nível de produção de peixes.
        </p>
        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-110 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.905 6.195l-.273 1.003 1.03.264zM8.225 7.15c.162-.354.349-.364.51-.37.16-.007.333-.01.485-.01.17 0 .428.064.64.331.229.28.766.913.766 1.77 0 .858-.481 1.597-.549 1.696-.068.099-.148.118-.28.068-.13-.05-.536-.205-1.02-.618-.484-.413-.802-.913-.836-1.02-.034-.107-.004-.167.046-.221.05-.053.113-.137.154-.182.04-.045.06-.099.09-.166.03-.067.014-.147-.004-.207-.018-.06-.522-1.246-.714-1.693z"/>
            </svg>
            <span>Entrar no Grupo</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
