import React from 'react'
import styles from './Content_form.module.css';
import Button from '../Button/Button';
import {MdMessage} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';

const Content_form = () => {
  return (
      <section className={`${styles.container} `}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button icon={<MdMessage fontSize={24}/>} text="VIA SUPPORT CHAT"/>
        <Button icon={<FaPhoneAlt fontSize={24}/>} text="VIA CALL"/>
        </div>
        <div className={styles.l_btn}>
          <Button pors={'s'} icon={<MdMessage fontSize={24}/>} text="VIA EMAIL FORM"/>
        </div>
        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="naam">Name</label>
            <input type="text" name="name" id="naam" />
          </div>
          <div className={styles.form_control}>
            <label className={styles.mail} htmlFor="mail">Email</label>
            <input type="email" name="email" id="mail" />
          </div>
          <div className={styles.form_control}>
            <label className={styles.mail} htmlFor="mail">Query</label>
            <textarea name="" id="" cols="30" rows="7"></textarea>
          </div>
          <div className={styles.submit}>
            <Button  pors='p' text="SUBMIT"/>
          </div>
        </form>
        </div>
        

        
        <div className={styles.Content_image}>   
         <img src="../public/Service 24_7-pana 1.png" alt=""  />
            </div>
        
    </section>
  )
}

export default Content_form