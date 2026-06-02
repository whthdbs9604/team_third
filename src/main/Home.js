import { lazy, Suspense } from "react";
import MainSlide from "./MainSlide";
import Enjoy from "./Enjoy";

// 하단 컴포넌트들을 lazy(동적 불러오기)로 변경
const Rank = lazy(() => import("./Rank"));
const EventBanner = lazy(() => import("./EventBanner"));
const Discount = lazy(() => import("./Discount"));
const Genre = lazy(() => import("./Genre"));
const ShortVideo = lazy(() => import("./ShortVideo"));

export default function Home() {
    return (
        <>
            <MainSlide />
            <Enjoy />

            <Suspense fallback={<div style={{ height: '300px' }} />}>
                <Rank />
            </Suspense>
            
            <Suspense fallback={<div style={{ height: '150px' }} />}>
                <EventBanner />
            </Suspense>
            
            <Suspense fallback={<div style={{ height: '300px' }} />}>
                <Discount />
            </Suspense>
            
            <Suspense fallback={<div style={{ height: '400px' }} />}>
                <Genre />
            </Suspense>
            
            <Suspense fallback={<div style={{ height: '500px' }} />}>
                <ShortVideo />
            </Suspense>
        </>
    );
}