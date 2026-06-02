import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Login({title}) {

    const { setHeaderTitle } = useOutletContext();
    useEffect(() => {
    setHeaderTitle(title);
    }, [title, setHeaderTitle]);

    return(
        <div id='login_wrap'>

            <h3><Link to="/"><img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="로고" /></Link></h3>

        </div>
        
    )

}