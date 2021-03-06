import React from 'react';
import { toggleCart, positioning } from './functions';

// props are coming from the parent component
export default function Header(props) {
    const { cartItems } = props;
    let item_counter = cartItems.reduce( (a, item) => a + item.qty, 0)
    
    return (
        <header id="top_menu_bar" className="top_menu">

            <h1 className="logo">small shop</h1>

            <li onClick={positioning} className='products_button'>Products</li>

            <div>
                <ul onClick={toggleCart} className="cart_navigation">
                    <li className="cart_button">Cart
                        
                    </li>
                    <li className="item_counter">
                        {item_counter}
                    </li>
                </ul>

            </div>

        </header>
    )
}