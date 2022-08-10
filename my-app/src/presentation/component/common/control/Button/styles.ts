import styled, { css } from 'styled-components';

export type VariantT = {
    $variant: 'default' | 'inverted';
};

export const Text = styled.span`
    position: relative;
`;

const defaultButtonCss = css`
    background: #000;
    color: #fff;
    font-weight: 400;
`;

const invertedButtonCss = css`
    background: transparent;
    color: #000;
    border: 1px solid #000000;
    font-weight: 500;
    
    &:hover, &:focus {
        color: #fff;
    }
`;

export const Wrapper = styled.button<VariantT>`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    border-radius: 30px;
    padding: 8px 16px;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.3s ease-in-out;
    
    &:hover, &:focus {
        border-color: #FE384F;
    }

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        background: #FE384F;
        left: -10px;
        width: 0;
        height: 100%;
        transition: 0.3s ease-in-out;
        border-radius: 100%;
        transform: translateY(-50%);
        top: 50%;
    }

    &:hover:before, &:focus:before {
        width: calc(100% + 10px);
        transition: 0.3s ease-in-out;
        border-radius: 10px;
        height: 200%;
    }
    
    &:focus:before {
        background: #DB142B;
    }
    
    ${({ $variant }: VariantT) => $variant === 'inverted' && invertedButtonCss}
    ${({ $variant }: VariantT) => $variant !== 'inverted' && defaultButtonCss}
`;

export default Wrapper;
