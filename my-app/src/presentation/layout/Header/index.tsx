import React from 'react';
import NextLink from 'next/link';
import Container from 'presentation/component/common/block/Container';
import CartSvg from 'presentation/svg/Cart';
import { Wrapper, Logo, LogoWrapper, Link, NavBar, LinksWrapper, Icon, IconLinks, IconLink, cartSvg } from './styles';

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <Logo src="/images/logo.webp" width={80} height={80} />
                </LogoWrapper>
                <NavBar>
                    <LinksWrapper>
                        <NextLink href="/" passHref>
                            <Link>Главная</Link>
                        </NextLink>
                        <NextLink href="/products" passHref>
                            <Link>Товары</Link>
                        </NextLink>
                        <NextLink href="/faq" passHref>
                            <Link>FAQ</Link>
                        </NextLink>
                        <NextLink href="/contacts" passHref>
                            <Link>Контакты</Link>
                        </NextLink>
                    </LinksWrapper>
                    <IconLinks>
                        <IconLink target="_blank" rel="noreferrer noopener" href="https://goo.gl/maps/YEPpnsKNw3aoEqhz7">
                            <Icon src="/images/icons/GooglePlaces.webp" width={20} height={20} />
                        </IconLink>
                        <IconLink target="_blank" rel="noreferrer noopener" href="https://instagram.com/c__st0re?igshid=YmMyMTA2M2Y=">
                            <Icon src="/images/icons/Instagram.webp" width={20} height={20} />
                        </IconLink>
                        <IconLink target="_blank" rel="noreferrer noopener" href="https://t.me/c_st0re">
                            <Icon src="/images/icons/link.webp" width={20} height={20} />
                        </IconLink>
                        <CartSvg $css={cartSvg} />
                    </IconLinks>
                </NavBar>
            </Wrapper>
        </Container>
    );
};

export default Header;