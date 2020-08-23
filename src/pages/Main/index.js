import React from 'react'
import { Container, ContentLogin, ContentImage, StyledAvatar, StyledButton, StyledInput, StyledImage, StyledLink, StyledTitle } from './styles'
import LoginImage from '../../assets/login.png'

export default function Main() {
    return (
        <>
            <Container>
                <ContentLogin>
                    <StyledAvatar src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" />
                    <StyledInput type="email" placeholder="E-mail" />
                    <StyledInput type="password" placeholder="Password" />
                    <StyledButton>Login</StyledButton>
                    <StyledButton>Cancel</StyledButton>
                    <StyledLink href="#">Não tem conta? Clique aqui!</StyledLink>
                </ContentLogin>
                <ContentImage>
                    <StyledImage src={LoginImage} />
                    <StyledTitle>LOGIN</StyledTitle>
                </ContentImage>
            </Container>
        </>
    )
}