import '../css/headerSub.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function HeaderSub({ title }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // 스크롤 내리면 숨기고, 올리면 다시 보이게
      if (currentY > lastScrollY.current && currentY > 56) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 홈에서 직접 진입하는 페이지들 (뒤로가기 → 항상 홈으로)
  const HOME_DIRECT_PAGES = ['/menu', '/search', '/mypage', '/login', '/detail'];

  const handleBack = () => {
    if (location.pathname === '/detail/calendar') {
      navigate('/detail');
    } else if (HOME_DIRECT_PAGES.some(path => location.pathname === path)) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={`header_sub${hidden ? ' header_sub--hidden' : ''}`}>
        <button onClick={handleBack}><img src={`${process.env.PUBLIC_URL}/img/back.svg`} alt="뒤로가기 이미지" /></button>
        <h1>{title}</h1> 
    </header>
  );
}
export default HeaderSub;
