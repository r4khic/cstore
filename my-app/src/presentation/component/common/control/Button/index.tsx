import React, { ButtonHTMLAttributes } from 'react';
import { Wrapper, Text, VariantT } from './styles';

type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: VariantT['$variant'];
    children: React.ReactNode;
};

const Button = (props: PropsT) => {
    const { variant, children, ...restProps } = props;

    return (
        <Wrapper $variant={variant as VariantT['$variant']} {...restProps}>
            <Text>{children}</Text>
        </Wrapper>
    );
};

export default Button;
