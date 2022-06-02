import React from 'react';
import Deliverybanner from './Deliverybanner/Deliverybanner';
import DownloadApp from './DownloadApp/DownloadApp';
import Food from './Food/Food';
import HeaderSlide from './HeaderSlide/HeaderSlide';
import Pack from './Pack/Pack';

const HomePages = () => {
    return (
        <section>
            <HeaderSlide></HeaderSlide>
            <DownloadApp></DownloadApp>
            <Food></Food>
            <Deliverybanner></Deliverybanner>
            <Pack></Pack>
        </section>
    );
};

export default HomePages;