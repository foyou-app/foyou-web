import React from 'react';

import { Link } from 'react-router-dom';

import useCurrentLang from './hooks/useCurrentLang';
import Language from './components/language';

function Header() {
  const currentLang = useCurrentLang();

  return (
    <header class=''>
      <nav class='pt-4 pb-3 d-flex align-items-center justify-content-between'>
        <Link to={`/?lang=${currentLang}`} class='logo'>
          <img src='assets/images/foyou-logo.svg' height={40} alt='' class='animate__animated animate__fadeInDown' />
        </Link>
        <Language />
      </nav>
    </header>
  );
}

export default Header;
