import { Link } from "react-router-dom";
import $ from 'jquery';


export default function Header() {
      return (
                <header>
                    <h1><Link className="header_link"><img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="로고이미지" /></Link></h1>
                </header>
                
      )
}