
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../constants';

const ProductGrid: React.FC = () => {
    return (
        <section id="produtos" className="py-16 sm:py-24 bg-blue-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Nossos Pescados Frescos</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Qualidade e frescor que você sente no sabor. Confira nossas opções!</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
