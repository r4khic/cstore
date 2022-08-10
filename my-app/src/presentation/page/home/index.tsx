import React from 'react';
import { Wrapper } from 'presentation/page/home/styles';
import Hero from 'presentation/page/home/Hero';
import Slider from 'presentation/page/home/Slider';
import Products from 'presentation/page/home/Products';
import Information from 'presentation/page/home/Information';
import Contacts from 'presentation/page/home/Contacts';

const Home: React.FC = () => {
    return (
        <Wrapper>
            <Hero />
            <Slider />
            <Products />
            <Information />
            <Contacts />
        </Wrapper>
    );
};

export default Home;