import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import { Link } from 'react-router-dom';


let LeftSectionData =[
    {
        title:"Kite",
        description:"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
        link1:{
            title:"Try demo",
            link:"/coming-soon",
        },
        link2:{
            title:"Learn more",
            link:"/coming-soon",
        },
        imageLink: "media/images/kite.png",
        googlePlayLink:"/coming-soon",
        appstoreLink:"/coming-soon"
    },
    {
        title:"Coin",
        description:"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
        link1:{
            title:"Coin",
            link:"/coming-soon",
        },
        imageLink: "media/images/coin.png",
        googlePlayLink:"/coming-soon",
        appstoreLink:"/coming-soon",
    },
    {
        title:"Varsity mobile",
        description:"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
        imageLink: "media/images/varsity.png",
        googlePlayLink:"/coming-soon",
        appstoreLink:"/coming-soon",
    },
]

let RightSectionData =[
    {
        title:"Console",
        description:"The central dashboard for your TradeX account. Gain insights into your trades and investments with in-depth reports and visualisations.",
        link1:{
            title:"Learn more",
            link:"/coming-soon",
        },
        imageLink: "media/images/console.png",
    },
    {
        title:"Kite Connect API",
        description:"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
        link1:{
            title:"Kite Connect",
            link:"/coming-soon",
        },
        imageLink: "media/images/kiteconnect.png",
    }
]

function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection content={LeftSectionData[0]} />
            <RightSection content={RightSectionData[0]} />
            <LeftSection content={LeftSectionData[1]} />
            <RightSection content={RightSectionData[1]} />
            <LeftSection content={LeftSectionData[2]} />
            <p className='title-after-left-right-section'>Want to know more about our technology stack? Check out the <Link to="/coming-soon">TradeX.tech</Link> blog.</p>
            <Universe />
        </>
    );
}

export default ProductsPage;