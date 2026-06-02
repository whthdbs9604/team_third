import { Link } from "react-router-dom";


export default function Header() {
      return (
                <header>
                    <h1><Link to="/" className="header_link"><img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="로고이미지" /></Link></h1>
                </header>
                
      )
}