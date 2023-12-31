import React, { Fragment, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { web_pages } from '../../lib/store/actions/actions';

const Language = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState('en');
  const [sel_flag, setsel_flag] = useState('assets/images/en.svg');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelected(lng);
    setsel_flag('assets/images/' + lng + '.svg');

    dispatch(web_pages({ lang: lng.toUpperCase() }));
  };

  useEffect(() => {
    changeLanguage(queryParams.get('lang') || 'mn');
  }, [queryParams.get('lang')]);

  const changeLangQuery = (lang) => {
    queryParams.set('lang', lang);
    window.location.search = queryParams.toString();
  };

  const getLangName = () => {
    switch (selected) {
      case 'en':
        return 'English';
      case 'mn':
        return 'Монгол';
      case 'kk':
        return 'Kazakh';
      case 'ru':
        return 'Русский язык';
      default:
        return 'English';
    }
  };

  if (location.pathname !== '/') return null;

  return (
    <Fragment>
      <button
        className='btn btn-light dropdown-toggle d-flex align-items-center gap-2'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <img style={{ width: 40, height: 20 }} src={sel_flag} alt='' />
        <span>{getLangName()}</span>
      </button>
      <ul class='dropdown-menu border-0 shadow p-2 dropdown-menu-end'>
        <li>
          <button
            type='button'
            onClick={() => changeLangQuery('mn')}
            class='dropdown-item fs-14 d-flex align-items-center gap-2 p-2 rounded-1'
          >
            <img src='assets/images/mn.svg' alt='mn' />
            <span>Монгол</span>
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => changeLangQuery('en')}
            class='dropdown-item fs-14 d-flex align-items-center gap-2 p-2 rounded-1'
          >
            <img src='assets/images/en.svg' alt='en' />
            <span>English</span>
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => changeLangQuery('kk')}
            class='dropdown-item fs-14 d-flex align-items-center gap-2 p-2 rounded-1'
          >
            <img src='assets/images/kk.svg' style={{ width: 40, height: 20 }} alt='kk' />
            <span>Kazakh</span>
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => changeLangQuery('ru')}
            class='dropdown-item fs-14 d-flex align-items-center gap-2 p-2 rounded-1'
          >
            <img src='assets/images/ru.svg' style={{ width: 40, height: 20 }} alt='ru' />
            <span>Русский язык</span>
          </button>
        </li>
      </ul>
    </Fragment>
  );
};

export default Language;
