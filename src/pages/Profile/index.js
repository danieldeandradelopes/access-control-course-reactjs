import React from 'react'
import Navbar from '../../components/Navbar'
import { Container, ContainerButton, ContainerLogin, StyledAvatar, StyledButton, StyledInput, StyledLink } from './styles'

export default function Profile() {
    return (
        <>
            <Navbar />
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
            </Container>
        </>
    )
}