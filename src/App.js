import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/reset.css'
import './App.css';
import './css/main.css';
import MainPage from './components/MainPage';
import SubPage from './components/SubPage';
import Home from './main/Home'
import Menu from './sub/Menu'
import Login from './sub/Login'
import MyPage from './sub/MyPage'
import BottomSheetCalendar from "./sub/BottomSheetCalendar";
import { SEAT_INFO } from "./sub/seatData";
import Booking from './sub/Booking'
import BookingComplete from "./sub/BookingComplete";
import PerformanceDetail from './sub/PerformanceDetail';
import ScrollToTop from "./ScrollToTop";

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop /> 
        <Routes>

        <Route element={<MainPage />}>
            <Route path="/" element={<Home />} />
        </Route>

        <Route element={<SubPage />}>
            <Route path="/menu" element={<Menu title="메뉴" />} /> 
            <Route path="/login" element={<Login title="로그인" />} /> 
            <Route path="/mypage" element={<MyPage title="마이페이지" />} />


            <Route path="/detail" element={<PerformanceDetail title="공연 상세" />}>
                <Route path="calendar" element={
                    <BottomSheetCalendar
                        seatInfo={SEAT_INFO}
                        onConfirm={(date) => {
                            console.log("선택된 날짜:", date);
                        }}
                    />
                } />
            </Route>

            <Route path="/booking" element={<Booking title="예매 정보 입력" />} />
            <Route path="/booking/complete" element={<BookingComplete />} />
        </Route>
        
      </Routes>
      </BrowserRouter>
  );
}

export default App;
