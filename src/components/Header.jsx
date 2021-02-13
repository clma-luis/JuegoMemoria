import React from 'react';
import '../assets/styles/components/Header.scss';


const Header = () => (
<header>
    <div className = "titulo">
        Memory Game
    </div>
    <div >
        <button className="reset">
            Reset
        </button>
    </div>

    <div className="titulo">
        Movements:
    </div>
</header>
);

export default Header;

