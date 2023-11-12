import React from 'react';

import { Link } from 'react-router-dom';

import useCurrentLang from './hooks/useCurrentLang';

function Header() {
  const currentLang = useCurrentLang();

  return (
    <header class=''>
      <nav class='pt-4 pb-3 d-flex align-items-center justify-content-between'>
        <Link to={`/?lang=${currentLang}`} class='logo'>
          <img src='assets/images/logo.png' height={40} alt='' class='animate__animated animate__fadeInDown' />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
