import React from 'react';
import Container from 'presentation/component/common/block/Container';
import ContactsBlock from 'presentation/page/home/Contacts';
import { Wrapper } from './styles';

const Contacts: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <ContactsBlock />
            </Wrapper>
        </Container>
    );
};

export default Contacts;