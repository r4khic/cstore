import styled, { css } from 'styled-components';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 150px;
    
    ${mq.lowerLg} {
        align-items: flex-start;
        margin-top: 50px;
    }
`;

export const Route = styled.p`
    font-size: 15px;
    font-weight: 400;
    
    & span {
        opacity: 0.5;
    }
    
    ${mq.lowerLg} {
        margin: 0 10px 0 0;
    }
`;

export const Navigation = styled.div`
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    gap: 10px;
`;

export const Link = styled.a`
    color: #000;
    font-size: 15px;
    display: flex;
    align-items: center;
`;

export const nextArrowSvg = css`
    width: 7px;
    transform: rotate(180deg);
    cursor: pointer;
    margin-top: -3px;
    margin-left: 10px;
    
    & g {
        fill: #000;
    }
`;

export const prevArrowSvg = css`
    width: 7px;
    cursor: pointer;
    margin-top: -3px;
    margin-right: 10px;
    
    & g {
        fill: #000;
    }
`;

