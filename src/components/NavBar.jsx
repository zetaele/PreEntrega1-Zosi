import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar({ brand }) {
    const nav = [
      {
        text: 'Home',
        name: 'home',
        link: '#'
      },
      {
        text: 'Products',
        name: 'products',
        link: '#'
      }
    ];

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/PreEntrega1-Zosi/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                { brand }
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {
                nav.map((navItem) =>
                    <li key={ navItem.text } className="nav-item"><a href="#" className="nav-link">{ navItem.text }</a></li>
                )
            }
            </ul>
            <div className="col-md-3 text-end">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar