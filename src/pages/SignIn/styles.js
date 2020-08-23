import styled from 'styled-components'


export const Container = styled.div`    
    width: 100%;
    height: 100%;   
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 800px) {
        flex-direction: column-reverse;
    }
    
`

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;

    
    background-color: #fff;
    width: 40%;
    height: 100%;

    @media(max-width: 800px) {
        justify-content: center;
        width:80%;      
    }
`

export const StyledInput = styled.input`
    width: 90%;
    height: 40px;
    margin-bottom: 10px;

`
export const StyledAvatar = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    margin: 30px 0px 20px 0px;
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
export const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 60%;
    background: linear-gradient(60deg, #efc2e0, #75489f);

    @keyframes topBar {
        0%   {background-color:red; top:0px; height: 250px;}
        100% {background-color:red; top:0px;}
    }   


    @media(max-width: 800px) {
        height: 70px;
        width: 100%;

        animation-name: topBar;
        animation-duration: 1s;
    }
`

export const StyledImage = styled.img`
    width: 70%;

    @media(max-width: 800px) {
        display: none;
    }
`
export const StyledLink = styled.a`
    margin-top: 20px;
    color: #75489f;

    :hover {
        color: #f0027f;
    }
`

export const StyledTitle = styled.h1`
    color: #fff;
    display: none;
    @media(max-width: 800px) {
        display: initial;
    }

`
