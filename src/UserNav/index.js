import React from 'react';
import './UserNav.css';


function UserNav(
    {showWindow,
    setshowWindow}
){ 
    return (
    <nav className={`user-nav ${showWindow.navBar}`}>
        <div className="left-nav">
            <p>SIMoT</p>            
        </div>

        <div className="right-nav">
            <ul>
                {/* <li>
                    <a href="/" className="nav-user">Usuario</a>
                </li>
                <li>
                    <a href="/" className="nav-group">Grupos</a>
                </li>
                <li>
                    <a href="/" className="nav-monitors">Monitores</a>
                </li> */}
                <li>
                    <a href="/" className="nav-salir">Salir</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export {UserNav};