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

export const ContentLogin = styled.div`
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

export const StyledButton = styled.button`
    width: 90%;
    height: 40px;
    margin-top: 10px;
    color: #fff;
    background-color: #f0027f;
    border-radius: 4px;
    border: 0px;

    :hover {
        opacity: 0.7;
    }
    
    :last-child {
        margin-top: 5px;
        background-color: #75489f;
    }

`
export const ContentImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 60%;
    background: linear-gradient(60deg, #efc2e0, #75489f);

    @media(max-width: 800px) {
        height: 70px;
        width: 100%;
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
