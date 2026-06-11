import { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import '../css/booking.css';

function CheckIcon({ color }) {
    return (
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L5.5 9.5L13 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function Stepper({ value, onChange }) {
    const [editing, setEditing] = useState(false);
    const [inputVal, setInputVal] = useState('');

    const handleClickCount = () => {
        setInputVal(value === 0 ? '' : String(value));
        setEditing(true);
    };

    const handleConfirm = () => {
        const parsed = parseInt(inputVal, 10);
        if (!isNaN(parsed) && parsed >= 0) {
            onChange(parsed);
        }
        setEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleConfirm();
        if (e.key === 'Escape') setEditing(false);
    };

    return (
        <div className="ticket_stepper">
            <button className="stepper_btn" onClick={() => onChange(Math.max(0, value - 1))}>−</button>
            {editing ? (
                <input
                    className="stepper_input"
                    type="number"
                    min="0"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onBlur={handleConfirm}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <span className="stepper_count" onClick={handleClickCount}>{value}매</span>
            )}
            <button className="stepper_btn" onClick={() => onChange(value + 1)}>+</button>
        </div>
    );
}

export default function Booking({ title }) {

    const { setHeaderTitle } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        setHeaderTitle(title);
        const nav = document.getElementById('navigation');
        if (nav) nav.style.display = 'none';
        return () => {
            if (nav) nav.style.display = '';
        };
    }, [title, setHeaderTitle]);

    const [counts, setCounts] = useState({
        regular: 0,
        weekday: 0,
        earlybird: 0,
        artpass: 0,
    });

    const [agrees, setAgrees] = useState({
        all: false,
        privacy: false,
        age: false,
        refund: false,
        marketing: false,
    });

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [payment, setPayment] = useState('');

    const handleCount = (type, value) => {
        setCounts(prev => ({ ...prev, [type]: value }));
    };

    const totalPrice =
        counts.regular * 30000 +
        counts.weekday * 20000 +
        counts.earlybird * 15000 +
        counts.artpass * 15000;

    const totalCount = counts.regular + counts.weekday + counts.earlybird + counts.artpass;

    const isActive =
        name.trim() !== '' &&
        tel.trim() !== '' &&
        totalCount > 0 &&
        agrees.privacy && agrees.age && agrees.refund;

    const handleAllAgree = () => {
        const next = !agrees.all;
        setAgrees({ all: next, privacy: next, age: next, refund: next, marketing: next });
    };

    const handleAgree = (key) => {
        const next = { ...agrees, [key]: !agrees[key] };
        next.all = next.privacy && next.age && next.refund && next.marketing;
        setAgrees(next);
    };

    const tickets = [
        { key: 'regular',   name: '정가',             price: 30000, desc: null },
        { key: 'weekday',   name: '평일 예매 할인',    price: 20000, desc: null },
        { key: 'earlybird', name: '얼리버드 예매 할인', price: 15000, desc: '5월 20일 20:00까지 예매 시 적용' },
        { key: 'artpass',   name: '예술인패스 할인',    price: 15000, desc: '동반 2인까지 적용, 증빙자료 지참' },
    ];

    const agreeItems = [
        { key: 'privacy',   label: '[필수] 개인정보 수집 및 이용' },
        { key: 'age',       label: '[필수] 만 14세 이상 동의' },
        { key: 'refund',    label: '[필수] 예매취소 및 환불규정 동의' },
        { key: 'marketing', label: '[선택] 마케팅 정보 수신 동의' },
    ];

    return (
        <div id="booking_wrap">

            {/* 예매 정보 */}
            <section className="booking_section">
                <h2 className="section_title">예매 정보</h2>
                <div className="info_row">
                    <span className="info_label">날짜</span>
                    <span className="info_value">2026년 6월 17일(목) 19시  30분</span>
                </div>
                <div className="info_row">
                    <span className="info_label">좌석</span>
                    <span className="info_value">미지정</span>
                </div>
            </section>

            {/* 티켓 가격 */}
            <section className="booking_section">
                <h2 className="section_title">티켓가격</h2>
                <div className="ticket_header_row">
                    <span className="ticket_category">전석</span>
                    <span className="total_select">{totalCount}매 선택</span>
                </div>
                <div className="ticket_box">
                    {tickets.map((ticket, index) => (
                        <div key={ticket.key}>
                            <div className="ticket_row">
                                <div className="ticket_info">
                                    <span className="ticket_name">{ticket.name}</span>
                                    {ticket.desc && <span className="ticket_desc">{ticket.desc}</span>}
                                </div>
                                <div className="ticket_right">
                                    <span className="ticket_price">{ticket.price.toLocaleString()}원</span>
                                    <Stepper
                                        value={counts[ticket.key]}
                                        onChange={(v) => handleCount(ticket.key, v)}
                                    />
                                </div>
                            </div>
                            {index < tickets.length - 1 && <div className="ticket_divider" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* 예약자 정보 */}
            <section className="booking_section">
                <div className="section_title_row">
                    <h2 className="section_title">예약자 정보</h2>
                    <span className="required_note"><span className="required_star">*</span>는 필수 입력 사항입니다.</span>
                </div>
                <div className="input_group">
                    <label className="input_label" htmlFor="booker_name">이름<span className="required_star">*</span></label>
                    <input
                        className="input_field"
                        type="text"
                        id="booker_name"
                        placeholder="이름을 입력해주세요"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input_group">
                    <label className="input_label" htmlFor="booker_tel">연락처<span className="required_star">*</span></label>
                    <input
                        className="input_field"
                        type="tel"
                        id="booker_tel"
                        placeholder="숫자만 입력해주세요"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                    />
                </div>
                <div className="input_group">
                    <label className="input_label" htmlFor="booker_email">이메일</label>
                    <input className="input_field" type="email" id="booker_email" placeholder="이메일을 입력해주세요" />
                </div>
            </section>

            {/* 결제수단 */}
            <section className="booking_section">
                <h2 className="section_title">결제수단</h2>
                <div className="total_amount_box">
                    <span>총 결제금액</span>
                    <strong className="total_price_red">{totalPrice.toLocaleString()}원</strong>
                </div>
                <div className="payment_btns">
                    <button className={`payment_btn ${payment === '신용카드' ? 'selected' : ''}`} onClick={() => setPayment('신용카드')}>신용카드</button>
                    <button className={`payment_btn ${payment === '실시간계좌이체' ? 'selected' : ''}`} onClick={() => setPayment('실시간계좌이체')}>실시간계좌이체</button>
                </div>
                <div className="payment_btns">
                    <button className={`payment_btn payco_btn ${payment === 'PAYCO' ? 'selected' : ''}`} onClick={() => setPayment('PAYCO')}>PAYCO</button>
                </div>
            </section>

            {/* 예매자 동의 */}
            <section className="booking_section">
                <h2 className="section_title">예매자 동의</h2>
                <div className="agree_box">
                    <div className="agree_row agree_all" onClick={handleAllAgree}>
                        <span>전체 동의하기</span>
                        <div className={`agree_check_all ${agrees.all ? 'checked' : ''}`}>
                            <CheckIcon color={agrees.all ? 'white' : '#C3C3C3'} />
                        </div>
                    </div>
                    <div className="agree_divider" />
                    {agreeItems.map(item => (
                        <div className="agree_row" key={item.key} onClick={() => handleAgree(item.key)}>
                            <span className="agree_label">
                                {item.label}
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/arrow_icon.svg`}
                                    alt="화살표"
                                    className="agree_arrow"
                                />
                            </span>
                            <div className="agree_check_small">
                                <CheckIcon color={agrees[item.key] ? '#CD2027' : '#C3C3C3'} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 예매하기 버튼 */}
            <div className="booking_submit_wrap">
                <button
                    className={`booking_submit_btn ${isActive ? 'active' : ''}`}
                    disabled={!isActive}
                    onClick={() => isActive && navigate('/booking/complete')}
                >
                    예매하기
                </button>
            </div>

        </div>
    );
}
