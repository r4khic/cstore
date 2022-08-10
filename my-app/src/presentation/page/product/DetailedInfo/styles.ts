import styled from 'styled-components';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr;
    margin-top: 50px;
    margin-bottom: 100px;
    
    ${mq.lowerSm} {
        grid-template-columns: 1fr;
    }
`;

export const Left = styled.div``;
export const Right = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 400;
`;

export const Description = styled.p`
    margin-top: 30px;
    font-family: sans-serif;
    font-size: 15px;
`;

export const Price = styled.p`
    font-size: 20px;
`;

export const Label = styled.label`
    width: 100%;
    font-size: 15px;
    display: block;
`;

export const Input = styled.input`
    height: 43px;
    border: 1px solid #c9c9c9;
    padding: 0 15px;
    margin-top: 15px;
    width: 100px;
    
    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    height: 40px;
    color: #fff;
    background-color: #aabcbf;
    margin-top: 30px;
    transition: 0.4s ease;
    cursor: pointer;
    
    &:hover {
        background: #c3d0d2;
    }
`;
