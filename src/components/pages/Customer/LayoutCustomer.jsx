import React from 'react'
import { useEffect, useState } from 'react'
import { loadScripts, loadLink } from '../../../util/helper'
import { Outlet } from 'react-router-dom'
import Header from './Layout/Header';
import Footer from './Layout/Footer';

// import { *asexportHooks } from 'fullcalendar/src/exports';

export default function LayoutCustomer() {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (isMount) {
      // document.body.className ="product-grid-sidebar-left product-cart checkout-cart blog";
      // document.body.id = "product-sidebar-left"
      // Load CSS
      let links = loadLink([
        'style.css',
        // Main
        './assets/CustomerPages/libs/bootstrap/css/bootstrap.min.css',
        '~/assets/CustomerPages/libs/font-awesome/css/font-awesome.min.css',
        '~/assets/CustomerPages/libs/font-material/css/material-design-iconic-font.min.css',
        '~/assets/CustomerPages/libs/nivo-slider/css/nivo-slider.css',
        '~/assets/CustomerPages/libs/nivo-slider/css/animate.css',
        '~/assets/CustomerPages/libs/nivo-slider/css/style.css',
        '~/assets/CustomerPages/libs/owl-carousel/assets/owl.carousel.min.css',
        // shoppingcart
        '~/assets/CustomerPages/libs/slider-range/css/jslider.css',
        '~/assets/CustomerPages/libs/slick-slider/css/slick.css',
        '~/assets/CustomerPages/libs/slick-slider/css/slick-theme.css',


        // templates css
        './assets/CustomerPages/css/style.css',
        './assets/CustomerPages/css/reponsive.css',
      ]);
      // Load file scripts của layout client
      let scripts = loadScripts([
        // Main
        '../assets/CustomerPages/libs/jquery/jquery.min.js',
        '../assets/CustomerPages/libs/popper/popper.min.js',
        '../assets/CustomerPages/libs/bootstrap/js/bootstrap.min.js',
        '../assets/CustomerPages/libs/nivo-slider/js/jquery.nivo.slider.js',
        '../assets/CustomerPages/libs/owl-carousel/owl.carousel.min.js',
        '../assets/CustomerPages/libs/slider-range/js/tmpl.js',
        '../assets/CustomerPages/libs/slider-range/js/jquery.dependClass-0.1.js',
        '../assets/CustomerPages/libs/slider-range/js/draggable-0.1.js',
        '../assets/CustomerPages/libs/slider-range/js/jquery.slider.js',
        // shopping cart
        '../assets/CustomerPages/libs/slick-slider/js/slick.min.js',

        // template JS
        '../assets/CustomerPages/js/theme.js',
        
      ]);
      return () => {
        // Xóa file scripts khi không dùng layout client nữa
        for (let src of scripts) {
          src.remove();
        }
        // Xóa CSS
        for (let link of links) {
          link.remove();
        }
      }
    } else {
      setIsMount(true);
    }
  }, [isMount])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
