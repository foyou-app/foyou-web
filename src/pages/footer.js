
import React , { useRef, useState, useEffect,  } from "react";

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector, connect } from "react-redux";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import { API_URL } from "../lib/config";
import useAuth from "../lib/hooks/useAuth";
import axios from '../lib/utils/axios';
import { useForm } from "react-hook-form";

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
          
        </div>
        <div className="d-flex align-items-center flex-wrap justify-content-center animate__animated animate__fadeInUp animate__delay-1s">
          <div className="d-flex">
         
          
           
            <a  href="https://www.facebook.com/Foyouapp" className="btn"  >
              <img src="assets/images/facebook.svg" alt="" />
            </a>
            <a  href="https://www.instagram.com/foyou_global/" className="btn" >
              <img src="assets/images/instagram.svg" alt="" />
            </a>
            <a href="#" className="btn" >
              <img src="assets/images/twitter.svg" alt="" />
            </a>
          </div>
          <div className="d-flex align-items-center">
            <a href="mailto:info@foyou.app" className="btn">
              <span>info@foyou.app</span>
            </a> 
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
            <div className="p-3" dangerouslySetInnerHTML={{__html:terms?.content}}>
             
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
            <div className="p-3" dangerouslySetInnerHTML={{__html:policy?.content}}>
              
            </div>
          </div>
        </div>
      </div>
  
      
      </>
      
    )
}

export default Footer;
