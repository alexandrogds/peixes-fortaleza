
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/seed/fishingboat/600/400" alt="Barco de pesca" className="rounded-lg shadow-xl" />
                    </div>
                    <div className="text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Nossa História: Paixão pelo Mar</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            O "Rei do Peixe" nasceu da paixão de uma família de pescadores que por gerações se dedica a levar o melhor do oceano para a mesa das pessoas. Acreditamos que um bom peixe começa com respeito ao mar, pesca sustentável e um cuidado rigoroso em cada etapa, desde o barco até a sua casa.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Nosso compromisso é com a qualidade e o frescor. Por isso, criamos nosso grupo no WhatsApp: para estar mais perto de você, oferecendo produtos selecionados, dicas de preparo e promoções especiais para quem, como nós, ama peixe de verdade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
