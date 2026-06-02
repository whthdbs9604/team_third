import { Link } from "react-router-dom";

export default function Rank() {
    return(
        <div id="rank">
        <h3>실시간 랭킹</h3>
        <p>이번 주 가장 많이 예매한 공연 <Link href="/"><span>더보기<img src={`${process.env.PUBLIC_URL}/img/arrow_icon.svg`} alt="화살표 아이콘"/></span></Link></p>
        

        <ul>
            <li>
                <Link href="#">
                    <span>1</span>
                    <img src={`${process.env.PUBLIC_URL}/img/poster_1.png`} alt="포스터 이미지"/>
                    <div className="rank_title">
                        <h4>운빨 로맨스</h4>
                        <p><span>#코미디</span><span><img src={`${process.env.PUBLIC_URL}/img/location_img.svg`} alt="위치아이콘"/>지인시어터</span></p>
                        <p><span><img src={`${process.env.PUBLIC_URL}/img/star_img.svg`} alt="별아이콘"/>3.5</span><span>후기 152</span></p>
                        <p><b>16,400원</b></p>
                    </div>
                </Link>
            </li>

            <li>
                <Link href="#">
                    <span>2</span>
                    <img src={`${process.env.PUBLIC_URL}/img/poster_2.png`} alt="포스터 이미지"/>
                    <div className="rank_title">
                        <h4>죽여주는 이야기</h4>
                        <p><span>#코미디</span><span><img src={`${process.env.PUBLIC_URL}/img/location_img.svg`} alt="위치아이콘"/>지인시어터</span></p>
                        <p><span><img src={`${process.env.PUBLIC_URL}/img/star_img.svg`} alt="별아이콘"/>3.5</span><span>후기 152</span></p>
                        <p><b>16,400원</b></p>
                    </div>
                </Link>
            </li>

            <li>
                <Link href="#">
                    <span>3</span>
                    <img src={`${process.env.PUBLIC_URL}/img/poster_3.png`} alt="포스터 이미지"/>
                    <div className="rank_title">
                        <h4>죽여주는 이야기</h4>
                        <p><span>#코미디</span><span><img src={`${process.env.PUBLIC_URL}/img/location_img.svg`} alt="위치아이콘"/>지인시어터</span></p>
                        <p><span><img src={`${process.env.PUBLIC_URL}/img/star_img.svg`} alt="별아이콘"/>3.5</span><span>후기 152</span></p>
                        <p><b>16,400원</b></p>
                    </div>
                </Link>
            </li>
        </ul>
    </div>
    )
}