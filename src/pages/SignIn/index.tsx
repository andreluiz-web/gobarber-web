/* eslint-disable react/jsx-indent */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="GoBarber" />
                <form>
                    <h1>Faca Seu Logon</h1>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Entrar</button>
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
