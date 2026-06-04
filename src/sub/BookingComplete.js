import styles from "../css/BookingComplete.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import throwThumbnail from "../image/throw-thumnail.jpg";

export default function BookingComplete({
  category = "연극",
  title = "쓰로우",
  date = "2026.05.21(목)",
  time = "19:30",
  venue = "아르코꿈발극장",
  seat = "균일석 1석",
  bookingNumber = "2151351-135451",
}) {
  const navigate = useNavigate();
  const { setHeaderTitle } = useOutletContext();

  useEffect(() => {
    setHeaderTitle("티켓 예매");
  }, [setHeaderTitle]);


  return (
    <div className={styles.page}>

      <div className={styles.topSection}>
        <div className={styles.checkCircle}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M7 16.5L13 22.5L25 10"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className={styles.completeTitle}>예매가 완료되었어요</h1>
        <p className={styles.completeSubtitle}>예매 내역은 마이페이지에서 확인할 수 있어요</p>
      </div>

      <div className={styles.divider} />


      <div className={styles.card}>


        <div className={styles.showRow}>
        <div className={styles.thumbnail}>
            <img src={throwThumbnail} alt={title} className={styles.thumbnailImg} />
        </div>
          <div className={styles.showInfo}>
            <span className={styles.category}>{category}</span>
            <span className={styles.showTitle}>{title}</span>
          </div>
        </div>
        <div className={styles.cardDividerDashed} /> 


        <div className={styles.infoList}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>일시</span>
            <span className={styles.infoValue}>{date} {time}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>장소</span>
            <span className={styles.infoValue}>{venue}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>좌석</span>
            <span className={`${styles.infoValue} ${styles.seatValue}`}>{seat}</span>
          </div>
        </div>

        <div className={styles.cardDivider} />


        <div className={styles.lastinfoRow}>
          <span className={styles.infoLabel}>예매번호</span>
          <span className={`${styles.infoValue} ${styles.bookingNum}`}>{bookingNumber}</span>
        </div>

      </div>


      <div className={styles.btnRow}>
        <button className={styles.btnOutline} onClick={() => navigate("/")}>
          홈으로
        </button>
        <button className={styles.btnFill} onClick={() => navigate("/mypage")}>
          예매 내역 보기
        </button>
      </div>

    </div>
  );
}
