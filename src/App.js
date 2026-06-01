import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/reset.css'
import './App.css';
import './css/main.css';
import MainPage from './components/MainPage';
import SubPage from './components/SubPage';
import Home from './main/Home'
import Menu from './sub/Menu'


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

        <Routes>

        <Route element={<MainPage />}>
        <Route path="/" element={<Home />} />
        </Route>

        <Route element={<SubPage />}>
        <Route path="/menu" element={<Menu title="메뉴" />} /> 
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;