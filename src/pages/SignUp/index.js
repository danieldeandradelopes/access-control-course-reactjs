import React from 'react'
import { Container, ContainerLogin, ContainerImage, ContainerButton, StyledAvatar, StyledButton, StyledInput, StyledImage, StyledLink, StyledTitle } from './styles'
import SignUpImage from '../../assets/signup.png'

export default function SignUp() {
    return (
        <>
            <Container>
                <ContainerLogin>
                    <StyledAvatar src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" />
                    <StyledInput type="email" placeholder="E-mail" />
                    <StyledInput type="password" placeholder="Password" />
                    <StyledInput type="password" placeholder="Confirm Password" />
                    <ContainerButton>
                        <StyledButton>Register</StyledButton>
                        <StyledButton>Cancel</StyledButton>
                    </ContainerButton>
                    <StyledLink to="/sign-in">Já tenho conta!</StyledLink>
                </ContainerLogin>
                <ContainerImage>
                    <StyledImage src={SignUpImage} />
                    <StyledTitle>REGISTER</StyledTitle>
                </ContainerImage>
            </Container>
        </>
    )
}