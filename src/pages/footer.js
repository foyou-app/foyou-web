import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useCurrentLang from './hooks/useCurrentLang';

function Footer() {
  const navigate = useNavigate();

  const currentLang = useCurrentLang();

  const { t } = useTranslation();

  return (
    <>
      {' '}
      <footer className='d-flex align-items-center justify-content-lg-between pt-3 pb-4 flex-wrap justify-content-center gap-3 overflow-hidden position-relative zindex-1'>
        <div className='d-flex align-items-center animate__animated animate__fadeInUp animate__delay-1s'>
          <button onClick={() => navigate(`/terms-of-condition?lang=${currentLang}`)} type='button' className='btn'>
            <span>{t('terms_condition')}</span>
          </button>
          •
          <button onClick={() => navigate(`/privacy-policy?lang=${currentLang}`)} type='button' className='btn'>
            <span>{t('privacy_policy')}</span>
          </button>
        </div>
        <div className='d-flex align-items-center flex-wrap justify-content-center animate__animated animate__fadeInUp animate__delay-1s'>
          <div className='d-flex'>
            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/Foyouapp' className='btn'>
              <img src='assets/images/facebook.svg' alt='' />
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/foyou_global/' className='btn'>
              <img src='assets/images/instagram.svg' alt='' />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='btn'>
              <img src='assets/images/twitter.svg' alt='' />
            </a>
          </div>
          <div className='d-flex align-items-center'>
            <a href='mailto:info@4uuuu.app' className='btn'>
              <span>info@4uuuu.app</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
