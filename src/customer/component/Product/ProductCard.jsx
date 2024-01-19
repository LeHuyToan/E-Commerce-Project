import React from 'react';
import './ProductCard.css';
import Product from './Product';
const ProductCard = ({ product }) => {
    return (
        <div className="productCard w-[14rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem] ">
                <img className="h-full w-full object-cover object-left-top" src={product.imageUrl} alt=""></img>
            </div>

            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold">{product.brand}</p>
                    <p className="opacity-60">{product.title}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">{product.discountedPrice}đ</p>
                    <p className="line-through opacity-50">{product.price}đ</p>
                    <div style={{ backgroundColor: '#dc633a' }}>
                        <p className="text-white font-bold font-semibold" style={{ padding: '3px', fontSize: '0.8em' }}>
                            {product.discountPersent}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
