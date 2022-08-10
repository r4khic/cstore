import React from 'react';
import Container from 'presentation/component/common/block/Container';
import { Wrapper, Heading, Left, Right, Text, Form, Input, Label, TextArea, Button } from './styles';

const Contacts = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Heading>КОНТАКТЫ</Heading>
                    <Text>Алматы, Казахстан</Text>
                    <Text>87002197383</Text>
                </Left>
                <Right>
                    <Form>
                        <Label>Имя *</Label>
                        <Input type="text" placeholder="Введите свое имя" required={true} maxLength={100} />
                        <Label>Email *</Label>
                        <Input type="email" placeholder="Введите свой email" required={true} maxLength={100} />
                        <Label>Телефон</Label>
                        <Input type="text" placeholder="Введите свой телефон" maxLength={100} />
                        <Label>Сообщение</Label>
                        <TextArea placeholder="Напишите свое сообщение здесь..." />
                        <Button type="submit">Отправить</Button>
                    </Form>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Contacts;