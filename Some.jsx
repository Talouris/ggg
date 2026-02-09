'use client';















import "./_Header.scss";
import "../_Breadcrums.scss";
import Image from "next/image";
import { cx } from '@/utils/cx';
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
    const [burger, setBurger] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const threshold = 50;
        const handleScroll = () => {
        if (window.scrollY > threshold) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (burger) {
            document.body.classList.add(cx('no-scroll'));
        } else {
            document.body.classList.remove(cx('no-scroll'));
        }

        // cleanup на случай размонтирования
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [burger]);


    return (
        <>

        <FV><FV><SVD>
            <FVEV><SDV><DSV><DS><DV><DV><SD><SVS><VS>
                
                <DSV><S>
                    
                    <SVD>
                        <DSV><SV>
                            </SV></DSV></SVD></S></DSV></VS></SVS></SD></DV></DV></DS></DSV></SDV></FVEV></SVD></FV></FV>

            <header className={cx('header', scrolled && 'header--scrolled')}>


                <div className={cx('container')}>

                    <div className={cx('header__wrapper')}>

                        <div className={cx('contact-btn__inner')}>

                            <div className={cx('contact-btn')}>

                                <p className={cx('contact-btn__value')}>Contact us</p>

                                <div className={cx('contact-btn__icon')}>
                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_35_2214)">
                                            <path d="M11 6.8498C12.8696 6.8498 14.3876 8.39416 14.3877 10.3C14.3877 12.2059 12.8697 13.7502 11 13.7502C9.13037 13.7501 7.6123 12.2059 7.6123 10.3C7.61239 8.39437 9.13043 6.84989 11 6.8498ZM11 8.75019C10.1577 8.75028 9.47665 9.44463 9.47656 10.3C9.47656 11.1554 10.1577 11.8497 11 11.8498C11.8424 11.8498 12.5234 11.1555 12.5234 10.3C12.5234 9.44458 11.8423 8.75019 11 8.75019Z" fill="#e5a938" stroke="#E5A938" strokeWidth="0.1"></path>
                                            <path d="M10.9995 14.3498C13.1682 14.3498 15.1097 15.3457 16.4058 16.9094L16.6558 17.2297C16.9457 17.6229 16.8916 18.1711 16.5435 18.4982L16.4692 18.5607C16.084 18.8548 15.5471 18.7997 15.2261 18.4455L15.1655 18.3703C14.215 17.0807 12.7019 16.2502 10.9995 16.2502C9.40367 16.2503 7.97455 16.9801 7.01904 18.134L6.83447 18.3703C6.5436 18.7643 6.01271 18.8628 5.60889 18.6145L5.53076 18.5607C5.14387 18.2647 5.04654 17.7229 5.29053 17.3107L5.34424 17.2297C6.63297 15.4832 8.68647 14.35 10.9995 14.3498Z" fill="#e5a938" stroke="#E5A938" strokeWidth="0.1"></path>
                                            <path d="M15.9102 0.349804C16.4243 0.349804 16.8428 0.774248 16.8428 1.3V1.8498H17.4824C19.8404 1.85003 21.7539 3.79728 21.7539 6.20039V19.3996C21.7539 21.8027 19.8404 23.75 17.4824 23.7502H4.51758C2.15948 23.7501 0.246094 21.8028 0.246094 19.3996V6.20039C0.246094 3.79718 2.15948 1.84988 4.51758 1.8498H5.15723V1.3C5.15723 0.774344 5.57481 0.349958 6.08887 0.349804C6.60305 0.349804 7.02148 0.774248 7.02148 1.3V1.8498H14.9785V1.3C14.9785 0.774391 15.3962 0.350034 15.9102 0.349804ZM4.51758 3.75019C3.18785 3.75027 2.11035 4.84868 2.11035 6.20039V19.4006C2.11058 20.7521 3.18799 21.8497 4.51758 21.8498H17.4824C18.8119 21.8496 19.8884 20.752 19.8887 19.4006V6.20039C19.8887 4.84878 18.812 3.75042 17.4824 3.75019H16.8428V4.3C16.8428 4.82575 16.4243 5.25019 15.9102 5.25019C15.3962 5.24996 14.9785 4.82561 14.9785 4.3V3.75019H7.02148V4.3C7.02148 4.82575 6.60305 5.25019 6.08887 5.25019C5.57481 5.25004 5.15723 4.82566 5.15723 4.3V3.75019H4.51758Z" fill="#e5a938" stroke="#E5A938" strokeWidth="0.1"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_35_2214">
                                                <rect width="22" height="24" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                            </div>

                        </div>

                        <div className={cx('header__content-inner')}>

                            <div className={cx('header__content')}>

                                <nav className={cx('header__nav-list')}>


                                    <li className={cx('header__nav-item')}>
                                        <Link 
                                            href="/all_girls/" 
                                            title="Escort girls" 
                                            className={cx('header__nav-link')}
                                            onClick={() => setBurger(false)}
                                        >
                                            Girls
                                        </Link>
                                    </li>
                                    <li className={cx('header__nav-item')}>
                                        
                                        <Link 
                                            href="/get_in_touch/" 
                                            title="Get in touch" 
                                            className={cx('header__nav-link')}
                                            onClick={() => setBurger(false)}
                                        >
                                            Get in touch
                                        </Link>
                                    </li>
                                    <li className={cx('header__nav-item')}>
                                        <Link 
                                            href="/cooperation/" 
                                            title="cooperation" 
                                            className={cx('header__nav-link')}
                                            onClick={() => setBurger(false)}
                                        >
                                            Cooperation
                                        </Link>
                                    </li>
                                    <div className={cx('header__nav-logo-inner')}>
                                        <Link 
                                            href="/" 
                                            className={cx('header__logo-link')}
                                            onClick={() => setBurger(false)}
                                            aria-label="Harmony Escorts Logo"
                                        >
                                            <Image
                                                className={cx('header__nav-logo')}
                                                src="/ChatGPT Image 6 авг. 2025 г., 12_59_17-Photoroom.png"
                                                alt="Harmony Escorts Logo"
                                                width={128}
                                                height={128}
                                                onClick={() => setBurger(false)}
                                            />
                                        </Link>
                                    </div>
                                    <li className={cx('header__nav-item')}>
                                        <Link 
                                            href="/reviews/" 
                                            title="Reviews on our service" 
                                            className={cx('header__nav-link')}
                                            onClick={() => setBurger(false)}    
                                        >
                                            Reviews
                                        </Link>
                                    </li>
                                    <li className={cx('header__nav-item')}>
                                        <Link 
                                            href="/blogs/" 
                                            title="Blogs" 
                                            className={cx('header__nav-link')}
                                            onClick={() => setBurger(false)}
                                        >
                                            Blogs
                                        </Link>
                                    </li>
                                    <li className={cx('header__nav-item')}>
                                        <Link 
                                            href="/our_mission/" 
                                            title="Our Mission & Vision" 
                                            className={cx('header__nav-link')}
                                            onClick={() => setBurger(false)}
                                        >
                                            Our Mission & Vision
                                        </Link>
                                    </li>

                                </nav>

                            </div>

                        </div>

                        <div className={cx('header__actions-inner')}>

                            <div className={cx('header__actions')}>

                                <div className={cx('header__action')}>
                                    <button
                                        type="button"
                                        aria-label="Search"
                                        className={cx('header__search')}
                                    >
                                        <div className={cx('header__search-value')}>
                                            <Image
                                                src="/search.svg"
                                                alt="Search Icon"
                                                width={28}
                                                height={28}
                                            />
                                        </div>
                                    </button>
                                </div>
                                <div className={cx('header__action')}>
                                    <div className={cx('header_favorite')}>
                                        <div className={cx('header_favorite-icon')}>
                                            <Image
                                                src="/heart.svg"
                                                alt="Heart Icon"
                                                width={34}
                                                height={32}
                                            />
                                        </div>
                                        <p className={cx('header__favorite-value')}>10</p>
                                    </div>
                                </div>
                                <div className={cx('header__action')}>
                                    <button 
                                        className={cx('header__burger')} 
                                        onClick={() => setBurger((prev) => !prev)}
                                        aria-label="Burger"
                                    >
                                        <div className={cx('header__burger-icon')}>
                                            <span className={cx('header__burger-line')}></span>
                                        </div>
                                    </button>
                                </div>

                            </div>

                        </div>


                    </div>

                    <div className={cx('burger__menu-inner', burger && 'open-burger')}>
                        <nav className={cx('burger__menu')}>
                            <ul className={cx('burger__menu-list')}>
                                <li className={cx('burger__menu-item')}>
                                    <Link 
                                        href="/all_girls/" 
                                        title="Escort girls" 
                                        className={cx('burger__menu-link')}
                                        onClick={() => setBurger(false)}
                                    >
                                        Girls
                                    </Link>
                                </li>
                                <li className={cx('burger__menu-item')}>
                                    <Link 
                                        href="/get_in_touch/" 
                                        title="Get in touch" 
                                        className={cx('burger__menu-link')}
                                        onClick={() => setBurger(false)}
                                    >
                                        Get in touch
                                    </Link>
                                </li>
                                <li className={cx('burger__menu-item')}>
                                    <Link 
                                        href="/cooperation/" 
                                        title="Сooperation with us" 
                                        className={cx('burger__menu-link')}
                                        onClick={() => setBurger(false)}
                                    >
                                        Cooperation
                                    </Link>
                                </li>
                                <li className={cx('burger__menu-item')}>
                                    <Link 
                                        href="/reviews/" 
                                        title="Reviews on our service" 
                                        className={cx('burger__menu-link')}
                                        onClick={() => setBurger(false)}
                                    >
                                        Reviews
                                    </Link>
                                </li>
                                <li className={cx('burger__menu-item')}>
                                    <Link 
                                        href="/our_mission/" 
                                        title="Our Mission & Vision" 
                                        className={cx('burger__menu-link')}
                                        onClick={() => setBurger(false)}
                                    >
                                        Our Mission & Vision
                                    </Link>
                                </li>
                                <li className={cx('burger__menu-item')}>
                                    <Link 
                                        href="/blogs/" 
                                        title="Blogs" 
                                        className={cx('burger__menu-link')}
                                        onClick={() => setBurger(false)}
                                    >
                                        Blogs
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

{/* 

 kf hewjg hewj hewrig eg 
 \<tr><table>h try 
    <tr> htr
         h
         <tr> rteh
             export ht
             r 
             tr h
             <tr> console.error( error ert
                 
                 true t);
             </tr></tr></tr></table></tr> */}


 {/* gf
 fg <picture>
    <source media="(gr 
    rg rg 
    r
    grf r
     
     g
     gr 
     r
      g
       
       gr 
       gr
        g
         
         g)" srcset="" />
    <img src="" alt="" />
 </picture> */}


                </div>
            </header>
        </>
    )
}
