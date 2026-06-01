import { Link } from "react-router-dom";
import $ from 'jquery';


export default function Header() {
      return (
            <div id="navigation">
                <ul>
                    <li><Link href="#"><img src={`${process.env.PUBLIC_URL}/img/menu_icon.png`} alt="메뉴"/><p>메뉴</p></Link></li>
                    <li><Link href="#"><img src={`${process.env.PUBLIC_URL}/img/location_icon.png`} alt="위치"/><p>위치</p></Link></li>
                    <li><Link href="#"><img src={`${process.env.PUBLIC_URL}/img/home_icon.png`} alt="홈"/><p>홈</p></Link></li>
                    <li><Link href="#"><img src={`${process.env.PUBLIC_URL}/img/search_icon.png`} alt="검색"/><p>검색</p></Link></li>
                    <li><Link href="#"><img src={`${process.env.PUBLIC_URL}/img/mypage_icon.png`} alt="마이페이지"/><p>마이페이지</p></Link></li>
                </ul>
            </div>
                
        )
}