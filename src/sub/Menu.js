import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Menu({title}) {

    const { setHeaderTitle } = useOutletContext();
    useEffect(() => {
    setHeaderTitle(title);
    }, [title, setHeaderTitle]);

    return(
        <>
        </>
        
    )

}