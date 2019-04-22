import styled from 'styled-components'

const Nav = styled.div`
    position: fixed;
    box-sizing: border-box;
    z-index: 2000;
    text-align: center;
    width: 100%;
    top:20px;
    padding-left: 50px;
    padding-right: 50px;
`

const Logo = styled.div`
    float: left;
`
const Menu = styled.div`
    float: right;
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
