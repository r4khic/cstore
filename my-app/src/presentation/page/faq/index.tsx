import React from 'react';
import Container from 'presentation/component/common/block/Container';
import { Wrapper, Title, Answer, Question, Questions } from './styles';

const FAQ: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>ОТВЕТЫ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:</Title>
                <Questions>
                    <Question>ПОЧЕМУ ТАК ДЁШЕВО?</Question>
                    <Question>КАК БУДЕТ ОСУЩЕСТВЛЯТЬСЯ ДОСТАВКА ?</Question>
                    <Question>НАСЧЕТ ПРЕДОПЛАТЫ:</Question>
                    <Answer $start={2}>
                        Потому что мы являемся интернет магазином и мы не платим за аренду и за сотрудников тоже не платим, за счет этого нам удаётся значительно снизить расходы.
                    </Answer>
                    <Answer $start={4}>
                        Доставка по всему Казахстану Казпочтой, срок доставки 5-7 дней.
                    </Answer>
                    <Answer>
                        В другие города полная предоплата, безналичный расчет.
                    </Answer>
                </Questions>
            </Wrapper>
        </Container>
    );
};

export default FAQ;