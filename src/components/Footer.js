
export default function Footer() {
      return (
            <footer className="detail_footer">
                <strong>대학로티켓</strong>
                <p className="footer_intro">대한민국 대표 공연 예매 플랫폼</p>
                <div className="footer_info">
                    <p>서울특별시 종로구 대학로 12길</p>
                    <p>고객센터 1588-0000</p>
                    <p>운영시간 평일 09:00 ~ 18:00</p>
                </div>
                <div className="footer_channels">
                    <a href="https://www.facebook.com/daehakroticket" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                    <a href="https://x.com/daehakroticket" target="_blank" rel="noreferrer" aria-label="X">X</a>
                    <a
                        className="customer_center"
                        href="/"
                        onClick={(event) => event.preventDefault()}
                        aria-label="고객센터"
                        >
                        <i className="xi-call"></i>
                        </a>

                </div>
                <div className="footer_terms">
                    <span>이용약관</span>
                    <span>개인정보처리방침</span>
                    <span>청소년보호정책</span>
                </div>
                <small>© 2026 Daehakro Ticket</small>
            </footer>
      )
}
