import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './header';
import Footer from './footer';

export default function TermsOfCondition() {
  const lets = useSelector(state => state.mainReducer);

  const [terms, setTerms] = useState({ id: 2, title: '', content: '', type: 'terms', lang: 'mn' });

  useEffect(() => {
    if (lets.pages != null) {
      setTerms(lets.pages.data.filter(x => x.type === 'terms')[0]);
    }
  }, [lets]);

  return (
    <>
      <Header />
      <div className="d-flex align-items-center justify-content-between p-3">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          {' '}
          {terms?.title}
        </h1>
      </div>
      <hr className="m-0" />
      <div className="p-3" dangerouslySetInnerHTML={{ __html: terms?.content }}></div>
      <Footer />
    </>
  );
}
