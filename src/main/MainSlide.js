 import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

export default function MainSlide() {
    return(
        <div id="main_slide">
            <div className="swiper_box">
                <Swiper slidesPerView={1} loop={true} pagination={true} modules={[Pagination]}>
                    <SwiperSlide>
                        <Link to="/detail" className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_1.png`} alt="메인 슬라이드 이미지" />
                            <div className="textbox_3">
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
                            </div>
                        </Link>
                        <Link className="poster_btn" to="/">예매하기<img src={`${process.env.PUBLIC_URL}/img/big_arrow.svg`} alt="큰화살표" /></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_2.png`} alt="메인 슬라이드 이미지" />
                            <div className="textbox_2">
                                <p>DRAMA</p>
                                <h2>쓰로우</h2>
                                <span>#성장</span>
                                <span>#1인극</span>
                                <span>#드라마</span>

                                <p>
                                    가장 어두운 새벽<br/>
                                    나를 내던져 완성한 찬란한 성장<br/>
                                    <br/>
                                    오늘을 버티는<br/>
                                    모두를 위한 이야기
                                </p>
                            </div>
                        </Link>
                        <Link className="poster_btn" to="/">예매하기<img src={`${process.env.PUBLIC_URL}/img/big_arrow.svg`} alt="큰화살표" /></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_3.png`} alt="메인 슬라이드 이미지" />
                            <div className="textbox_3">
                                <p>DRAMA</p>
                                <h2>홍도</h2>
                                <span>#화류비련극</span>
                                <span>#신파극의_재탄생</span>

                                <p>
                                    1930년대 고전 신파의<br/>
                                    세련된 현대적 재탄생<br/>
                                    <br/>
                                    기생 홍도와 명문가 광호의<br/>
                                    파국으로 치닫는 사랑 이야기
                                </p>
                            </div>
                        </Link>
                        <Link className="poster_btn" to="/">예매하기<img src={`${process.env.PUBLIC_URL}/img/big_arrow.svg`} alt="큰화살표" /></Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="main_link">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_4.png`} alt="메인 슬라이드 이미지" />
                            <div className="textbox_1">
                                <p>MUSICAL</p>
                                <h2>아주아주 배고픈<br/>애벌레 쇼</h2>
                                <span>#어린이뮤지컬</span>
                                <span>#브로드웨이_오리지널</span>

                                <p>
                                    상상을 자극하는<br/>
                                    '에릭 칼'의 명작 4권을 한 무대에서<br/>
                                    <br/>
                                    75개의 대형 퍼펫이 선사하는<br/>
                                    호기심을 자극하는 잊지 못할 모험
                                </p>
                            </div>
                        </Link>
                        <Link className="poster_btn" to="/">예매하기<img src={`${process.env.PUBLIC_URL}/img/big_arrow.svg`} alt="큰화살표" /></Link>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}
