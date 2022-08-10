import React from 'react';
import Container from 'presentation/component/common/block/Container';
import { Wrapper, Image } from './styles';

const Gallery: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Image src="/images/product-big/1-1.webp" width={980} height={551} />
            </Wrapper>
        </Container>
    );
};

export default Gallery;