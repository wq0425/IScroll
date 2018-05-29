import React, { Component } from 'react';
import Swiper from "swiper";
export default class Header extends Component {
    componentDidMount() {
        var swiper = new Swiper('.headerLeft', {
            slidesPerView: 'auto',
            spaceBetween: 0
        });
    }
  
  render() {
      
    return (
      <div className="header">
      <div className="headerLeft">
            <div className="swiper-wrapper">
                <div className="swiper-slide">推荐</div>
                <div className="swiper-slide">男装</div>
                <div className="swiper-slide">女装</div>
                <div className="swiper-slide">童装</div>
                <div className="swiper-slide">男鞋</div>
                <div className="swiper-slide">女鞋</div>
                <div className="swiper-slide">童鞋</div>
                <div className="swiper-slide">内衣</div>
            </div>
        </div>
        <div className="headerRight">↓</div>
      </div>
    )
  }
};

