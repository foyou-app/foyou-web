
import React , { useRef, useState, useEffect,  } from "react";

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector, connect } from "react-redux";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import { API_URL } from "../lib/config";
import useAuth from "../lib/hooks/useAuth";
import axios from '../lib/utils/axios';

function Footer ()
{ 
    const { t } = useTranslation();
    const lets = useSelector(state => state.mainReducer);
    const [pages, setpages] = useState(lets) 
    const [terms, setterms] = useState({id: 2, title: 'asd', content: 'mn', type: 'terms', lang: 'mn'});
    const [faq, setfaq] = useState({id: 2, title: 'asd', content: 'mn', type: 'terms', lang: 'mn'});
    const [policy, setpolicy] = useState({id: 2, title: 'asd', content: 'mn', type: 'terms', lang: 'mn'});

  useEffect(() => {
      console.log('hello',lets);
      if(lets.pages!=null){       
        setterms(lets.pages.data.filter(x=>x.type==="terms")[0])
        setfaq(lets.pages.data.filter(x=>x.type==="faq")[0])
        setpolicy(lets.pages.data.filter(x=>x.type==="policy")[0])
      }

  }, [lets]);

    return ( <>        <footer className="d-flex align-items-center justify-content-lg-between pt-3 pb-4 flex-wrap justify-content-center gap-3 overflow-hidden position-relative zindex-1">
        <div className="d-flex align-items-center animate__animated animate__fadeInUp animate__delay-1s">
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#termsModal">
            <span>{ t('terms_condition')}</span>
          </button>
          •
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#policyModal">
            <span>{ t('privacy_policy')}</span>
          </button>
          •
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#faqModal">
            <span>{ t('faq')}</span>
          </button>
        </div>
        <div className="d-flex align-items-center flex-wrap justify-content-center animate__animated animate__fadeInUp animate__delay-1s">
          <div className="d-flex">
            <button type="button" className="btn">
              <img src="images/facebook.svg" alt="" />
            </button>
            <button type="button" className="btn">
              <img src="images/twitter.svg" alt="" />
            </button>
            <button type="button" className="btn">
              <img src="images/instagram.svg" alt="" />
            </button>
          </div>
          <div className="d-flex align-items-center">
            <a href="mailto:info@foyou.app" className="btn">
              <span>info@foyou.app</span>
            </a>
            •
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#contactModal">
              <span>{ t('contact_us')}</span>
            </button>
          </div>
        </div>
      </footer>

      <div className="modal fade" id="termsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-1 border-0">
            <div className="d-flex align-items-center justify-content-between p-3">
              <h1 className="modal-title fs-5" id="exampleModalLabel"> {terms?.title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <hr className="m-0" />
            <div className="p-3">
              {terms?.content}
            </div>
          </div>
        </div>
      </div>
  
      <div className="modal fade" id="faqModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-1 border-0">
            <div className="d-flex align-items-center justify-content-between p-3">
              <h1 className="modal-title fs-5" id="exampleModalLabel"> {faq?.title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <hr className="m-0" />
            <div className="p-3">
              {faq?.content}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="policyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-1 border-0">
            <div className="d-flex align-items-center justify-content-between p-3">
              <h1 className="modal-title fs-5" id="exampleModalLabel"> {policy?.title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <hr className="m-0" />
            <div className="p-3">
              {policy?.content}
            </div>
          </div>
        </div>
      </div>
  
      <div className="modal fade" id="contactModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-1 border-0">
            <div className="d-flex align-items-center justify-content-between p-3">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{t('contact_us_title')}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <hr className="m-0" />
            <div className="p-3">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{t('contact_email_address')}</label>
                <input type="email" className="form-control fs-14 py-3" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{t('contact_phone_address')}</label>
                <input type="email" className="form-control fs-14 py-3" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{t('contact_name')}</label>
                <input type="email" className="form-control fs-14 py-3" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{t('contact_title')}</label>
                <input type="email" className="form-control fs-14 py-3" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">{t('contact_message')}</label>
                <textarea className="form-control fs-14" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <hr className="m-0" />
            <div className="d-flex p-3 justify-content-center">
              <button type="button" className="btn btn-dark border-0 py-3 w-50">{t('send')}</button>
            </div>
          </div>
        </div>
      </div>
      </>
      
    )
}

export default Footer;
