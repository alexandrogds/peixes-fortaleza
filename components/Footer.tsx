
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-900 text-blue-100">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">Rei do Peixe Fresco</h3>
                        <p className="text-sm text-blue-200">Qualidade direto do mar para você.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-blue-800 pt-4 text-center text-sm text-blue-300">
                    <p>&copy; {new Date().getFullYear()} Rei do Peixe. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
