import React, { useState, useEffect } from 'react'
import { Container, ContainerLogin, ContainerImage, ContainerButton, StyledAvatar, StyledButton, StyledInput, StyledImage, StyledLink, StyledTitle } from './styles'
import SignInImage from '../../assets/signin.png'

export default function SignIn(props) {

    const [animation, setAnimation] = useState(false)

    const goToDashboard = () => {
        setAnimation(true)
        setTimeout(() => {
            props.history.push('/dashboard')
        }, 1500);
    }

    return (
        <>
            <Container>
                <ContainerLogin >
                    <StyledAvatar animate={animation} src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" />
                    <StyledInput type="email" placeholder="E-mail" />
                    <StyledInput type="password" placeholder="Password" />
                    <ContainerButton>
                        <StyledButton onClick={goToDashboard}>Login</StyledButton>
                        <StyledButton>Cancel</StyledButton>
                    </ContainerButton>
                    <StyledLink to="/sign-up">Não tem conta? Clique aqui!</StyledLink>
                </ContainerLogin>
                <ContainerImage>
                    <StyledImage src={SignInImage} />
                    <StyledTitle>LOGIN</StyledTitle>
                </ContainerImage>
            </Container>
        </>
    )
}