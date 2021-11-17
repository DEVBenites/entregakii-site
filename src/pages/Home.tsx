import React from 'react';

import styled from 'styled-components';

import BACKGROUND from '../assets/background.png'
import LOGO from '../assets/logo.svg'
import Change from '../components/Change';
import Icon from '../components/Icon';
import { colors } from '../config';

export const Container = styled.div`
    > .header {
        width: 100%;
        height: 100vh;
        background-image: url(${BACKGROUND});
        background-size: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    

        h1{
            color: #fff;
            font-size: 32px;
            text-align: center;
        }
        h2{
            color: #fff;
            font-size: 20px;
            max-width: 500px;
            text-align: center;
        }
        > .logo {
            max-width: 70vw;
            width: 900px
        }

        > .downloads {
            margin-top: 20px;
            display: flex;

            button {
           
                background-color: ${colors.background};
                border-radius: 30px;
                padding: 10px 30px 15px 20px;
                margin:  10px;
                color: ${colors.logo_color};
                cursor: pointer;

                display: flex;
                align-items: center;

                .right{
                     flex:1;
                     padding-left: 10px;
                }

                .subtitle{
                    font-size: 14px;
                    line-height: 20px;
                }
                .title{
                    font-family: Whitney Bold;
                    font-size: 20px;
                    line-height: 14px;
                }
            }
        }

    }

    .content{
    
    }

    
`;


const HomePage = () => {
  return <Container>
      <div className="header">

            <img className="logo" src={LOGO}/>
            
            <h1>
                Nunca foi tão fácil pedir <Change/>
            </h1>
            <h2>
               Não perca tempo, baixe o app e faça seu primeiro pedido agora mesmo!
            </h2>


            <div className="downloads">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=br.com.entregakii">
                <button>
                    <Icon name="android"/>
                    <div className="right">
                        <div className="subtitle">Disponível na</div>
                        <div className="title">Play Store</div>
                    </div>
                </button>
                </a>
                <a target="_blank" href="https://apps.apple.com/us/app/entregakii-app-de-delivery/id1594408952">
                <button>
                    <Icon name="apple"/>
                    <div className="right">
                        <div className="subtitle">Disponível na</div>
                        <div className="title">App Store</div>
                    </div>
                </button>
                </a>
            </div>
      </div>

      <div className="content">

      </div>
  </Container>;
}

export default HomePage;