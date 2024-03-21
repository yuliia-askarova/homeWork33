import React from "react";
import PhoneIcon from "../../assets/3333.png"; 
import EmailIcon from "../../assets/4444.png";
import './Contacts.css'

const Contacts = () => {
  return (
    <div>
      <h2 className="contacts">Контакти</h2>
      <div className="contacts-section">

        <div className="phone-contact">
          <img className="contact-icon" src={PhoneIcon} alt="" />
          <h3>Зателефонуйте нам</h3>
          <p className="contact-info">+353 083 080 5028</p>
        </div>

        <div className="email-contact">
          <img className="contact-icon" src={EmailIcon} alt="" />
          <h3>Напишіть нам</h3>
          <p className="contact-info">someEmailAddress@gmail.com</p>
        </div>

      </div>
    </div>
  );
};

export default Contacts;
