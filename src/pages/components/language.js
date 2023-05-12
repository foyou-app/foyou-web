import React, { Fragment, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { web_pages } from '../../lib/store/actions/actions';

const Language = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState('en');
  const [selectedlang_text, setselectedlang_text] = useState('');
  const [sel_flag, setsel_flag] = useState('assets/images/en.svg');

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelected(lng);
    setsel_flag('assets/images/' + lng + '.svg');

    dispatch(web_pages({ lang: lng.toUpperCase() }))
      .then(res => {})
      .catch(error => {});
  };

  useEffect(() => {
    dispatch(web_pages({ lang: selected.toUpperCase() }))
      .then(res => {})
      .catch(error => {});
  }, []);

  return (
    <Fragment>
      <button
        className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img style={{ width: 40, height: 20 }} src={sel_flag} alt="" />
        <span>{selected === 'en' ? 'English' : selected === 'mn' ? 'Монгол' : 'Kazakh'}</span>
      </button>
      <ul class="dropdown-menu border-0 shadow p-2 dropdown-menu-end">
        <li>
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            class="dropdown-item fs-14 d-flex align-items-center gap-2 p-2 rounded-1"
          >
            <img src="assets/images/en.svg" alt="" />
            <span>English</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => changeLanguage('mn')}
            class="dropdown-item fs-14 d-flex align-items-center gap-2 p-2 rounded-1"
          >
            <img src="assets/images/mn.svg" alt="" />
            <span>Монгол</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => changeLanguage('kk')}
            class="dropdown-item fs-14 d-flex align-items-center gap-2 p-2 rounded-1"
          >
            <img src="assets/images/kk.svg" style={{ width: 40, height: 20 }} alt="" />
            <span>Kazakh</span>
          </button>
        </li>
      </ul>
    </Fragment>
  );
};

export default Language;
