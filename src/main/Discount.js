import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

export default function Discout() {
    return(
        <div id="discount">
            <h3>할인 중인 공연</h3>
            <p>최대 50% 할인 진행 중<Link to="/"><span>더보기<img src={`${process.env.PUBLIC_URL}/img/arrow_icon.svg`} alt="화살표 아이콘"/></span></Link></p>

            <div className="swiper_box">
                <Swiper slidesPerView={2.8} modules={[FreeMode]} spaceBetween={12} freeMode={true}>
                    <SwiperSlide>
                        <Link to="/detail" className="discount_link">
                            <img src={`${process.env.PUBLIC_URL}/img/poster_1.png`} alt="포스터 이미지"/>
                            <p className="poster_title">운빨 로맨스</p>
                            <div>
                                <span>18%</span>
                                <div>
                                    <span><del>20,000원</del></span>
                                    <span>16,400원</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/detail" className="discount_link">
                            <img src={`${process.env.PUBLIC_URL}/img/poster_2.png`} alt="포스터 이미지"/>
                            <p className="poster_title">옥탑방 고양이</p>
                            <div>
                                <span>18%</span>
                                <div>
                                    <span><del>20,000원</del></span>
                                    <span>16,400원</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/detail" className="discount_link">
                            <img src={`${process.env.PUBLIC_URL}/img/poster_3.png`} alt="포스터 이미지"/>
                            <p className="poster_title">쓰로우</p>
                            <div>
                                <span>18%</span>
                                <div>
                                    <span><del>20,000원</del></span>
                                    <span>16,400원</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/detail" className="discount_link">
                            <img src={`${process.env.PUBLIC_URL}/img/poster_4.png`} alt="포스터 이미지"/>
                            <p className="poster_title">숲속 100층짜리 집</p>
                            <div>
                                <span>18%</span>
                                <div>
                                    <span><del>20,000원</del></span>
                                    <span>16,400원</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/detail" className="discount_link">
                            <img src={`${process.env.PUBLIC_URL}/img/poster_5.png`} alt="포스터 이미지"/>
                            <p className="poster_title">꽃의 비밀</p>
                            <div>
                                <span>18%</span>
                                <div>
                                    <span><del>20,000원</del></span>
                                    <span>16,400원</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/detail" className="discount_link">
                            <img src={`${process.env.PUBLIC_URL}/img/poster_1.png`} alt="포스터 이미지"/>
                            <p className="poster_title">운빨 로맨스</p>
                            <div>
                                <span>18%</span>
                                <div>
                                    <span><del>20,000원</del></span>
                                    <span>16,400원</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                </Swiper>
            </div>
        </div>
    )
}
