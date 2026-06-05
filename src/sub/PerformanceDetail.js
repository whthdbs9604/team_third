import { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/detail.css';
import okcatStillcut from '../assets/detail/okcat_stillcut.jpeg';
import okcatStillcut2 from '../assets/detail/okcat_stillcut_2.jpeg';
import okcatStillcut3 from '../assets/detail/okcat_stillcut_3.jpg';
import okcatStillcut4 from '../assets/detail/okcat_stillcut_4.jpg';
import okcatDetail from '../assets/detail/okcat_detail.jpg';
import locationMap from '../assets/detail/location_map.PNG';
import namYang from '../assets/detail/남정은역_양솔_옥탑방고양이.gif';
import namObl from '../assets/detail/남정은역_윤봄_옥탑방고양이.gif';
import namJo from '../assets/detail/남정은역_조하연_옥탑방고양이.gif';
import leeKang from '../assets/detail/이경민역_강이성_옥탑방고양이.gif';
import leeKwak from '../assets/detail/이경민역_곽근영_옥탑방고양이.gif';
import leeJo from '../assets/detail/이경민역_조민규_옥탑방고양이.gif';
import review1 from '../assets/detail/옥탑방고양이_리뷰1.jpg';
import review2 from '../assets/detail/옥탑방고양이_리뷰2.jpeg';
import review3 from '../assets/detail/옥탑방고양이_리뷰3.jpg';
import review4 from '../assets/detail/옥탑방고양이_리뷰4.jpg';
import review5 from '../assets/detail/옥탑방고양이_리뷰_5.jpg';
import review6 from '../assets/detail/옥탑방고양이_리뷰_6.jpg';
import posterLucky from '../assets/detail/운빨로맨스_포스터.gif';
import posterSecret from '../assets/detail/은밀한연애_포스터.gif';
import posterSpan from '../assets/detail/한뼘사이_포스터.jfif';
import posterNight from '../assets/detail/그날밤너랑나_포스터.jpg';
import posterPerfect from '../assets/detail/나의완벽한로맨스_포스터.gif';
import posterSpring from '../assets/detail/봄날의로맨스_포스터.png';
import posterOffice from '../assets/detail/사내연애보고서_포스터.jpg';

const dates = [
    { day: '월', date: '9', time: '오후 7:30' },
    { day: '화', date: '10', time: '오후 7:30' },
    { day: '수', date: '11', time: '오후 7:30', active: true },
    { day: '목', date: '12', time: '오후 7:30' },
    { day: '금', date: '13', time: '오후 7:30' },
    { day: '토', date: '14', time: '오후 3:00' },
    { day: '일', date: '15', time: '오후 5:00', holiday: true },
];

const selectedDate = dates.find((item) => item.active);

const notices = [
    '온라인 예매 및 취소는 공연 전일 오후 5시까지 가능합니다.',
    '예매하신 좌석은 현장 상황에 따라 동일 등급 내에서 배정됩니다.',
    '공연 시작 후 입장이 제한될 수 있으니 공연 10분 전까지 도착해 주세요.',
];

const viewingTips = [
    {
        number: '01',
        title: '앞줄 VS 뒷줄',
        text: '앞줄은 배우 표정과 호흡을 가까이 볼 수 있고, 뒷줄은 무대 전체를 보기 좋습니다.',
    },
    {
        number: '02',
        title: '배우 토크 회차',
        text: '일부 회차는 공연 후 배우 토크가 진행됩니다.',
    },
    {
        number: '03',
        title: '데이트 추천',
        text: '대학로 데이트 코스로 관람하기 좋은 공연입니다.',
    },
];

const discounts = [
    { title: '서울온 할인', price: '18,000원' },
    { title: '평일 예매 할인', price: '20,000원' },
    { title: '얼리버드 할인', price: '15,000원' },
    { title: '예술인 패스 할인', price: '15,000원' },
];

const indicatorColors = ['#A30910', '#A44247', '#A17B7C', '#A59B9C'];

const stillcuts = [
    { image: okcatStillcut, alt: '옥탑방 고양이 공연 장면 1' },
    { image: okcatStillcut2, alt: '옥탑방 고양이 공연 장면 2' },
    { image: okcatStillcut3, alt: '옥탑방 고양이 공연 장면 3' },
    { image: okcatStillcut4, alt: '옥탑방 고양이 공연 장면 4' },
];

const castGroups = [
    {
        character: '남정은',
        actors: [
            { name: '양솔', image: namYang },
            { name: '윤봄', image: namObl },
            { name: '조하연', image: namJo },
        ],
    },
    {
        character: '이경민',
        actors: [
            { name: '강이성', image: leeKang },
            { name: '곽은영', image: leeKwak },
            { name: '조민규', image: leeJo },
        ],
    },
];

const reviews = [
    {
        id: 'soj***',
        date: '2026.06.12',
        text: '생각보다 진짜 많이 웃었어요ㅋㅋ 배우 호흡도 좋고 마지막까지 재밌게 봤습니다.',
        image: review1,
    },
    {
        id: 'min***',
        date: '2026.06.09',
        text: '데이트 공연 찾다가 예매했는데 만족! 끝나고 대학로 산책까지 하니까 좋았어요 😊',
        image: null,
    },
    {
        id: 'yun***',
        date: '2026.06.07',
        text: '소극장이라 배우 표정까지 잘 보여서 몰입감이 좋았습니다. 자리도 생각보다 괜찮았어요.',
        image: review2,
    },
    {
        id: 'lov***',
        date: '2026.06.05',
        text: '티켓 인증샷 남기기 좋은 공연이에요📸 친구랑 가볍게 보기 딱 좋았습니다.',
        image: review3,
    },
    {
        id: 'jin***',
        date: '2026.05.30',
        text: '부모님 모시고 봤는데 좋아하셨어요. 후반부 감동이 생각보다 좋았습니다.',
        image: review4,
    },
    {
        id: 'han***',
        date: '2026.05.24',
        text: '정은 역 배우님 목소리가 너무 매력적이었어요. 다음엔 다른 캐스팅으로 또 보고 싶네요.',
        image: null,
    },
    {
        id: 'rom***',
        date: '2026.05.18',
        text: '급하게 예매했는데 만족했습니다. 웃긴 장면 많고 러닝타임도 부담 없었어요.',
        image: review6,
    },
];

const relatedShows = [
    { title: '운빨로맨스', place: '컬쳐씨어터', price: '16,400원', image: posterLucky },
    { title: '은밀한연애', place: '대학로 공간아울', price: '18,000원', image: posterSecret },
    { title: '한뼘사이', place: '서연아트홀', price: '15,900원', image: posterSpan },
    { title: '그날밤, 너랑나', place: '아트포레스트 2관', price: '17,000원', image: posterNight },
    { title: '나의 완벽한 로맨스', place: '대학로 JTN아트홀', price: '19,000원', image: posterPerfect },
    { title: '봄날의 로맨스', place: '대학로 열린극장', price: '16,500원', image: posterSpring },
    { title: '사내연애보고서', place: '대학로 스타시티', price: '18,500원', image: posterOffice },
];

function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="detail_hero">
            <Swiper
                className="hero_swiper"
                modules={[Autoplay]}
                autoplay={{ delay: 3600, disableOnInteraction: false }}
                grabCursor
                loop
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {stillcuts.map((stillcut) => (
                    <SwiperSlide key={stillcut.alt}>
                        <img src={stillcut.image} alt={stillcut.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hero_indicator">
                <div className="hero_dots">
                    {stillcuts.map((stillcut, index) => (
                        <span
                            className={index === activeIndex ? 'active' : ''}
                            style={{ backgroundColor: indicatorColors[index] }}
                            key={stillcut.alt}
                        />
                    ))}
                </div>
                <strong>{activeIndex + 1} / {stillcuts.length}</strong>
            </div>
        </section>
    );
}

function SummarySection() {
    return (
        <section className="summary_section">
            <div className="summary_label">로맨틱 코미디</div>
            <h2>옥탑방 고양이</h2>
            <p>설렘 가득한 대학로 대표 현실 공감 로맨스</p>
            <div className="tag_list">
                <span>#설렘</span>
                <span>#로맨스</span>
                <span>#데이트</span>
                <span>#대학로</span>
            </div>
        </section>
    );
}

function ScheduleSection() {
    return (
        <section className="detail_section schedule_section">
            <div className="section_title_row">
                <h3>공연 회차</h3>
                <span>2026.06</span>
            </div>
            <div className="calendar_card">
                <ul className="date_grid">
                    {dates.map((item) => (
                        <li className={`${item.active ? 'active' : ''} ${item.holiday ? 'holiday' : ''}`} key={item.date}>
                            <span>{item.day}</span>
                            <strong>{item.date}</strong>
                            <em>{item.time}</em>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="selected_schedule_summary">
                <span>선택 회차</span>
                <strong>2026.06.{selectedDate.date} ({selectedDate.day}) {selectedDate.time}</strong>
                <em>잔여 18석 · 균일석 예매 가능</em>
            </div>
        </section>
    );
}

function TicketSection() {
    return (
        <section className="detail_section ticket_section">
            <div className="ticket_card">
                <div className="ticket_cut_line" />
                <div className="ticket_left">
                    <span>전석 동일가</span>
                    <strong>균일석</strong>
                    <em>잔여 18석 · 실시간 예매 가능</em>
                </div>
                <div className="ticket_right">
                    <strong>30,000원</strong>
                    <Link to="/booking">예매하기</Link>
                </div>
            </div>
        </section>
    );
}

function BookingNotice() {
    return (
        <section className="detail_section booking_notice">
            <h3>예매공지</h3>
            <ul>
                {notices.map((notice) => (
                    <li key={notice}>{notice}</li>
                ))}
            </ul>
        </section>
    );
}

function ViewingTipSection() {
    return (
        <section className="detail_section viewing_tip_section">
            <h3>관람 팁</h3>
            <div className="tip_cards">
                {viewingTips.map((tip) => (
                    <article key={tip.number}>
                        <span>{tip.number}</span>
                        <div>
                            <strong>{tip.title}</strong>
                            <p>{tip.text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function DiscountGuideSection() {
    return (
        <section className="detail_section discount_guide_section">
            <h3>할인 안내</h3>
            <div className="discount_grid">
                {discounts.map((discount) => (
                    <article key={discount.title}>
                        <span>{discount.title}</span>
                        <strong>{discount.price}</strong>
                    </article>
                ))}
            </div>
            <p>할인 증빙 자료 미지참 시 현장에서 차액을 지불해야 합니다.</p>
        </section>
    );
}

function PerformanceInfo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={`detail_section performance_info ${isOpen ? 'open' : ''}`}>
            <h3>공연정보</h3>
            <div className="performance_image_panel">
                <img src={okcatDetail} alt="옥탑방 고양이 공연 상세 정보" />
            </div>
            <button type="button" onClick={() => setIsOpen((value) => !value)}>
                {isOpen ? '접기 ▲' : '더보기 ▼'}
            </button>
        </section>
    );
}

function CastSection() {
    return (
        <section className="detail_section cast_section">
            <div className="section_title_row">
                <h3>출연진</h3>
                <span>Cast & Character</span>
            </div>
            <div className="cast_groups">
                {castGroups.map((group) => (
                    <article className="cast_group" key={group.character}>
                        <h4>{group.character}</h4>
                        <ul>
                            {group.actors.map((actor) => (
                                <li key={`${group.character}-${actor.name}`}>
                                    <img src={actor.image} alt={`${group.character} 역 ${actor.name}`} />
                                    <strong>{actor.name}</strong>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

function LocationSection() {
    return (
        <section className="detail_section location_section">
            <h3>공연장소</h3>
            <img src={locationMap} alt="공연장 위치 지도" />
            <div className="location_title_row">
                <strong>대학로 틴틴홀</strong>
                <a
                    className="map_link"
                    href="https://map.naver.com/v5/search/서울%20종로구%20대학로10길%2024"
                    target="_blank"
                    rel="noreferrer"
                >
                    길찾기
                </a>
            </div>
            <p>서울 종로구 대학로10길 24</p>
        </section>
    );
}

function ReviewSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const visibleReviews = isExpanded ? reviews : reviews.slice(0, 3);

    return (
        <section className="detail_section review_section">
            <div className="section_title_row">
                <h3>관람후기</h3>
                <span className="review_score">★★★★★ 4.9 · 리뷰 152개</span>
            </div>
            <div className="review_list">
                {visibleReviews.map((review) => (
                    <article className="review_item" key={`${review.id}-${review.date}`}>
                        <strong>★★★★★</strong>
                        <div className="review_meta">
                            <span>{review.id}</span>
                            <em>{review.date}</em>
                        </div>
                        <p>{review.text}</p>
                        {review.image && (
                            <div className="review_thumbs">
                                <img src={review.image} alt={`${review.id} 관람후기 이미지`} />
                            </div>
                        )}
                    </article>
                ))}
            </div>
            <button className="review_more_btn" type="button" onClick={() => setIsExpanded((value) => !value)}>
                {isExpanded ? '후기 접기 ▲' : '후기 더보기'}
            </button>
        </section>
    );
}

function RelatedSection() {
    return (
        <section className="detail_section related_section">
            <div className="section_title_row">
                <h3>연인과 보기 좋은 다른 공연</h3>
                <Link to="/">더보기</Link>
            </div>
            <Swiper
                className="related_swiper"
                grabCursor
                slidesPerView={2.45}
                spaceBetween={10}
            >
                {relatedShows.map((show) => (
                    <SwiperSlide key={show.title}>
                        <article className="related_card">
                            <img src={show.image} alt={show.title} />
                            <div>
                                <strong>{show.title}</strong>
                                <span>{show.place}</span>
                                <em>{show.price}</em>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

function DetailFooter() {
    return (
        <section className="detail_footer">
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
                <a href="/" onClick={(event) => event.preventDefault()} aria-label="고객센터">CS</a>
            </div>
            <div className="footer_terms">
                <span>이용약관</span>
                <span>개인정보처리방침</span>
                <span>청소년보호정책</span>
            </div>
            <small>© 2026 Daehakro Ticket</small>
        </section>
    );
}

function StickyBookingBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const ticketSection = document.querySelector('.ticket_section');
            const footer = document.querySelector('footer');
            const ticketBottom = ticketSection
                ? ticketSection.getBoundingClientRect().bottom + window.scrollY
                : 520;
            const footerTop = footer
                ? footer.getBoundingClientRect().top
                : window.innerHeight + 300;
            const passedTicket = window.scrollY > ticketBottom - 80;
            const beforeFooter = footerTop > window.innerHeight - 80;

            setIsVisible(passedTicket && beforeFooter);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className={`sticky_booking_bar ${isVisible ? 'show' : ''}`}>
            <div>
                <span>균일석</span>
                <strong>30,000원</strong>
            </div>
            <Link to="/booking">예매하기</Link>
        </div>
    );
}

export default function PerformanceDetail({ title }) {
    const { setHeaderTitle } = useOutletContext();

    useEffect(() => {
        setHeaderTitle(title || '공연 상세');
    }, [title, setHeaderTitle]);

    return (
        <div id="detail_wrap">
            <HeroSection />
            <SummarySection />
            <ScheduleSection />
            <TicketSection />
            <BookingNotice />
            <PerformanceInfo />
            <ViewingTipSection />
            <DiscountGuideSection />
            <CastSection />
            <LocationSection />
            <ReviewSection />
            <RelatedSection />
            <DetailFooter />
            <StickyBookingBar />
        </div>
    );
}
