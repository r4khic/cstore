import styled, { css } from 'styled-components';
import NextImage from 'next/image';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 150px;
    
    & .slick-slider {
        padding: 0 20px;
    }
    
    & .slick-track {
        display: flex;
    }
    
    ${mq.lowerSm} {
        margin-top: 70px;
        margin-bottom: 80px;
    }
`;

export const Card = styled.a`
    display: block;
    cursor: pointer;
    color: #000;
    
    & div div span {
        height: 206px !important;
        width: 206px !important;
    }

    @media screen and (max-width: 440px) {
        width: 236px;
        
        & div div span {
            height: 236px !important;
            width: 236px !important;
        }
    }

    & div div span:last-child {
        display: none !important;
    }
    
    &:hover div div span:first-child {
        display: none !important;
    }
    &:hover div div span:last-child {
        display: block !important;
    }
    
    &:hover div div:last-child {
        transform: translateY(0);
    }
    
    @media screen and (max-width: 440px) {
        margin: 0 auto;
    }
`;

export const Top = styled.div`
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 440px) {
        height: 236px;
        width: 236px;
    }
`;

export const CardImage = styled(NextImage)`
`;

export const Text = styled.h3`
    margin: 15px 0;
    font-size: 15px;
    font-weight: 400;
`;

export const QuickView = styled.div`
    height: 50px;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.75);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(50px);
    transition: 0.4s;
`;

export const Images = styled.div`
    height: 206px;
    width: 206px;
    margin: 0 auto;
    
    @media screen and (max-width: 440px) {
        height: 236px;
        width: 236px;
    }   
`;

export const BestSeller = styled.div`
    background-color: #AABCBF;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    font-weight: 400;
    padding: 7px 13px;
    color: #fff;
`;

export const nextArrowSvg = css`
    position: absolute;
    top: 40%;
    z-index: 1;
    width: 12px;
    transform: rotate(180deg);
    right: 0;
    cursor: pointer;
    
    & g {
        fill: #000;
    }
`;

export const prevArrowSvg = css`
    position: absolute;
    top: 40%;
    z-index: 1;
    width: 12px;
    left: 0;
    cursor: pointer;
    
    & g {
        fill: #000;
    }
`;
