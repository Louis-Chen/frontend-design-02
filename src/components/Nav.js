import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.div`
    float: left;
`
const Menu = styled.div`
    float: right;
    margin-left: auto;
`

const MenuItem = styled.a`
    color: #ffffff;
    font-size: 16px;
    font-style: bold;
    padding-left:2rem;
    &:after{
        content:'${props => props.content}';
    }
`

export { Nav, Logo, Menu, MenuItem }
