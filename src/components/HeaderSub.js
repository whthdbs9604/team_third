import '../css/headerSub.css';

function HeaderSub({ title }) {
  return (
    <header className="header_sub">
        
        <button onClick={() => window.history.back()}><img src={`${process.env.PUBLIC_URL}/img/back.svg`} alt="뒤로가기 이미지" /></button>
        
        <h1>{title}</h1> 
      
    </header>
  );
}
export default HeaderSub;