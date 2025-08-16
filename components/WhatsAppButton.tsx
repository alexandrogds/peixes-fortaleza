
import React from 'react';
import { WHATSAPP_GROUP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transform hover:scale-110 transition-transform duration-300 ease-in-out"
            aria-label="Entre em contato pelo WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.905 6.195l-.273 1.003 1.03.264zM8.225 7.15c.162-.354.349-.364.51-.37.16-.007.333-.01.485-.01.17 0 .428.064.64.331.229.28.766.913.766 1.77 0 .858-.481 1.597-.549 1.696-.068.099-.148.118-.28.068-.13-.05-.536-.205-1.02-.618-.484-.413-.802-.913-.836-1.02-.034-.107-.004-.167.046-.221.05-.053.113-.137.154-.182.04-.045.06-.099.09-.166.03-.067.014-.147-.004-.207-.018-.06-.522-1.246-.714-1.693z"/>
            </svg>
        </a>
    );
};

export default WhatsAppButton;
