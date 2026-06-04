import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ShortVideo() {
    return(
        <div id="short_video">
            <h3>공연 미리보기</h3>
            <p>짧은 영상으로 분위기를 확인해보세요.<Link to="#"><span>더보기<img src={`${process.env.PUBLIC_URL}/img/arrow_icon.svg`} alt="화살표 아이콘"/></span></Link></p>
            <div className="swiper_box">
                <Swiper slidesPerView={1.3} spaceBetween={0} centeredSlides={true} loop={true}>
                    <SwiperSlide>
                        <Link className="video_link">
                            <img src={`${process.env.PUBLIC_URL}/img/video_1.png`} alt="비디오 이미지"/>
                            <div className="video_title">
                                <p>뷰티풀 라이프 하이라이트</p>
                                <span>조회 12.4K</span>
                                <span>좋아요 856</span>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="video_link">
                            <img src={`${process.env.PUBLIC_URL}/img/video_2.png`} alt="비디오 이미지"/>
                            <div className="video_title">
                                <p>뷰티풀 라이프 하이라이트</p>
                                <span>조회 12.4K</span>
                                <span>좋아요 856</span>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="video_link">
                            <img src={`${process.env.PUBLIC_URL}/img/video_2.png`} alt="비디오 이미지"/>
                            <div className="video_title">
                                <p>뷰티풀 라이프 하이라이트</p>
                                <span>조회 12.4K</span>
                                <span>좋아요 856</span>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="video_link">
                            <img src={`${process.env.PUBLIC_URL}/img/video_2.png`} alt="비디오 이미지"/>
                            <div className="video_title">
                                <p>뷰티풀 라이프 하이라이트</p>
                                <span>조회 12.4K</span>
                                <span>좋아요 856</span>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="video_link">
                            <img src={`${process.env.PUBLIC_URL}/img/video_2.png`} alt="비디오 이미지"/>
                            <div className="video_title">
                                <p>뷰티풀 라이프 하이라이트</p>
                                <span>조회 12.4K</span>
                                <span>좋아요 856</span>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                </Swiper>
            </div>
        </div>
    )
}