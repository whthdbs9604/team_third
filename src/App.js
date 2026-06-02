import BottomSheetCalendar from "./BottomSheetCalendar";
import { SEAT_INFO } from "./seatData";


function App() {

  return (
    <div className="App">


       <BottomSheetCalendar
       seatInfo={SEAT_INFO}
        onConfirm={(date) => {
          console.log("선택된 날짜:", date);
          alert(`${date.year}년 ${date.month + 1}월 ${date.date}일 예매 진행!`);
        }}
      />
    </div>
  );
}

export default App;
