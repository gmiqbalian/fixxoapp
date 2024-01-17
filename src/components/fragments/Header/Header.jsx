import { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
   const [hideMenu, setHideMenu] = useState(true);
   const handleHideMenu = ()=> {setHideMenu(!hideMenu)};

    return (
        <header>
            <div className="container">
                <NavLink id="logo" to="/">FIXXO.</NavLink>
                <div id="menu" className={hideMenu ? 'hide' : ''}>
                    <nav id="menu-links" className='links'>
                        <NavLink className="link" to="/">Home</NavLink>
                        <NavLink className="link" to="/products">Products</NavLink>
                        <NavLink className="link" to="/contacts">Contacts</NavLink>
                    </nav>
                    <nav id="menu-icons" className='icons'>
                        <NavLink className="link" to=""><i className="fa-regular fa-search"></i></NavLink>
                        <NavLink className="link" to=""><i className="fa-regular fa-code-compare"></i></NavLink>
                        <NavLink className="link" to=""><i className="fa-regular fa-heart"></i></NavLink>
                        <NavLink className="link" to=""><i className="fa-regular fa-bag-shopping"></i></NavLink>
                        <NavLink className="link ms-5" to=""><i className="fa-regular fa-user"></i></NavLink>
                    </nav>
                </div>
                <div id="toggle-icon" className='icons'>
                    <button className='link' onClick={handleHideMenu}><i className="fa-regular fa-bars"></i></button>
                </div>
                
            </div>
        </header>
    )
}

export default Header