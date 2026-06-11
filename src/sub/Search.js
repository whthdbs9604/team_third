import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import '../css/search.css';

// 최근 검색어 초기 데이터
const initialRecent = [
    '로맨스 연극',
    '로맨스 연극',
    '로맨스 연극',
    '로맨스 연극',
];

// 인기 검색어 데이터
const popularList = [
    { rank: 1,  keyword: '대학로 연극 추천',  trend: 'up',   change: 9 },
    { rank: 2,  keyword: '코미디 연극 추천',  trend: 'down', change: 1 },
    { rank: 3,  keyword: '한뼘사이',          trend: 'up',   change: 5 },
    { rank: 4,  keyword: '2호선 세입자',       trend: 'none', change: 0 },
    { rank: 5,  keyword: '2시22분',           trend: 'down', change: 4 },
    { rank: 6,  keyword: '나의 PS파트너',      trend: 'up',   change: 1 },
    { rank: 7,  keyword: '뷰티풀라이프',       trend: 'none', change: 0 },
    { rank: 8,  keyword: '옥탑방 고양이',      trend: 'up',   change: 3 },
    { rank: 9,  keyword: '홍도',              trend: 'down', change: 2 },
    { rank: 10, keyword: '쓰로우',            trend: 'up',   change: 6 },
];

export default function Search({ title }) {

    const { setHeaderTitle } = useOutletContext();
    useEffect(() => {
        setHeaderTitle(title);
    }, [title, setHeaderTitle]);

    const [query, setQuery] = useState('');
    const [recentList, setRecentList] = useState(initialRecent);

    // 개별 삭제
    const handleDeleteOne = (index) => {
        setRecentList(prev => prev.filter((_, i) => i !== index));
    };

    // 전체 삭제
    const handleDeleteAll = () => {
        setRecentList([]);
    };

    // 검색창 초기화
    const handleClear = () => {
        setQuery('');
    };

    return (
        <div id="search_wrap">

            {/* 검색창 */}
            <div className="search_input_box">
                <img src={`${process.env.PUBLIC_URL}/img/search_icon.png`} alt="검색 아이콘" className="search_icon" />
                <input
                    className="search_input"
                    type="text"
                    placeholder="검색어를 입력하세요."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                    <button className="search_clear_btn" onClick={handleClear}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#C3C3C3"/>
                            <path d="M5 5L11 11M11 5L5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                )}
            </div>

            {/* 최근 검색어 */}
            {recentList.length > 0 && (
                <section className="search_section">
                    <div className="search_section_header">
                        <h2 className="search_section_title">최근 검색어</h2>
                        <button className="search_delete_all" onClick={handleDeleteAll}>전체 삭제</button>
                    </div>
                    <ul className="recent_list">
                        {recentList.map((item, index) => (
                            <li key={index} className="recent_item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="recent_icon">
                                    <circle cx="9" cy="9" r="8" stroke="#C3C3C3" strokeWidth="1.5"/>
                                    <path d="M9 5.5V9L11.5 11" stroke="#C3C3C3" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                <span className="recent_keyword">{item}</span>
                                <button className="recent_delete_btn" onClick={() => handleDeleteOne(index)}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M2 2L12 12M12 2L2 12" stroke="#C3C3C3" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* 인기 검색어 */}
            <section className="search_section">
                <h2 className="search_section_title">지금 인기 검색어</h2>
                <ul className="popular_list">
                    {popularList.map((item) => (
                        <li key={item.rank} className="popular_item">
                            <span className={`popular_rank ${item.rank <= 3 ? 'highlight' : ''}`}>{item.rank}</span>
                            <span className="popular_keyword">{item.keyword}</span>
                            <span className={`popular_trend ${item.trend}`}>
                                {item.trend === 'up' && <>↑ {item.change}</>}
                                {item.trend === 'down' && <>↓ {item.change}</>}
                                {item.trend === 'none' && <>-</>}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

        </div>
    );
}
