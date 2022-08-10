import styled, { css } from 'styled-components';
import NextImage from 'next/image';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    margin-top: 80px;
`;

export const Logo = styled(NextImage)`
    
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const NavBar = styled.nav`
    border-top: 1px solid #000;
    margin-top: 18px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 12px;
    
    ${mq.lowerXs} {
        grid-template-columns: 1fr;
    }
`;

export const Link = styled.a`
    font-family: sans-serif;
    color: #272727;
    font-size: 14px;
    width: fit-content;
    
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

export const LinksWrapper = styled.div`
    grid-column-start: 2;
    margin: 0 auto;
    display: flex;
    align-items: center;
    
    ${mq.lowerXs} {
        grid-column-start: unset;
    }
`;

export const IconLinks = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    ${mq.lowerXs} {
        justify-content: center;
        margin-top: 20px;
    }
`;

export const Icon = styled(NextImage)`
    
`;

export const IconLink = styled.a`
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

export const cartSvg = css`
    width: 24px;
    height: 28px;
    cursor: pointer;
`;
