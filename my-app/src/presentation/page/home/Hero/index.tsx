import React from 'react';
import Container from 'presentation/component/common/block/Container';
import { Wrapper, Heading, SaveText } from './styles';

const Index: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Heading>НОВЫЕ <br/> ПОСТУПЛЕНИЯ</Heading>
                <SaveText>Сохрани больше</SaveText>
            </Wrapper>
        </Container>
    );
};

export default Index;