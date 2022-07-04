import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import styled from 'styled-components';

const Layout = styled.div`
    width: 100%
    height: 10%;
    display: flex;
    justify-content: space-evenly;
`;

const Logo = styled.h1`
    width: 40%;
    height: 10%;
`;

const NavList = styled.li`
    list-style: none;
    font-size: 25px;
    margin: 0 auto;
`;

const NavBar = styled.ul`
    width: 40%;
    height: 50px;
    background: yellow;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Header = () => {
    return (
        <Layout>
            <Logo>
                <Link to="/">Kunst Explorer</Link>
            </Logo>
            <NavBar>
                <NavList>
                    <Link to="/">Home</Link>
                </NavList>
                <NavList>
                    <Link to="/blocks">Blocks</Link>
                </NavList>
                <NavList>
                    <Link to="/transactions">Transactions</Link>
                </NavList>
            </NavBar>
        </Layout>
    );
};

export default Header;
