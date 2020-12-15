/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="GoBarber" />
                <form>
                    <h1>Faca Seu Logon</h1>
                    <Input
                        icon={FiMail}
                        name="email"
                        type="text"
                        placeholder="E-mail"
                    />
                    <Input
                        icon={FiLock}
                        name="senha"
                        type="password"
                        placeholder="Password"
                    />
                    <Button type="submit">Entrar</Button>
                    <a href="forgot">Esqueci minha senha</a>
                </form>
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
