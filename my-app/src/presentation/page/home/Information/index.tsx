import React from 'react';
import Container from 'presentation/component/common/block/Container';
import { Wrapper, BlackBlock, Heading, Text, Image } from './styles';

const Information: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <BlackBlock>
                    <Heading>ИНФОРМАЦИЯ ПРО НАС:</Heading>
                    <Text>
                        Мы основали C-store с одной целью: создать качественный, умный и надежный интернет-магазин. Наша страсть к совершенству двигала нас с самого начала и продолжает вести нас в будущее. Мы знаем, что каждый продукт имеет значение, и стремимся сделать все покупки максимально полезными. Убедитесь сами!
                    </Text>
                </BlackBlock>
                <Image src="/images/Working from Home.webp" width={560} height={580} />
            </Wrapper>
        </Container>
    );
};

export default Information;