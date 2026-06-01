import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import HeaderSub from './HeaderSub';
import Navigation from './Navigation';
import Footer from './Footer';

function SubPage() {
    const [headerTitle, setHeaderTitle] = useState('');
    return (
    <>
        <HeaderSub title={headerTitle} />
        <Outlet context={{ setHeaderTitle }} />
        <Navigation />
        <Footer />
    </>
    );
}
export default SubPage;