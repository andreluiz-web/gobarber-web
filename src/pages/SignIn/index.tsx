/* eslint-disable react/jsx-indent-props */
import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import LogoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErros from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { signIn } = useAuth();

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            formRef.current?.setErrors({});

            try {
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required('Email Obrigatório')
                        .email('Digite um email valido'),
                    password: Yup.string().required('Senha obrigatória'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                signIn({
                    email: data.email,
                    password: data.password,
                });
            } catch (err) {
                const errors = getValidationErros(err);

                formRef.current?.setErrors(errors);
            }
        },
        [signIn],
    );

    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faca Seu Logon</h1>
                    <Input
                        icon={FiMail}
                        name="email"
                        type="text"
                        placeholder="E-mail"
                    />
                    <Input
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <Button type="submit">Entrar</Button>
                    <a href="forgot">Esqueci minha senha</a>
                </Form>
                <a href="teste">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
