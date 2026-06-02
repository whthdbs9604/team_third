import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function EventBanner() {
    return(
        <div id="event_banner">
                <Swiper >
                    <SwiperSlide>
                        <Link className="event_link">
                            <img src={`${process.env.PUBLIC_URL}/img/event_banner.png`} alt="이벤트 배너 이미지"/>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="event_link">
                            
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="event_link">
                            
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="event_link">
                            
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="event_link">
                            
                        </Link>
                    </SwiperSlide>
                    
                </Swiper>
        </div>
    )
}