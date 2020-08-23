import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    position: static;

    h1 {
        margin: 10px;
        color: #7c7582
    }

    @media(max-width: 800px) {
        justify-content: center;    
        h1 {
            display: none;
        }
    }
`

export const Items = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    
    li {        
        color: #7c7582;
        margin: 10px;
        font-size: 16px;
        cursor: pointer;

        img {
            width: 40px;
        }
    }
`

export const StyledButton = styled.button`
    width: 100px;
    height: 32px;
    background-color: #f0027f;
    border: none;
    border-radius: 4px;
    color: #fff;

    :hover {
        opacity: 0.86;
    }
`
export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;

    :hover {
        opacity: 0.7;
    }
`