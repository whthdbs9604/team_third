import { Link } from "react-router-dom";

import 'swiper/css';

export default function EventBanner() {
    return(
        <div id="event_banner">
            <Link href="/"><img src={`${process.env.PUBLIC_URL}/img/event_banner.png`} alt="이벤트 배너 이미지"/></Link>
        </div>
    )
}