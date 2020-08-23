import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`    
    width: 100%;
    height: 95%;   
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(60deg, #efc2e0, #75489f);
    padding: 10px;
    
    @media(max-width: 800px) {
        flex-direction: column-reverse;
    }
    
`

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    width: 40%;
    height: 90%;

    @media(max-width: 800px) {
        justify-content: center;
        width:80%;
    }

    @media(max-width: 500px) {
        justify-content: center;
        width:90%;
    }
`

export const StyledInput = styled.input`
    width: 90%;
    height: 40px;
    margin-bottom: 10px;

`
export const StyledAvatar = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: 20px 0px 20px 0px;
    border: 1px;
    opacity: 0.8;
    padding: 5px;
    border-style: solid;
    border-color: #75489f;
    
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const StyledButton = styled.button`
    width: 90%;
    height: 40px;
    margin-top: 10px;
    color: #fff;
    border-radius: 4px;
    border: 0px;    
    background-color: #75489f;

    :hover {
        opacity: 0.7;
    }
    
    :first-child {
        margin-top: 5px;
        background-color: #f0027f;
    }

`
export const StyledLink = styled(Link)`
    margin-top: 20px;
    color: #75489f;

    :hover {
        color: #f0027f;
    }
`
