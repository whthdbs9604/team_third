import '../css/headerSub.css';

function HeaderSub({ title }) {
  return (
    <header className="header_sub">
        
        <button onClick={() => window.history.back()}>뒤로가기</button>
        
        <h1>{title}</h1> 
      
    </header>
  );
}
export default HeaderSub;