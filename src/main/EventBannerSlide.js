import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function EventBannerSlide() {
    return(
        <div id="event_banner">
            <Swiper>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <SwiperSlide key={item}>
                        <Link to="/detail" className="event_link">
                            {index === 0 && (
                                <img src={`${process.env.PUBLIC_URL}/img/event_banner.png`} alt="이벤트 배너 이미지" />
                            )}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
