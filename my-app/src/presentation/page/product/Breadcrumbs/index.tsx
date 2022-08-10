import React from 'react';
import Container from 'presentation/component/common/block/Container';
import ArrowSvg from 'presentation/svg/Arrow';
import { Wrapper, Route, Navigation, Link, prevArrowSvg, nextArrowSvg } from './styles';

const Breadcrumbs: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Route>
                    Home / <span>Apple Airpods Pro</span>
                </Route>
                <Navigation>
                    <Link href="/"><ArrowSvg $css={prevArrowSvg} />Prev</Link>
                    |
                    <Link href="/">Next<ArrowSvg $css={nextArrowSvg} /></Link>
                </Navigation>
            </Wrapper>
        </Container>
    );
};

export default Breadcrumbs;