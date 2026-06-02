import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; 
import styles from "./BottomSheetCalendar.module.css";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const MONTHS = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
const DAYS_KO = ["일","월","화","수","목","금","토"];

function getFirstDay(year, month) {
  return new Date(year, month, 1).getDay();
}
function getLastDate(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function isPast(year, month, date, today) {
  return new Date(year, month, date) < new Date(today.year, today.month, today.date);
}
function dateKey(y, m, d) {
  return `${y}-${m + 1}-${d}`;
}

export default function BottomSheetCalendar({
  seatInfo = {},
  onConfirm,
}) {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
  };

  const [isOpen, setIsOpen] = useState(false);
  const [curYear, setCurYear] = useState(today.year);
  const [curMonth, setCurMonth] = useState(today.month);
  const [selected, setSelected] = useState(null);

  const sheetRef = useRef(null);
  const dragRef = useRef({ startY: 0, startTime: 0, dragging: false });

  function onPointerDown(e) {
    dragRef.current = { startY: e.clientY, startTime: Date.now(), dragging: true };
    sheetRef.current.style.transition = "none";
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e) {
    if (!dragRef.current.dragging) return;
    const dy = Math.max(0, e.clientY - dragRef.current.startY);
    sheetRef.current.style.transform = `translateY(${dy}px)`;
  }
  function onPointerUp(e) {
    if (!dragRef.current.dragging) return;
    dragRef.current.dragging = false;
    sheetRef.current.style.transition = "";
    const dy = Math.max(0, e.clientY - dragRef.current.startY);
    const vel = dy / (Date.now() - dragRef.current.startTime);
    if (dy > 100 || vel > 0.5) {
      setIsOpen(false);
    } else {
      sheetRef.current.style.transform = "";
    }
  }

  function changeMonth(delta) {
    let y = curYear, m = curMonth + delta;
    if (m < 0) { y--; m = 11; }
    if (m > 11) { y++; m = 0; }
    if (y < today.year || (y === today.year && m < today.month)) return;
    setCurYear(y);
    setCurMonth(m);
  }

  function buildDays() {
    const firstDay = getFirstDay(curYear, curMonth);
    const lastDate = getLastDate(curYear, curMonth);
    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push({ type: "empty", key: `e-${i}` });
    }
    for (let d = 1; d <= lastDate; d++) {
      const past = isPast(curYear, curMonth, d, today);
      const avail = !!seatInfo[dateKey(curYear, curMonth, d)];
      const active = !past && avail;
      const isSel =
        selected &&
        selected.year === curYear &&
        selected.month === curMonth &&
        selected.date === d;
      const dow = new Date(curYear, curMonth, d).getDay();
      cells.push({ type: "date", date: d, dow, active, isSel, key: `d-${d}` });
    }
    return cells;
  }

  function renderFooter() {
    if (!selected) {
      return <p className={styles.footerEmpty}>날짜를 먼저 선택해주세요</p>;
    }
    const seats = seatInfo[dateKey(selected.year, selected.month, selected.date)] || 0;
    const dt = new Date(selected.year, selected.month, selected.date);
    const few = seats <= 5;
    return (
      <button 
        className={styles.footerActionBtn} 
        onClick={() => {
          onConfirm?.(selected);
          setIsOpen(false);
        }}
      >
        <span className={styles.footerDate}>
          {selected.year}년 {MONTHS[selected.month]} {selected.date}일 ({DAYS_KO[dt.getDay()]}) 19시
        </span>
        <span className={styles.footerSeats}>
          전석 <span style={{ fontWeight: 600, color: few ? "#e05a5a" : "#1D9E75" }}>{seats}석</span> 남음
        </span>
      </button>
    );
  }

  const isAtBase = curYear === today.year && curMonth === today.month;

  return (
    <div className={styles.root}>
      <button className={styles.bookBtn} onClick={() => setIsOpen(true)}>예매하기</button>

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      <div ref={sheetRef} className={styles.sheet} style={{ transform: isOpen ? "translateY(0)" : "translateY(100%)" }}>
        <div className={styles.handleWrap} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp}>
          <div className={styles.handle} />
        </div>

        <div className={styles.sheetTop}>
          <button className={styles.xBtn} onClick={() => setIsOpen(false)}>
            <X size={20} strokeWidth={1} />
          </button>

          <div className={styles.monthNav}>
            {/* 왼쪽 화살표: 대화 나눴던 고급스러운 은은한 그레이 조건부 스타일 적용 */}
            <button
              className={styles.navBtn}
              style={{ 
                borderColor: isAtBase ? "#e4e4e4" : "#e2e8f0", 
                color: isAtBase ? "#cbd5e1" : "#787878",       
                cursor: isAtBase ? "not-allowed" : "pointer" 
              }}
              onClick={() => changeMonth(-1)}
              disabled={isAtBase}
            >
              <ChevronLeft size={18} strokeWidth={1} />
            </button>
            
            <span className={styles.monthTitle}>
              {curYear}년 {MONTHS[curMonth]}
            </span>
            
            <button className={styles.navBtn} onClick={() => changeMonth(1)}>
              <ChevronRight size={18} strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.weekRow}>
          {WEEKDAYS.map((w, i) => (
            <div key={w} className={styles.wday} style={{ color: i === 0 ? "#e05a5a" : "#aaa" }}>{w}</div>
          ))}
        </div>

        <div className={styles.calGrid}>
          {buildDays().map((cell) => {
            if (cell.type === "empty") return <div key={cell.key} />;
            const { date, dow, active, isSel } = cell;
            const textColor = isSel ? "#fff" : !active ? "#d0d0d0" : dow === 0 ? "#e05a5a" : "#111";
            return (
              <div key={cell.key} className={styles.dcell}>
                <button disabled={!active && !isSel}
                  onClick={() => {
                  if (active) {
                  setSelected({ year: curYear, month: curMonth, date });
                  }
                  }}
                className={styles.dnum}
                style={{
                  background: isSel ? "#111" : "transparent",
                  color: textColor,
                  fontWeight: active || isSel ? 500 : 400,
                  cursor: active ? "pointer" : "not-allowed",
                }}
                  >
                  {date}
                </button>
              </div>
            );
          })}
        </div>

        <div className={styles.legendRow}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.blackDot}`} />
            <span>예매가능 날짜</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.grayDot}`} />
            <span>선택</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.footer}>{renderFooter()}</div>
      </div>
    </div>
  );
}