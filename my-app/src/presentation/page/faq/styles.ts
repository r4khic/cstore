import styled, { css } from 'styled-components';
import mq from 'constants/mediaqueries';

type GridT = {
    $start?: number;
}

export const Wrapper = styled.div`
    
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    margin: 130px 0;

    ${mq.lowerSm} {
        font-size: 58px;
        line-height: 70px;
        margin: 50px 0;
    }

    ${mq.lowerXs} {
        font-size: 36px;
        line-height: 50px;
    }
`;

export const Questions = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content 1fr;
    gap: 40px;
    
    ${mq.lowerSm} {
        grid-template-columns: 1fr;
        gap: 0;
    }
`;

export const Question = styled.h2`
    font-weight: 400;
`;

export const Answer = styled.p<GridT>`
    line-height: 28px;
    font-family: sans-serif;

    ${mq.lowerSm} {
        ${({ $start }) => $start && css`grid-row-start: ${$start}`}
    }
`;
