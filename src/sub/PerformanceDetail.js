import { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import '../css/detail.css';
import okcatPoster from '../assets/detail/okcat_poster.jpg';
import okcatStillcut from '../assets/detail/okcat_stillcut.jpeg';
import okcatDetail from '../assets/detail/okcat_detail.jpg';
import locationMap from '../assets/detail/location_map.PNG';

const scheduleList = [
    { day: '월', time: '-' },
    { day: '화', time: '-' },
    { day: '수', time: '19:30' },
    { day: '목', time: '19:30' },
    { day: '금', time: '19:30' },
    { day: '토', time: '17:00' },
    { day: '일', time: '-' },
];

const timelineList = [
    { year: '2020', title: '대학로 대표 로맨틱 코미디', text: '청춘 로맨스와 생활 밀착형 웃음으로 꾸준히 사랑받은 공연' },
    { year: '2022', title: '장기 흥행 공연', text: '대학로 스테디셀러 공연으로 자리잡으며 관객층을 넓힌 시즌' },
    { year: '2025', title: '15주년 마지막 시즌', text: '15년의 무대를 기념하는 마지막 시즌으로 다시 만나는 옥탑방고양이' },
];

const castList = [
    { role: '이경민', actor: '캐스팅 공개 예정', desc: '꿈을 좇아 서울로 올라온 솔직하고 서툰 청춘', image: `${process.env.PUBLIC_URL}/img/poster_1.png` },
    { role: '남정은', actor: '캐스팅 공개 예정', desc: '현실적이지만 사랑 앞에서는 누구보다 따뜻한 인물', image: `${process.env.PUBLIC_URL}/img/poster_2.png` },
    { role: '뭉치', actor: '캐스팅 공개 예정', desc: '옥탑방의 분위기를 바꾸는 사랑스러운 존재', image: `${process.env.PUBLIC_URL}/img/poster_3.png` },
    { role: '겨양이', actor: '캐스팅 공개 예정', desc: '극의 유쾌함과 귀여운 포인트를 책임지는 캐릭터', image: `${process.env.PUBLIC_URL}/img/poster_4.png` },
];

const tipList = [
    '데이트 코스로 추천',
    '공연 전후 포토존 활용',
    '가볍게 보기 좋은 로맨틱 코미디',
];

const discountList = [
    { title: '조기예매 할인', text: '오픈 기간 내 예매 시 할인 혜택 제공' },
    { title: '평일 할인', text: '수, 목, 금 회차 예매 시 부담 없이 관람 가능' },
    { title: '재관람 할인', text: '관람 내역 확인 후 재관람 관객 대상 할인 적용' },
];

const reviewList = [
    { score: '★★★★★', text: '대학로 데이트 공연으로 최고였어요.' },
    { score: '★★★★★', text: '웃음과 감동이 적절하게 섞여있습니다.' },
    { score: '★★★★★', text: '연인과 함께 보기 좋은 공연입니다.' },
];

const relatedList = [
    { title: '운빨 로맨스', genre: '로맨스 코미디', image: `${process.env.PUBLIC_URL}/img/poster_1.png` },
    { title: '죽여주는 이야기', genre: '코미디 연극', image: `${process.env.PUBLIC_URL}/img/poster_2.png` },
    { title: '시간을 파는 상점', genre: '감성 연극', image: `${process.env.PUBLIC_URL}/img/poster_3.png` },
    { title: '러브레터', genre: '로맨스', image: `${process.env.PUBLIC_URL}/img/poster_4.png` },
];

function HeroSection() {
    return (
        <section className="detail_hero">
            <img src={okcatPoster} alt="옥탑방고양이 공연 포스터" />
            <div className="hero_text">
                <span>로맨틱 코미디</span>
                <h2>옥탑방고양이</h2>
                <p>대학로 대표 스테디셀러 공연, 청춘의 사랑을 가장 유쾌하게 그린 무대</p>
            </div>
        </section>
    );
}

function BookingInfo() {
    return (
        <section className="detail_section booking_info">
            <h3>예매 정보</h3>
            <div className="round_box">
                <strong>공연 회차</strong>
                <ul>
                    {scheduleList.map((item) => (
                        <li key={item.day}>
                            <span>{item.day}</span>
                            <em>{item.time}</em>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="price_box">
                <div>
                    <span>균일석</span>
                    <strong>30,000원</strong>
                </div>
                <Link to="/booking">예매하기</Link>
            </div>
        </section>
    );
}

function BookingNotice() {
    return (
        <section className="detail_section booking_notice">
            <h3>예매공지</h3>
            <ul>
                <li>온라인 예매/취소는 공연 전일 17시까지 가능합니다.</li>
                <li>타 취소 수수료는 취소시점에 따라 다르게 적용됩니다.</li>
                <li>판매되는 좌석은 최저정상으로 확보된 공연장의 매표소에서 확인할 수 있습니다.</li>
            </ul>
        </section>
    );
}

function PerformanceInfo() {
    return (
        <section className="detail_section performance_info">
            <h3>공연정보</h3>
            <img src={okcatDetail} alt="옥탑방고양이 공연 상세 정보" />
        </section>
    );
}

function SynopsisSection() {
    return (
        <section className="detail_section synopsis_section">
            <h3>시놉시스</h3>
            <img src={okcatStillcut} alt="옥탑방고양이 공연 스틸컷" />
            <p>
                각자의 꿈을 안고 서울로 올라온 이경민과 남정은.
                계약 착오로 하나의 옥탑방을 함께 쓰게 된 두 사람은 사사건건 부딪히지만,
                좁은 공간 안에서 서로의 외로움과 진심을 조금씩 마주하게 된다.
                웃음 가득한 동거 소동 끝에 완성되는 청춘 로맨스가 무대 위에서 펼쳐진다.
            </p>
        </section>
    );
}

function StoryTimeline() {
    return (
        <section className="detail_section story_timeline">
            <h3>히스토리</h3>
            <div className="history_list">
                {timelineList.map((item) => (
                    <article className="history_card" key={item.year}>
                        <strong>{item.year}</strong>
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function MainBanner() {
    return (
        <section className="main_banner">
            <p>15th Anniversary</p>
            <strong>LAST SEASON</strong>
            <span>옥탑방고양이</span>
        </section>
    );
}

function CastSection() {
    return (
        <section className="detail_section cast_section">
            <h3>출연진</h3>
            <ul>
                {castList.map((cast) => (
                    <li key={cast.role}>
                        <img src={cast.image} alt={cast.role} />
                        <div>
                            <span>{cast.role}</span>
                            <strong>{cast.actor}</strong>
                            <p>{cast.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function TipSection() {
    return (
        <section className="detail_section tip_section">
            <h3>관련팁</h3>
            <ul>
                {tipList.map((tip) => (
                    <li key={tip}>{tip}</li>
                ))}
            </ul>
        </section>
    );
}

function DiscountSection() {
    return (
        <section className="detail_section discount_section">
            <h3>할인안내</h3>
            <div className="discount_cards">
                {discountList.map((discount) => (
                    <article key={discount.title}>
                        <strong>{discount.title}</strong>
                        <p>{discount.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

function LocationSection() {
    return (
        <section className="detail_section location_section">
            <h3>공연장 위치</h3>
            <img src={locationMap} alt="대학로 틴틴홀 위치 지도" />
            <p>대학로 틴틴홀</p>
        </section>
    );
}

function ReviewSection() {
    return (
        <section className="detail_section review_section">
            <h3>관람후기</h3>
            {reviewList.map((review) => (
                <article className="review_item" key={review.text}>
                    <strong>{review.score}</strong>
                    <p>{review.text}</p>
                </article>
            ))}
        </section>
    );
}

function RelatedSection() {
    return (
        <section className="detail_section related_section">
            <h3>연인과 보기 좋은 다른 공연</h3>
            <ul>
                {relatedList.map((show) => (
                    <li key={show.title}>
                        <img src={show.image} alt={show.title} />
                        <strong>{show.title}</strong>
                        <span>{show.genre}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function PerformanceDetail({ title }) {
    const { setHeaderTitle } = useOutletContext();

    useEffect(() => {
        setHeaderTitle(title || '옥탑방고양이');
    }, [title, setHeaderTitle]);

    return (
        <div id="detail_wrap">
            <HeroSection />
            <BookingInfo />
            <BookingNotice />
            <PerformanceInfo />
            <SynopsisSection />
            <StoryTimeline />
            <MainBanner />
            <CastSection />
            <TipSection />
            <DiscountSection />
            <LocationSection />
            <ReviewSection />
            <RelatedSection />
        </div>
    );
}
