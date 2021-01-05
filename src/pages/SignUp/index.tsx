/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import LogoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErros from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: string) => {
        formRef.current?.setErrors({});

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                    .required('Email Obrigatório')
                    .email('Digite um email valido'),
                password: Yup.string().min(6, 'No mínimo 6 digitos'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            console.log(data);
        } catch (err) {
            const errors = getValidationErros(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Background />
            <Content>
                <img src={LogoImg} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faca Seu Cadastro</h1>
                    <Input
                        icon={FiUser}
                        name="name"
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
                        name="password"
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
