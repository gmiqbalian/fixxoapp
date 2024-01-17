import React from 'react'
import Header from '../fragments/Header/Header';
import Breadcrumb from '../fragments/BreadCrumb/Breadcrumb';
import Map from '../fragments/GoogleMap/Map';
import Footer from '../fragments/Footer/Footer';
import ContactForm from '../fragments/ContactForm/ContactForm';

const Contact = () => {
  return (
    <>
      <Header />
      <Breadcrumb currentPage="Contacts" />
      <Map />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact