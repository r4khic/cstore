import React from 'react';
import NextLink from 'next/link';
import SlickSlider, { Settings } from 'react-slick';
import Container from 'presentation/component/common/block/Container';
import 'slick-carousel/slick/slick.css';
import ArrowSvg from 'presentation/svg/Arrow';
import { Wrapper, Card, CardImage, Text, Top, QuickView, Images, BestSeller, nextArrowSvg, prevArrowSvg } from './styles';

const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <ArrowSvg $css={nextArrowSvg} />,
    prevArrow: <ArrowSvg $css={prevArrowSvg} />,
    responsive: [
        {
            breakpoint: 875,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 675,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
            }
        },
    ],
};

const Products: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <SlickSlider {...settings}>
                    {[...Array(5)].map((_, index) => (
                        <NextLink href="/product/1" key={index} passHref>
                            <Card key={index}>
                                <Top>
                                    <Images>
                                        <CardImage src="/images/products/1-1.webp" width={206} height={206} />
                                        <CardImage src="/images/products/1-2.webp" width={206} height={206} />
                                    </Images>
                                    <BestSeller>
                                        Бэстселлер
                                    </BestSeller>
                                    <QuickView>
                                        Quick View
                                    </QuickView>
                                </Top>
                                <Text>Apple Airpods 3</Text>
                                <Text>69 990,00₸</Text>
                            </Card>
                        </NextLink>
                    ))}
                </SlickSlider>
            </Wrapper>
        </Container>
    );
};

export default Products;