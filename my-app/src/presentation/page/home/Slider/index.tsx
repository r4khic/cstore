import React from 'react';
import SlickSlider, { Settings } from 'react-slick';
import Container from 'presentation/component/common/block/Container';
import 'slick-carousel/slick/slick.css';
import { Wrapper, Slide, SlideImage } from './styles';

type SlideT = {
    id: number;
    url: string;
}

const SLIDES: SlideT[] = [
    {
        id: 1,
        url: 'Image by Ales Nesetril',
    },
    {
        id: 2,
        url: 'Image by Ameen ALmayuf',
    },
    {
        id: 3,
        url: 'Image by Anh Nhat',
    },
    {
        id: 4,
        url: 'Image by Brandon Romanchuk',
    },
    {
        id: 5,
        url: 'Image by insung yoon',
    },
    {
        id: 6,
        url: 'Image by Onur Binay',
    },
];

const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
};

const Slider: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <SlickSlider {...settings}>
                    {SLIDES.map(slide => (
                        <Slide key={slide.id}>
                            <SlideImage src={`/images/heroslider/${slide.url}.webp`} width={940} height={525} />
                            {/*<Overlay>
                                <Author>{slide.url}</Author>
                            </Overlay>*/}
                        </Slide>
                    ))}
                </SlickSlider>
            </Wrapper>
        </Container>
    );
};

export default Slider;