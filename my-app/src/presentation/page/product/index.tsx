import React from 'react';
import Breadcrumbs from 'presentation/page/product/Breadcrumbs';
import Gallery from 'presentation/page/product/Gallery';
import DetailedInfo from 'presentation/page/product/DetailedInfo';
import { Wrapper } from './styles';

const Product: React.FC = () => {
    return (
        <Wrapper>
            <Breadcrumbs />
            <Gallery />
            <DetailedInfo />
        </Wrapper>
    );
};

export default Product;