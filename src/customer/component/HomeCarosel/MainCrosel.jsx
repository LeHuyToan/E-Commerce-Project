import React from 'react';
import { mainCaroselData } from './MainCroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {
    const items = mainCaroselData.map((item) => (
        <img className="cursor-pointer -z-10" role="presentation" src={item.image} alt="" />
    ));

    return <AliceCarousel items={items} disableButtonsControls autoPlay autoPlayInterval={2000} infinite />;
};
export default MainCrosel;
