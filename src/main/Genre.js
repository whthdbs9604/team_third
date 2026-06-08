import {Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';

export default function Genre() {
    return(
        <div id="genre">
        <h3>장르별 공연</h3>
        <p>관심있는 장르를 선택해보세요.<Link to="#"><span>더보기<img src={`${process.env.PUBLIC_URL}/img/arrow_icon.svg`} alt="화살표 아이콘"/></span></Link></p>
        

        <div className="genre_btn">
            <Swiper slidesPerView={'auto'} modules={[FreeMode]} spaceBetween={12} freeMode={true}>
                <SwiperSlide><span className="active">로맨스</span></SwiperSlide>
                <SwiperSlide><span>스릴러</span></SwiperSlide>
                <SwiperSlide><span>공포</span></SwiperSlide>
                <SwiperSlide><span>코미디</span></SwiperSlide>
                <SwiperSlide><span>뮤지컬</span></SwiperSlide>
                <SwiperSlide><span>액션</span></SwiperSlide>
            </Swiper>
        </div>

        <ul>
            <li>
                <Link to="/detail">
                    <img src={`${process.env.PUBLIC_URL}/img/poster_1.png`} alt="포스터 이미지"/>
                    <div className="rank_title">
                        <h4 className="poster_title">죽여주는 이야기</h4>
                        <p><span>로맨스 · </span><span>120분</span></p>
                        <p><span><i className="xi-star"></i> 3.5</span><span> | 후기 152</span></p>
                    </div>
                </Link>
            </li>

            <li>
                <Link to="/detail">
                    <img src={`${process.env.PUBLIC_URL}/img/poster_2.png`} alt="포스터 이미지"/>
                    <div className="rank_title">
                        <h4 className="poster_title">죽여주는 이야기</h4>
                        <p><span>로맨스 · </span><span>120분</span></p>
                        <p><span><i className="xi-star"></i> 3.5</span><span> | 후기 152</span></p>
                    </div>
                </Link>
            </li>

            <li>
                <Link to="/detail">
                    <img src={`${process.env.PUBLIC_URL}/img/poster_3.png`} alt="포스터 이미지"/>
                    <div className="rank_title">
                        <h4 className="poster_title">죽여주는 이야기</h4>
                        <p><span>로맨스 · </span><span>120분</span></p>
                        <p><span><i className="xi-star"></i> 3.5</span><span> | 후기 152</span></p>
                    </div>
                </Link>
            </li>

            <li>
                <Link to="/detail">
                    <img src={`${process.env.PUBLIC_URL}/img/poster_1.png`} alt="포스터 이미지"/>
                    <div className="rank_title">
                        <h4 className="poster_title">죽여주는 이야기</h4>
                        <p><span>로맨스 · </span><span>120분</span></p>
                        <p><span><i className="xi-star"></i> 3.5</span><span> | 후기 152</span></p>
                    </div>
                </Link>
            </li>

            
        </ul>
    </div>
    )
}
