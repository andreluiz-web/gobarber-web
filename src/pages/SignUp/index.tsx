/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useCallback } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import LogoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    const handleSubmit = useCallback(async (data: string) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required().email('Email obrigatório'),
                password: Yup.string().min(6, 'No mínimo 6 digitos'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Container>
            <Background />
            <Content>
                <img src={LogoImg} alt="GoBarber" />
                <Form onSubmit={handleSubmit}>
                    <h1>Faca Seu Cadastro</h1>
                    <Input
                        icon={FiUser}
                        name="nome"
                        type="text"
                        placeholder="Nome"
                    />
                    <Input
                        icon={FiMail}
                        name="email"
                        type="text"
                        placeholder="Email"
                    />
                    <Input
                        icon={FiLock}
                        name="senha"
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="teste">
                    <FiArrowLeft />
                    Voltar para Logon
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
