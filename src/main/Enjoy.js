import { Link, Outlet } from "react-router-dom";

export default function Enjoy() {
    return(
        <div id="enjoy">
            <h3>누구와 함께 보러가세요?</h3>
            <p>관람 동반자에 어울리는 공연을 추천드려요.</p>
            <ul className="enjoy_btn">
                <li><Link href="/"><img src={`${process.env.PUBLIC_URL}/img/date_icon.png`} alt="데이트 아이콘"/><p>데이트</p></Link></li>
                <li><Link href="/"><img src={`${process.env.PUBLIC_URL}/img/friend_icon.png`} alt="친구와 아이콘"/><p>친구와</p></Link></li>
                <li><Link href="/"><img src={`${process.env.PUBLIC_URL}/img/family_icon.png`} alt="가족과 아이콘"/><p>가족과</p></Link></li>
                <li><Link href="/"><img src={`${process.env.PUBLIC_URL}/img/alone_icon.png`} alt="혼자서 아이콘"/><p>혼자서</p></Link></li>
                <li><Link href="/"><img src={`${process.env.PUBLIC_URL}/img/kid_icon.png`} alt="어린이 아이콘"/><p>어린이</p></Link></li>
            </ul>
        </div>
    )
}