import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ShortVideo() {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
    const slides = document.querySelectorAll('.swiper-slide');
    
    slides.forEach((slide) => {
      const iframe = slide.querySelector('iframe');
      
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'setVolume', args: [0] }), 
          '*'
        );
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'stopVideo' }), 
          '*'
        );
      }
    });
  }, [activeIndex])

    return(
        <div id="short_video">
            <h3>공연 미리보기</h3>
            <p>짧은 영상으로 분위기를 확인해보세요.<Link to="#"><span>더보기<img src={`${process.env.PUBLIC_URL}/img/arrow_icon.svg`} alt="화살표 아이콘"/></span></Link></p>
            <div className="swiper_box">
                <Swiper
                 slidesPerView={1.3} spaceBetween={0} centeredSlides={true} loop={true}
                 onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
                 >

                    <SwiperSlide>
                            <div className="video_cover_1"></div>
                            <div className="video_cover_2"></div>
                            <iframe
                            width="100%"
                            height="100%"
                            src="https://youtube.com/embed/eGiX1TiwrrM?si=ghh2axYXwwrVjQ7P&enablejsapi=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture=*;allowfullscreen"
                            allowFullScreen
                            title="옥탑방 고양이 쇼츠"
                            ></iframe>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="video_cover_1"></div>
                        <div className="video_cover_2"></div>
                        <iframe
                        width="100%"
                        height="100%"
                        src="https://youtube.com/embed/_meDNPkGyyw?si=9RuZIJ1HZQo9SF0k&enablejsapi=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture=*;allowfullscreen"
                        allowFullScreen
                        title="운빨로맨스 쇼츠"
                        ></iframe>
                        
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="video_cover_1"></div>
                        <div className="video_cover_2"></div>
                        <iframe
                        width="100%"
                        height="100%"
                        src="https://youtube.com/embed/G4b-OZNlYEE?si=WWoVbTc7yMWP55SA&enablejsapi=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture=*;allowfullscreen"
                        allowFullScreen
                        title="쓰로우 쇼츠"
                        ></iframe>
                        
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="video_cover_1"></div>
                        <div className="video_cover_2"></div>
                        <iframe
                        width="100%"
                        height="100%"
                        src="https://youtube.com/embed/Dpy9iBLoP1c?si=_WKRWtlCYHpN8V73&enablejsapi=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture=*;allowfullscreen"
                        allowFullScreen
                        title="홍도 쇼츠"
                        ></iframe>
                        
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="video_cover_1"></div>
                        <div className="video_cover_2"></div>
                        <iframe
                        width="100%"
                        height="100%"
                        src="https://youtube.com/embed/8IOPM0diXfo?si=_W_xX5twaCOGHfUf&enablejsapi=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture=*;allowfullscreen"
                        allowFullScreen
                        title="아주아주 배고픈 애벌레 쇼츠"
                        ></iframe>
                        
                    </SwiperSlide>

                    
                </Swiper>
            </div>
        </div>
    )
}