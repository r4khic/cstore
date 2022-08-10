import styled from 'styled-components';
import NextImage from 'next/image';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 150px;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    ${mq.lowerXs} {
        span {
            display: none !important;
        }
    }
`;

export const BlackBlock = styled.div`
    padding: 47px;
    background-color: #000;
    max-width: 460px;
    width: 100%;
    height: fit-content;
    position: absolute;
    z-index: 2;
    left: 0;
    
    ${mq.lowerXs} {
        position: unset;
        padding: 25px;
    }
`;

export const Heading = styled.h3`
    font-size: 40px;
    color: #fff;
    font-weight: 400;
    margin: 0;
    
    ${mq.lowerXs} {
        font-size: 24px;
    }
`;

export const Text = styled.p`
    font-size: 15px;
    color: #fff;
    line-height: 28px;
    margin-top: 30px;
`;

export const Image = styled(NextImage)``;
