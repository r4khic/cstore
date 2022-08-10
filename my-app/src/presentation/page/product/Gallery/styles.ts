import styled from 'styled-components';
import NextImage from 'next/image';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    margin-top: 100px;

    ${mq.lowerSm} {
        margin-top: 50px;
    }
`;

export const Image = styled(NextImage)`
    object-fit: cover;
`;
