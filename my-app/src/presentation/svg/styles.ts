import styled, { DefaultTheme, Interpolation } from 'styled-components';

export type SvgProps = {
    $css?: Interpolation<DefaultTheme>;
}

export const Svg = styled.svg<SvgProps>`
    ${({ $css }) => $css}
`;
