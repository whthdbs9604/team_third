import BottomSheetCalendar from "./BottomSheetCalendar";
import { SEAT_INFO } from "./seatData";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import BookingComplete from "./BookingComplete";

function App() {

  return (
    <div className="App">
<BrowserRouter>
       <Routes>
        <Route path="/" element={
          <BottomSheetCalendar
            seatInfo={SEAT_INFO}
            onConfirm={(date) => {
              console.log("선택된 날짜:", date);
            }}
          />
        } />
        <Route path="/booking/complete" element={<BookingComplete />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
