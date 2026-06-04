import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../css/menu_list.css';

export default function Menu({title}) {

    const { setHeaderTitle } = useOutletContext();
    useEffect(() => {
    setHeaderTitle(title);
    }, [title, setHeaderTitle]);

    return(
        <div id='menu_wrap'>

            <div className='before_login_top'>
                <p>로그인하고 대학로 즐기기</p>
                <span>로그인하면 나의 예매 내역, 찜 목록을 확인할 수 있어요.</span>
                <div>
                    <Link to="/login">로그인</Link>
                    <Link to="/">회원가입</Link>
                </div>
            </div>

            <div className='icon_btn'>
                <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/notice_icon.svg`} alt="공지사항 아이콘" /><p>공지사항</p></Link>
                <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/event_icon.svg`} alt="이벤트 아이콘" /><p>이벤트</p></Link>
                <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/call_icon.svg`} alt="고객센터 아이콘" /><p>고객센터</p></Link>
            </div>

            <div className='menu_list'>
                <p>공연</p>
                <ul>
                    <li><Link to="/">공연 정보</Link></li>
                    <li><Link to="/">지난 공연</Link></li>
                    <li><Link to="/">공연장</Link></li>
                    <li><Link to="/">공연 단체</Link></li>
                    <li><Link to="/">페스티벌</Link></li>
                </ul>
            </div>

            <div className='menu_list'>
                <p>이벤트</p>
                <ul>
                    <li><Link to="/">진행 중인 이벤트</Link></li>
                    <li><Link to="/">지난 이벤트</Link></li>
                    <li><Link to="/">당첨자 발표</Link></li>
                </ul>
            </div>

            <div className='menu_list'>
                <p>커뮤니티</p>
                <ul>
                    <li><Link to="/">공지사항</Link></li>
                    <li><Link to="/">티켓 오픈 소식</Link></li>
                    <li><Link to="/">후기</Link></li>
                </ul>
            </div>

        </div>
        
    )

}