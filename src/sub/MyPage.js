import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../css/menu_list.css';
import '../css/mypage.css';

export default function MyPage({title}) {

    const { setHeaderTitle } = useOutletContext();
    useEffect(() => {
    setHeaderTitle(title);
    }, [title, setHeaderTitle]);

    return(
        <div id='mypage_wrap'>

            <div className='before_login_top'>
                <p>로그인하고 대학로 즐기기</p>
                <span>로그인하면 나의 예매 내역, 찜 목록을 확인할 수 있어요.</span>
                <div>
                    <Link to="/login">로그인</Link>
                    <Link to="/">회원가입</Link>
                </div>
            </div>

            <div className='event_banner'>
                <Link to="/"></Link>
            </div>

            <div className='menu_list'>
                <p>고객센터</p>
                <ul>
                    <li><Link to="/">자주 묻는 질문</Link></li>
                    <li><Link to="/">공지사항</Link></li>
                </ul>
            </div>

        </div>
        
    )

}