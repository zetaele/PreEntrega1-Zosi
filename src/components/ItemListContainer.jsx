import React from 'react';
import Product from './Product';

import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
    const products = [
        {
            plan: 'Free',
            price: 0,
            details: [
                '10 users included',
                '2 GB of storage',
                'Email support',
                'Help center access'
            ]
        },
        {
            plan: 'Pro',
            price: 10,
            details: [
                '20 users included',
                '4 GB of storage',
                'Priority Email support',
                'Help center access'
            ]
        },
        {
            plan: 'Enterprise',
            price: 50,
            details: [
                '50 users included',
                '10 GB of storage',
                'Phone and Priority Email support',
                'Help center access'
            ]
        }
    ];
    return (
        <main>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">{ greeting }</h1>
                <p className="fs-5 text-muted">Accedé a los detalles de nuestros planes según tus necesidades.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {
                    products.map((p, i) => 
                        <Product key={ i } plan={ p.plan } price={ p.price } details={ p.details } />
                    )
                }
            </div>
        </main>
    )
}

