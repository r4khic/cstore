import styled from 'styled-components';
import mq from 'constants/mediaqueries';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 150px;
    
    ${mq.lowerXs} {
        grid-template-columns: 1fr;
    }
`;

export const Left = styled.div`
    
`;

export const Right = styled.div`

`;

export const Heading = styled.h3`
    font-size: 40px;
    font-weight: 400;
    margin-top: 0;
`;

export const Text = styled.p`
    font-size: 15px;
`;

export const Form = styled.form`
    display: grid;
`;

export const Label = styled.label`
    margin-top: 10px;
    font-family: sans-serif;
    font-size: 15px;
    padding: 0 5px;
`;

export const Input = styled.input`
    height: 50px;
    border: 1px solid transparent;
    border-bottom: 1px solid #000;
    padding: 0 5px;
    
    &:hover {
        border: 1px solid #000;
    }
    
    &::placeholder {
        font-size: 15px;
        font-family: sans-serif;
        color: #000;
    }
`;

export const TextArea = styled.textarea`
    height: 116px;
    border: 1px solid transparent;
    border-bottom: 1px solid #000;
    padding: 15px 5px;

    &:hover {
        border: 1px solid #000;
    }

    &::placeholder {
        font-size: 15px;
        font-family: sans-serif;
        color: #000;
    }
`;

export const Button = styled.button`
    height: 47px;
    width: 100%;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    margin-top: 30px;
    transition: 0.4s ease;
    
    &:hover {
        opacity: 0.6;
    }
`;
