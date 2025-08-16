
import React from 'react';
import { WHATSAPP_GROUP_LINK } from '../constants';

interface Product {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
            <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{product.description}</p>
                <div className="text-2xl font-semibold text-blue-600 mb-4">{product.price}</div>
                <a
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                    Pedir no WhatsApp
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
