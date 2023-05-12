import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './header';
import Footer from './footer';

export default function TermsOfCondition() {
  const lets = useSelector(state => state.mainReducer);

  const [policy, setPolicy] = useState({ id: 2, title: '', content: '', type: 'terms', lang: 'mn' });

  useEffect(() => {
    if (lets.pages != null) {
      setPolicy(lets.pages.data.filter(x => x.type === 'policy')[0]);
    }
  }, [lets]);

  return (
    <>
      <Header />
      <div className="d-flex align-items-center justify-content-between p-3">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          {policy.title}
        </h1>
      </div>
      <hr className="m-0" />
      <div className="p-3" dangerouslySetInnerHTML={{ __html: policy?.content }}></div>
      <Footer />
    </>
  );
}
