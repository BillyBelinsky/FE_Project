import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header_logo">
            <img src="https://s3-alpha-sig.figma.com/img/a740/3bf5/478de81c71ce204d2a8248104a605ad1?Expires=1676246400&Signature=q7rsYCB98flWl5NIlGUZXBZZLoGm5oUAJ2bj~hP7IG~LsmtmYYNHSxqXYd50TeXap5ifqr13nU4rvZMqZ5UdC4C69lVNBKEJKBpCe2cJD4JI7ztuX14kqu4ZuIPzMQDeVGHeenzzoNe2KC5uZJsCPyBTTy3RG79E~bs8LEzXzmMAqlV0UBriqdtrZvxtOXP3a~7M7iCi9Y2Cp22GQfHdltbUagmy6aT8b9zm1sHIgli6-NPsfGIk09thC0PWxckS9mcz~NReDyv3hJ9QMEVRog3f8e~h-K7J4aQKazKZjMpVjlvyXK7eRVw55EcKCXjviZpyXgrpcXqCVKxpVksc5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="logo"/>
        </div>
        <button className='header-button'>Каталог</button>
        <nav className="header-nav">
          <a href="#categories">Категории</a>
          <a href="#coupon">Купон</a>
          <a href="#offers">Акции</a>
          <a href="#contact">Контакты</a>
          <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>
        </nav>
      </header>
      <div className="sales-offer">
        <div className="sales-offer_text">
          <h1>Распродажа в честь нового сезона</h1>
        </div>
        <div className="buttons">
          <button className='sales-offer_button'>Все акции</button>
          <button className='more_button'>Подробнее</button>
        </div>
        <div className="sales-offer_image">
          <img src='https://s3-alpha-sig.figma.com/img/c2ed/c219/e1d4b4feb7398cca7dd109735dcf6779?Expires=1676246400&Signature=mExX7LE6-~qXyOcdaI7AqWAu8AC5BspuaUYXDlMo8Xm2skp8oz15F6R5SGcIqHUfkOVSKYopJp0PXVJZYTuEVcbRAg8-iwqkDptNRVx1CS7YlMBCvg83k9BFuRlS4USgq28jMRI4nb0m7-ALZ7Tlut5IkXRgZ6~mj1DBD-2cBCsZMfi8MUP-mo-ktWWZzdt8IqSxrvwAe6Vr-Ei8pxPFZhw3lLdAfACo-WF1TXM~b5SMAU7cxvS73d4IFXf-KUkmLKU3erVGwfn0FT-Cz6hDde9r74wSoQNmOMs4exUcW587yax~9MmwxZYV6JQRRZ2a37AhMLbXJjuRcwVewS4Ldw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='sales-offer'/>
        </div>
      </div>
      <div className="categories">
        <div className="categories_text">
          <h1>Категории</h1>
          <button className='categories_button'>Все категории</button>
        </div>
      </div>
      <div className="coupon">
      <div classname="dwarf_img">
          <img src='https://s3-alpha-sig.figma.com/img/6c96/c1a5/13abcc73e6b65f08b020d42ef8ae8eb5?Expires=1676246400&Signature=YuOpkg-wQP7BRiV7aDVs4MPdnjIlgkDC7lTqPWdtPO2dMlKyCi3g63SBcTCmv5KBBeEgGmOShEZ66T93uRheyPCJ1XfO9IRGxlM3rOx8qUV4oYaWdN9HU9Ha3AiHXKOlxY5sjnVInpXXas2Kzo4UcWcbb4R3DpqtvP5BHfwCqeNIoeYPcWR7CqYkq1R8i-1tStMhyCdsE3JJXwzufbCAOLZXOzRpIOL8cTtur~AX6cahf1nngaS5vajlDsrFnXsEFB5vY1Y9Yet-UO2fkkyXAjwMkmaCO~gyZUsZMPfBnnp6g2D-PGwIsTxOzQ270EtYrU9hNvOVfc5sDL8cGH4KHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' class="mirrored-image" alt='dwarf'/>
        </div>
        <div className="coupon_text">
          <h1>Скидка 5 % на первый заказ</h1>
        </div>
        <div className="phone_field">
          <input type="text" placeholder="+7" className="phone_input"/>
        </div>
        <button className='coupon_button'>Получить купон</button>  
      </div>
      <div className="contacts">
        <h1>Контакты</h1>
        <p>+7 999 999 99 99</p>
        <FontAwesomeIcon icon={faInstagram} className='ig_icon'/>
        <FontAwesomeIcon icon={faWhatsapp} className='whatsapp_icon'/>
      </div>
      <div className="address">
        <h1>Адрес</h1>
        <p>Ул. Пушкина, дом Колотушкина</p>
        <h2>Режим работы</h2>
        <p>Круглосуточно</p>
      </div>
    </div>
  )
}

export default Home
