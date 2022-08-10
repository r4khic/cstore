import React from 'react';
import Container from 'presentation/component/common/block/Container';
import { Wrapper, Title, Price, Description, Left, Right, Input, Label, Button } from './styles';

const DetailedInfo: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Title>Apple Airpods Pro</Title>
                    <Description>
                        AirPods с беспроводным зарядным футляром, высоким качеством звука и активацией Siri с помощью голоса.
                    </Description>
                </Left>
                <Right>
                    <Price>79 990,00₸</Price>
                    <Label>Количество</Label>
                    <Input type="number" />
                    <Button type="button">Добавить в корзину</Button>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default DetailedInfo;