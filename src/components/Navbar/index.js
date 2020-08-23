import React from 'react'
import { Container, Items, StyledButton, StyledLink } from './styles'
import ProfileIcon from '../../assets/profile.png'


export default function Navbar() {
    return (
        <Container>
            <StyledLink to="/dashboard">
                <h1>Access Control</h1>
            </StyledLink>
            <div>
                <Items>
                    <li>
                        <StyledLink to="/profile">
                            My Account
                            <img src={ProfileIcon} alt="profile" />
                        </StyledLink>
                    </li>
                    <li>
                        <StyledButton>Logout</StyledButton>
                    </li>
                </Items>
            </div>
        </Container>
    )
}