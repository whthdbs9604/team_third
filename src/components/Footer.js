import { Link } from "react-router-dom";
import $ from 'jquery';

export default function Footer() {
      return (
            <footer>
                <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="로고 이미지" />
                <p>서울특별시 종로구 대학로 12길</p>
                <p>사업자등록번호 123-45-67890</p>
                <p>고객센터 1588 - 0000 (평일 9~18시)</p>

                <div>
                    <Link href="#">이용약관</Link>
                    <Link href="#">개인정보 처리방침</Link>
                    <Link href="#">청소년 보호정책</Link>
                    <Link href="#">사업자 정보</Link>
                </div>

                <small>©2016 대학로티켓닷컴 ALL Right reserved.</small>
            </footer>
      )
}