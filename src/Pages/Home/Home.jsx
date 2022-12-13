import React, { useState } from "react";
import "./Home.css";

import featured1 from "../../assets/img/featured1.png";
import featured2 from "../../assets/img/featured2.png";
import featured3 from "../../assets/img/featured3.png";
import home from "../../assets/img/home.png";
import new1 from "../../assets/img/new1.png";
import new2 from "../../assets/img/new2.png";
import new3 from "../../assets/img/new3.png";
import new4 from "../../assets/img/new4.png";
import product1 from "../../assets/img/product1.png";
import product2 from "../../assets/img/product2.png";
import product3 from "../../assets/img/product3.png";
import product4 from "../../assets/img/product4.png";
import product5 from "../../assets/img/product5.png";
import story from "../../assets/img/story.png";
import testimonial from "../../assets/img/testimonial.png";
import testimonial1 from "../../assets/img/testimonial1.jpg";
import testimonial2 from "../../assets/img/testimonial2.jpg";
import testimonial3 from "../../assets/img/testimonial3.jpg";

function Home() {
  const [showNav, setShowNav] = useState(false);
  const navToggler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header " id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <i className="bx bxs-watch nav__logo-icon"></i> Rolex
          </a>
          {/* navMenu */}
          <div
            className={showNav ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#featured" className="nav__link">
                  Featured
                </a>
              </li>
              <li className="nav__item">
                <a href="#products" className="nav__link">
                  Products
                </a>
              </li>
              <li className="nav__item">
                <a href="#new" className="nav__link">
                  New
                </a>
              </li>
            </ul>
            {/* navClose */}
            <div className="nav__close" id="nav-close" onClick={navToggler}>
              <i className="bx bx-x"></i>
            </div>
          </div>

          <div className="nav__btns">
            {/* <!-- Theme change button --> */}
            <i className="bx bx-moon change-theme" id="theme-button"></i>

            <div className="nav__shop" id="cart-shop">
              <i className="bx bx-shopping-bag"></i>
            </div>
            {/* navToggle */}
            <div className="nav__toggle" id="nav-toggle" onClick={navToggler}>
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* <!--==================== CART ====================--> */}
      <div className="cart" id="cart">
        <i className="bx bx-x cart__close" id="cart-close"></i>

        <h2 className="cart__title-center">My Cart</h2>

        <div className="cart__container">
          <article className="cart__card">
            <div className="cart__box">
              <img
                src="assets/img/featured1.png"
                alt=""
                className="cart__img"
              />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">Jazzmaster</h3>
              <span className="cart__price">$1050</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span className="cart__amount-box">
                    <i className="bx bx-minus"></i>
                  </span>

                  <span className="cart__amount-number">1</span>

                  <span className="cart__amount-box">
                    <i className="bx bx-plus"></i>
                  </span>
                </div>

                <i className="bx bx-trash-alt cart__amount-trash"></i>
              </div>
            </div>
          </article>

          <article className="cart__card">
            <div className="cart__box">
              <img
                src="assets/img/featured3.png"
                alt=""
                className="cart__img"
              />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">Rose Gold</h3>
              <span className="cart__price">$850</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span className="cart__amount-box">
                    <i className="bx bx-minus"></i>
                  </span>

                  <span className="cart__amount-number">1</span>

                  <span className="cart__amount-box">
                    <i className="bx bx-plus"></i>
                  </span>
                </div>

                <i className="bx bx-trash-alt cart__amount-trash"></i>
              </div>
            </div>
          </article>

          <article className="cart__card">
            <div className="cart__box">
              <img src={new1} alt="" className="cart__img" />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">Longines Rose</h3>
              <span className="cart__price">$980</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span className="cart__amount-box">
                    <i className="bx bx-minus"></i>
                  </span>

                  <span className="cart__amount-number">1</span>

                  <span className="cart__amount-box">
                    <i className="bx bx-plus"></i>
                  </span>
                </div>

                <i className="bx bx-trash-alt cart__amount-trash"></i>
              </div>
            </div>
          </article>
        </div>

        <div className="cart__prices">
          <span className="cart__prices-item">3 items</span>
          <span className="cart__prices-total">$2880</span>
        </div>
      </div>

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home" id="home">
          <div className="home__container container grid">
            <div className="home__img-bg">
              <img src={home} alt="" className="home__img" />
            </div>

            <div className="home__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="home__social-link"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="home__social-link"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="home__social-link"
              >
                Instagram
              </a>
            </div>

            <div className="home__data">
              <h1 className="home__title">
                NEW WATCH <br /> COLLECTIONS B720
              </h1>
              <p className="home__description">
                Latest arrival of the new imported watches of the B720 series,
                with a modern and resistant design.
              </p>
              <span className="home__price">$1245</span>

              <div className="home__btns">
                <a href="#" className="button button--gray button--small">
                  Discover
                </a>

                <button className="button home__button">ADD TO CART</button>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== FEATURED ====================--> */}
        <section className="featured section container" id="featured">
          <h2 className="section__title">Featured</h2>

          <div className="featured__container grid">
            <article className="featured__card">
              <span className="featured__tag">Sale</span>

              <img src={featured1} alt="" className="featured__img" />

              <div className="featured__data">
                <h3 className="featured__title">Jazzmaster</h3>
                <span className="featured__price">$1050</span>
              </div>

              <button className="button featured__button">ADD TO CART</button>
            </article>

            <article className="featured__card">
              <span className="featured__tag">Sale</span>

              <img src={featured2} alt="" className="featured__img" />

              <div className="featured__data">
                <h3 className="featured__title">Ingersoll</h3>
                <span className="featured__price">$250</span>
              </div>

              <button className="button featured__button">ADD TO CART</button>
            </article>

            <article className="featured__card">
              <span className="featured__tag">Sale</span>

              <img src={featured3} alt="" className="featured__img" />

              <div className="featured__data">
                <h3 className="featured__title">Rose gold</h3>
                <span className="featured__price">$890</span>
              </div>

              <button className="button featured__button">ADD TO CART</button>
            </article>
          </div>
        </section>

        {/* <!--==================== STORY ====================--> */}
        <section className="story section container">
          <div className="story__container grid">
            <div className="story__data">
              <h2 className="section__title story__section-title">Our Story</h2>

              <h1 className="story__title">
                Inspirational Watch of <br /> this year
              </h1>

              <p className="story__description">
                The latest and modern watches of this year, is available in
                various presentations in this store, discover them now.
              </p>

              <a href="#" className="button button--small">
                Discover
              </a>
            </div>

            <div className="story__images">
              <img src={story} alt="" className="story__img" />
              <div className="story__square"></div>
            </div>
          </div>
        </section>

        {/* <!--==================== PRODUCTS ====================--> */}
        <section className="products section container" id="products">
          <h2 className="section__title">Products</h2>

          <div className="products__container grid">
            <article className="products__card">
              <img src={product1} alt="" className="products__img" />

              <h3 className="products__title">Spirit rose</h3>
              <span className="products__price">$1500</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>

            <article className="products__card">
              <img src={product2} alt="" className="products__img" />

              <h3 className="products__title">Khaki pilot</h3>
              <span className="products__price">$1350</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>

            <article className="products__card">
              <img src={product3} alt="" className="products__img" />

              <h3 className="products__title">Jubilee black</h3>
              <span className="products__price">$870</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>

            <article className="products__card">
              <img src={product4} alt="" className="products__img" />

              <h3 className="products__title">Fosil me3</h3>
              <span className="products__price">$650</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>

            <article className="products__card">
              <img src={product5} alt="" className="products__img" />

              <h3 className="products__title">Duchen</h3>
              <span className="products__price">$950</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>
          </div>
        </section>

        {/* <!--==================== TESTIMONIAL ====================--> */}
        <section className="testimonial section container">
          <div className="testimonial__container grid">
            <div className="swiper testimonial-swiper">
              <div className="swiper-wrapper">
                <div className="testimonial__card swiper-slide">
                  <div className="testimonial__quote">
                    <i className="bx bxs-quote-alt-left"></i>
                  </div>
                  <p className="testimonial__description">
                    They are the best watches that one acquires, also they are
                    always with the latest news and trends, with a very
                    comfortable price and especially with the attention you
                    receive, they are always attentive to your questions.
                  </p>
                  <h3 className="testimonial__date">March 27. 2021</h3>

                  <div className="testimonial__perfil">
                    <img
                      src={testimonial1}
                      alt=""
                      className="testimonial__perfil-img"
                    />

                    <div className="testimonial__perfil-data">
                      <span className="testimonial__perfil-name">Lee Doe</span>
                      <span className="testimonial__perfil-detail">
                        Director of a company
                      </span>
                    </div>
                  </div>
                </div>

                <div className="testimonial__card swiper-slide">
                  <div className="testimonial__quote">
                    <i className="bx bxs-quote-alt-left"></i>
                  </div>
                  <p className="testimonial__description">
                    They are the best watches that one acquires, also they are
                    always with the latest news and trends, with a very
                    comfortable price and especially with the attention you
                    receive, they are always attentive to your questions.
                  </p>
                  <h3 className="testimonial__date">March 27. 2021</h3>

                  <div className="testimonial__perfil">
                    <img
                      src={testimonial2}
                      alt=""
                      className="testimonial__perfil-img"
                    />

                    <div className="testimonial__perfil-data">
                      <span className="testimonial__perfil-name">
                        Samantha Mey
                      </span>
                      <span className="testimonial__perfil-detail">
                        Director of a company
                      </span>
                    </div>
                  </div>
                </div>

                <div className="testimonial__card swiper-slide">
                  <div className="testimonial__quote">
                    <i className="bx bxs-quote-alt-left"></i>
                  </div>
                  <p className="testimonial__description">
                    They are the best watches that one acquires, also they are
                    always with the latest news and trends, with a very
                    comfortable price and especially with the attention you
                    receive, they are always attentive to your questions.
                  </p>
                  <h3 className="testimonial__date">March 27. 2021</h3>

                  <div className="testimonial__perfil">
                    <img
                      src={testimonial3}
                      alt=""
                      className="testimonial__perfil-img"
                    />

                    <div className="testimonial__perfil-data">
                      <span className="testimonial__perfil-name">
                        Raul Zaman
                      </span>
                      <span className="testimonial__perfil-detail">
                        Director of a company
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-button-next">
                <i className="bx bx-right-arrow-alt"></i>
              </div>
              <div className="swiper-button-prev">
                <i className="bx bx-left-arrow-alt"></i>
              </div>
            </div>

            <div className="testimonial__images">
              <div className="testimonial__square"></div>
              <img src={testimonial} alt="" className="testimonial__img" />
            </div>
          </div>
        </section>

        {/* <!--==================== NEW ====================--> */}
        <section className="new section container" id="new">
          <h2 className="section__title">New Arrivals</h2>

          <div className="new__container">
            <div className="swiper new-swiper">
              <div className="swiper-wrapper">
                <article className="new__card swiper-slide">
                  <span className="new__tag">New</span>

                  <img src={new1} alt="" className="new__img" />

                  <div className="new__data">
                    <h3 className="new__title">Longines rose</h3>
                    <span className="new__price">$980</span>
                  </div>

                  <button className="button new__button">ADD TO CART</button>
                </article>

                <article className="new__card swiper-slide">
                  <span className="new__tag">New</span>

                  <img src={new2} alt="" className="new__img" />

                  <div className="new__data">
                    <h3 className="new__title">Jazzmaster</h3>
                    <span className="new__price">$1150</span>
                  </div>

                  <button className="button new__button">ADD TO CART</button>
                </article>

                <article className="new__card swiper-slide">
                  <span className="new__tag">New</span>

                  <img src={new3} alt="" className="new__img" />

                  <div className="new__data">
                    <h3 className="new__title">Dreyfuss gold</h3>
                    <span className="new__price">$750</span>
                  </div>

                  <button className="button new__button">ADD TO CART</button>
                </article>

                <article className="new__card swiper-slide">
                  <span className="new__tag">New</span>

                  <img src={new4} alt="" className="new__img" />

                  <div className="new__data">
                    <h3 className="new__title">Portuguese rose</h3>
                    <span className="new__price">$1590</span>
                  </div>

                  <button className="button new__button">ADD TO CART</button>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== NEWSLETTER ====================--> */}
        <section className="newsletter section container">
          <div className="newsletter__bg grid">
            <div>
              <h2 className="newsletter__title">
                Subscribe Our <br /> Newsletter
              </h2>
              <p className="newsletter__description">
                Don't miss out on your discounts. Subscribe to our email
                newsletter to get the best offers, discounts, coupons, gifts and
                much more.
              </p>
            </div>

            <form action="" className="newsletter__subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter__input"
              />
              <button className="button">SUBSCRIBE</button>
            </form>
          </div>
        </section>
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <h3 className="footer__title">Our information</h3>

            <ul className="footer__list">
              <li>1234 - Peru</li>
              <li>La Libertad 43210</li>
              <li>123-456-789</li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">About Us</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Copy Right
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Product</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Road bikes
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Mountain bikes
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Electric
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Accesories
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Social</h3>

            <ul className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-facebook"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </ul>
          </div>
        </div>

        <span className="footer__copy">
          &#169; Bedimcode. All rigths reserved
        </span>
      </footer>
    </>
  );
}

export default Home;
<></>;
