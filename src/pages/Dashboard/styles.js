import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`    
    width: 100%;
    height: 100%;   
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(60deg, #efc2e0,#75489f);

    @media(max-width: 800px) {
        flex-direction: column-reverse;
    }
    
`

export const StyledLink = styled(Link)`
    margin-top: 20px;
    color: #75489f;

    :hover {
        color: #f0027f;
    }
`