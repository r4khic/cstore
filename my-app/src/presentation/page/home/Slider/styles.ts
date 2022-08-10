import styled from 'styled-components';
import NextImage from 'next/image';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    margin-top: 60px;

    & .slick-track {
        display: flex;
    }

    & .slick-list, & .slick-slider {
        position: relative;
        display: block;
    }
    & .slick-slide div div span {
        height: 100% !important;
    }

    & .slick-slide div div span img {
        object-fit: cover !important;
    }
`;

export const Slide = styled.div`
    width: 940px;
    height: 525px;
    position: relative;
    cursor: pointer;
    
    &:hover div {
        opacity: 1;
    }
    
    ${mq.lowerSm} {
        height: 400px;
    }
`;

export const SlideImage = styled(NextImage)`
    
`;

/*
export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    transition: opacity 0.5s ease 0s;
    background: rgba(0,0,0,0.3);
    width: 100%;
    height: 74px;
    display: flex;
    align-items: center;
    opacity: 0;
`;

export const Author = styled.p`
    color: #fff;
    font-size: 40px;
    padding: 10px;
    
    ${mq.lowerSm} {
        font-size: 16px;
    }
`;
*/
