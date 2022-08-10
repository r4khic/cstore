import React from 'react';
import NextLink from 'next/link';
import Container from 'presentation/component/common/block/Container';
import { BestSeller, Card, CardImage, Images, QuickView, Text, Top } from 'presentation/page/home/Products/styles';
import { Wrapper } from './styles';

const Products: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                {[...Array(20)].map((_, index) => (
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
            </Wrapper>
        </Container>
    );
};

export default Products;