
import React , { useRef, useState, useEffect,  } from "react";

import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector, connect } from "react-redux";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import { API_URL } from "../lib/config";
import useAuth from "../lib/hooks/useAuth";
import axios from '../lib/utils/axios';
import Language from "./components/language";

function Header ()
{ 
    const { t } = useTranslation();
    const lets = useSelector(state => state.mainReducer);

    return (
        <header class="">
        <nav class="pt-4 pb-3 d-flex align-items-center justify-content-between">
          <img src="assets/images/logo.svg" alt="" class="animate__animated animate__fadeInDown" />
          <div class="dropdown animate__animated animate__fadeInDown">
           <Language />
          </div>
        </nav>
      </header>
    )
}

export default Header;
