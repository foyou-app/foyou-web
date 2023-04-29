
import React , { useRef, useState, useEffect,  } from "react";
 
import {Swiper, SwiperSlide} from "swiper/react";

import { useDispatch, useSelector, connect } from "react-redux";
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, EffectCube,Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate, useLocation } from 'react-router-dom';
 
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import { API_URL } from "../lib/config";
import useAuth from "../lib/hooks/useAuth";
import axios from '../lib/utils/axios';
import Header from "./header";
import Footer from "./footer";
import 'swiper/swiper-bundle.css';
import { web_data } from "../lib/store/actions/actions";
SwiperCore.use([Autoplay]);
const Home = () => { 
    const { t } = useTranslation();     
    const lets = useSelector(state => state.mainReducer);
    const [data, setdata] = useState(null);
    const [notifications, setnotifications] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(web_data())
      .then((res) => {
        console.log(res);
        setdata(res.data)
      })
      .catch((error) => { 
      }); 
       
    }, [])

    useEffect(() => {
      console.log('hello',lets);
      if(lets.pages!=null){       
      
        setnotifications(lets.pages.data.filter(x=>x.type==="notif"))
      }

  }, [lets])

    
    if(!data)
      return 'loading';

    return (<>
    <Header />
    <main className="">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="row">
                  <div className="col-lg-12 col-sm-6 col-12 animate__animated animate__fadeInDown animate__delay-1s">
                    <h2 className="fw-bold fs-2 mt-lg-0 mt-5">{t('Users')}</h2>
                    <p className="fs-5">{t('users_text')}</p>
                    <div className="d-flex align-items-center gap-3 mb-5">
                      <div className="d-flex">
                        <img src="assets/images/demo/1.jpg" alt="" className="ratio-11 w-48 h-48 rounded-5 border-custom" />
                        <img src="assets/images/demo/2.jpg" alt="" className="ratio-11 w-48 h-48 rounded-5 ms-n-8 border-custom" />
                        <img src="assets/images/demo/3.jpg" alt="" className="ratio-11 w-48 h-48 rounded-5 ms-n-8 border-custom" />
                        <img src="assets/images/demo/4.jpg" alt="" className="ratio-11 w-48 h-48 rounded-5 ms-n-8 border-custom" />
                        <img src="assets/images/demo/5.jpg" alt="" className="ratio-11 w-48 h-48 rounded-5 ms-n-8 border-custom" />
                      </div>
                      <div className="d-flex flex-column">
                        <strong className="fs-6">+{data.users.count} хэрэглэгч</strong>
                        <span className="fs-12">Create your account</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-12 animate__animated animate__fadeInDown animate__delay-2s">
                    <h2 className="fw-bold fs-2 mt-lg-0 mt-5">{t('customers')}</h2>
                    <p className="fs-5">{t('customers_text')}</p>
                    <div className="d-flex align-items-center gap-3 mb-5">
                      <div className="d-flex">
                        <img src="assets/images/demo/1.jpg" alt="" className="ratio-11 w-48 h-48 rounded-2 border-custom" />
                        <img src="assets/images/demo/2.jpg" alt="" className="ratio-11 w-48 h-48 rounded-2 ms-n-8 border-custom" />
                        <img src="assets/images/demo/3.jpg" alt="" className="ratio-11 w-48 h-48 rounded-2 ms-n-8 border-custom" />
                        <img src="assets/images/demo/4.jpg" alt="" className="ratio-11 w-48 h-48 rounded-2 ms-n-8 border-custom" />
                        <img src="assets/images/demo/5.jpg" alt="" className="ratio-11 w-48 h-48 rounded-2 ms-n-8 border-custom" />
                      </div>
                      <div className="d-flex flex-column">
                        <strong className="fs-6">+{data.pages.count} харилцагч</strong>
                        <span className="fs-12">Publish your ad & survey</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column animate__animated animate__fadeInUp animate__delay-2s">
                  <h2 className="fs-6 fw-bold text-lg-start text-center">{ t('register_please')}</h2>
                  <h1 className="fs-14 text-lg-start text-center">{ t('ads_survey_enter')}</h1>
                  <div className="d-flex flex-wrap justify-content-lg-start justify-content-center gap-2 mb-5">
                    <a href="#" className="d-block">
                      <img src="assets/images/google.svg" alt="" />
                    </a>
                    <a href="#" className="d-block">
                      <img src="assets/images/apple.svg" alt="" />
                    </a>
                    <a href="#" className="d-block">
                      <img src="assets/images/huawei.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="offset-xl-1 col-xl-5 col-lg-6 position-relative">
                <img src="assets/images/phoneBG.svg" alt="" className="img-fluid position-absolute bottom-0 start-0 zindex-0 animate__animated animate__fadeInLeft animate__delay-1s" />
                <div className="phone position-relative zindex-1 ms-auto maxw-100 animate__animated animate__fadeInLeft animate__delay-2s">
                  <img src="assets/images/phone.png" alt="" className="h-100 img-fluid ratio-21" />
               <div className="swiperAbsolute" >    <div className="swiper  mySwiper"><Swiper
      
        
        spaceBetween={8} 
        slidesPerView={4}
        
        direction="vertical" 
        className="mySwiper"
        autoplay={{
            delay: 5000,  
            disableOnInteraction: false,
            reverseDirection: true,
          }}
         
        loop={true}
      
        effect={"flip"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {notifications.map(num => {
    return  <SwiperSlide>  <div class="swiper-slide">
    <div className="d-flex gap-2 p-2 w-100">
                        <img src="assets/images/favicon.svg" alt="" />
                        <div className="d-flex flex-column w-100">
                          <div className="d-flex align-items-baseline flex-fill justify-content-between mb-1 w-100 fs-14">
                            <strong>{num.title}</strong>
                            <small>now</small>
                          </div>
                          <span className="fs-12 d-block me-1">{num.content}</span>
                        </div>
                      </div></div>
    </SwiperSlide>;
})}
        
      </Swiper></div> </div>
                 
                </div>
              </div>
            </div>
          </main>
    <Footer />
    </>)

}

export default Home;
