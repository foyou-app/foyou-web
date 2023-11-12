import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useDispatch, useSelector } from 'react-redux';
import SwiperCore, { Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTranslation } from 'react-i18next';

import Header from './header';
import Footer from './footer';
import 'swiper/swiper-bundle.css';
import { web_data } from '../lib/store/actions/actions';

SwiperCore.use([Autoplay]);

const Home = () => {
  const { t } = useTranslation();
  const lets = useSelector((state) => state.mainReducer);
  const [data, setdata] = useState(null);
  const [notifications, setnotifications] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(web_data())
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    if (lets.pages != null) {
      setnotifications(lets.pages.data.filter((x) => x.type === 'notif'));
    }
  }, [lets]);

  return (
    <>
      <Header />
      <main className='row d-flex justify-content-center align-items-center'>
        <div className='col-md-6 animate__animated animate__fadeInDown animate__delay-1s'>
          <p style={{ textAlign: 'justify' }} className='fs-3 text-justify'>
            {t('users_text')}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
