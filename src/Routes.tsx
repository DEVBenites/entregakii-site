import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import styled from 'styled-components';
import Header from './components/Header';

import { colors } from './config';
import CookiesPage from './pages/Cookies';

import HomePage from './pages/Home';
import PrivacityPage from './pages/Privacity';
import TermsPage from './pages/Terms';

export const Container = styled.div`

    display: flex;
    overflow: hidden;
    background-color: ${colors.background};

    > .middle {
        flex: 1;
        display: flex;
        height: 100vh;
        justify-content: center;
        overflow: auto;

        /* > .content {
            width: 100%;
        } */
        > .content {
            width: 100%;
        }
        
    }
`;

const Stack = (props:any) => {


  return <BrowserRouter><Container>

        <div className="top">
            <Header/>
        </div>

        <div className="middle">
            <div className="content">
                <Switch>

                    <Route path="/" exact component={HomePage}/>
                    <Route path="/privacidade" exact component={PrivacityPage}/>
                    <Route path="/termos" exact component={TermsPage}/>
                    <Route path="/cookies" exact component={CookiesPage}/>
                
                </Switch>
            </div>
        </div>

        <div className="bottom"></div>

  </Container></BrowserRouter>;

}

export default Stack;