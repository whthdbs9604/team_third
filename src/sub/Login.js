import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Login({title}) {

    const { setHeaderTitle } = useOutletContext();
    useEffect(() => {
    setHeaderTitle(title);
    }, [title, setHeaderTitle]);

    return(
        <div id='login_wrap'>

        </div>
        
    )

}