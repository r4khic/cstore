import React from 'react';
import { Icon, IconLink, IconLinks } from 'presentation/layout/Header/styles';
import { Wrapper, Icons, Copyright } from './styles';

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Icons>
                <IconLinks>
                    <IconLink target="_blank" rel="noreferrer noopener" href="https://goo.gl/maps/YEPpnsKNw3aoEqhz7">
                        <Icon src="/images/icons/GooglePlaces.webp" width={20} height={20} />
                    </IconLink>
                    <IconLink target="_blank" rel="noreferrer noopener" href="https://instagram.com/c__st0re?igshid=YmMyMTA2M2Y=">
                        <Icon src="/images/icons/Instagram.webp" width={20} height={20} />
                    </IconLink>
                    <IconLink target="_blank" rel="noreferrer noopener" href="https://t.me/c_st0re">
                        <Icon src="/images/icons/link.webp" width={20} height={20} />
                    </IconLink>
                </IconLinks>
            </Icons>
            <Copyright>
                ©2022 by C-store.
            </Copyright>
        </Wrapper>
    );
};

export default Footer;