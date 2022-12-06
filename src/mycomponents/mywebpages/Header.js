import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
export default function Header(props){
    return(                <header>
        <nav calssName="flex">
            <div className="head">
                <img src="https://onlinemediacafe.com/wp-content/uploads/2021/05/Myntra-logo-1024x740.png" className={style.logo} />
                <ul class="flex">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Home and Living</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div classNmae="right">
                <input class="" type="text"/>
                <a className="Profile" href="/profile">profile</a>
                <Link className="Wishlist" to="/wishlist">Wishlist</Link>
                <div className="bag">bag</div>
            </div>
        </nav>
    </header>
    );
}