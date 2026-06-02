import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function MainSlide() {
    return(
        <div id="main_slide">
            <div className="swiper_box">
                <Swiper slidesPerView={1} loop={true}>
                    <SwiperSlide>
                        <Link className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_1.png`} alt="메인 슬라이드 이미지" />
                            <div>
                                <p>ROMANTIC COMEDY</p>
                                <h2>옥탑방 고양이</h2>
                                <span>#설렘</span>
                                <span>#로맨스</span>
                                <span>#버라이어티</span>

                                <p>
                                    이사 먼저 한 드라마 작가 꿈나무 정은<br/>
                                    계약 먼저 한 독립한 건축학도 경민<br/>
                                    <br/>
                                    어쩌다 한 집?!<br/>
                                    버라이어티 현실 공감 로맨스!
                                </p>
                                <Link href="/">예매하기<img src={`${process.env.PUBLIC_URL}/img/big_arrow.svg`} alt="큰화살표" /></Link>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_1.png`} alt="메인 슬라이드 이미지" />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_1.png`} alt="메인 슬라이드 이미지" />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_1.png`} alt="메인 슬라이드 이미지" />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_1.png`} alt="메인 슬라이드 이미지" />
                        </Link>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}