import styled from 'styled-components';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    margin-top: 90px;
    
    ${mq.lowerXs} {
        margin-top: 50px;
    }
`;

export const Heading = styled.h1`
    text-align: center;
    font-size: 72px;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 90px;
    
    ${mq.lowerSm} {
        font-size: 58px;
        line-height: 70px;
    }

    ${mq.lowerXs} {
        font-size: 36px;
        line-height: 50px;
    }
`;

export const SaveText = styled.p`
    text-align: center;
    margin-top: 30px;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 20px;
    
    ${mq.lowerXs} {
        font-size: 15px;
        margin-top: 20px;
    }
`;
