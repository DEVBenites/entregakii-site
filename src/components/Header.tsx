import React from 'react';

import styled from 'styled-components';
import { colors } from '../config';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0px 100px;

    > .right {
        display: flex;
        color: ${colors.background}
    }

    div {
       
        cursor: pointer;
        padding: 10px;
        color: #ffffff;
      
        transition: 200ms;

        a{
            opacity: 0.9;
            font-family: Whitney Bold;
            &:hover{
                opacity: 1;
            }
        }

      
    }
`;


const Header = () => {
  return <Container>
      <div className="left"></div>
      <div className="right">
          <div><a>Sobre nós</a></div>
          <div><a>Contato</a></div>
          <div><a>Quero ser parceiro</a></div>
      </div>
  </Container>;
}

export default Header;