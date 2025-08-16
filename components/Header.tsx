
import React from 'react';
import { WHATSAPP_GROUP_LINK } from '../constants';

const FishIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.75 3.375C7.94 3.375 4.64 6.136 3.65 9.895A.75.75 0 004.38 11h15.24a.75.75 0 00.73-.895C19.36 6.136 16.06 3.375 12.75 3.375zM12 8.25a.75.75 0 000 1.5.75.75 0 000-1.5z" />
        <path fillRule="evenodd" d="M3 12.75a.75.75 0 00-.75.75v5.423c0 .835.536 1.571 1.308 1.838l3.44 1.147a.75.75 0 00.504 0l3.44-1.147a1.94 1.94 0 011.308 0l3.44 1.147a.75.75 0 00.504 0l3.44-1.147c.772-.267 1.308-1.003 1.308-1.838V13.5a.75.75 0 00-.75-.75H3zm17.59 1.564l-3.44 1.146a.75.75 0 01-.504 0l-3.44-1.146a1.936 1.936 0 00-1.308 0l-3.44 1.146a.75.75 0 01-.504 0l-3.44-1.146a.44.44 0 00-.312.41V18.9c0 .121.077.228.19.262l3.44 1.146a.75.75 0 00.504 0l3.44-1.146c.772-.267 1.308-1.003 1.308-1.838V14.5a1.94 1.94 0 011.308 0l3.44 1.146a.75.75 0 00.504 0l3.44-1.146a.438.438 0 00.19-.262v-4.426a.439.439 0 00-.312-.41z" clipRule="evenodd" />
    </svg>
);


const Header: React.FC = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <FishIcon className="w-8 h-8 text-blue-600" />
                    <a href="#" className="text-2xl font-bold text-blue-800">Rei do Peixe</a>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#produtos" className="text-slate-600 hover:text-blue-600 transition-colors">Produtos</a>
                    <a href="#sobre" className="text-slate-600 hover:text-blue-600 transition-colors">Sobre Nós</a>
                </nav>
                <a
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
                >
                    Entrar no Grupo
                </a>
                <button className="md:hidden text-slate-600">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
