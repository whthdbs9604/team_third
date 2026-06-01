import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

function MainPage() {
  return (
    <>
      <Header />
      <Outlet /> {/* 여기에 Home 등이 렌더링됩니다 */}
      <Navigation />
      <Footer />
    </>
  );
}
export default MainPage;