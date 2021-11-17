import React from 'react';

import styled from 'styled-components';

import BACKGROUND from '../assets/background.png'
import LOGO from '../assets/logo.svg'
import { colors } from '../config';

export const Container = styled.div`
   
  display: flex;
  align-items: center;
  justify-content: center;

   h1{
     font-family: Whitney Bold;
     font-size: 18px;
     margin: 10px 0px;
     color: ${colors.logo_color}
   }

   h2{
     font-family: Whitney Bold;
     font-size: 16px;
     font-style: italic;
     color: ${colors.title};
     display: inline-block;
     margin-right: 5px;
   }


   a{
      color: ${colors.logo_color}
   }

   p {
    font-family: Whitney;
     font-size: 16px;
     color: ${colors.subtitle};
     margin: 5px 0;
   }

   .title {
    font-family: Whitney Bold;
     font-size: 24px;
     text-align: center;
     margin: 10px 0px;
     color: ${colors.logo_color}
   }
   .subtitle {
    font-family: Whitney;
     font-size: 16px;
     text-align: center;
     margin: 10px 0px;
     color: ${colors.subtitle}
   }

   > .content {
      max-width: 600px;
   }
    
`;


const CookiesPage = () => {
  return <Container>
      
      <div className="content">

<div className="title">USO DE COOKIES</div>
<div className="subtitle">Atualizada em 15 de novembro de 2021</div>

<h1>INFORMAÇÕES GERAIS</h1>
<p>
Na Delivery Much temos o compromisso de proporcionar uma experiência cada vez melhor aos nossos clientes ("Usuários"). Para exercer este compromisso, utilizamos Cookies e tecnologias similares para customizar a sua experiência no site e aplicativo Delivery Much ("Plataforma"), bem como para gerar informações relevantes sobre o uso dos nosso serviços por parte dos Usuários.
</p>
<h1>1. O QUE SÃO COOKIES?</h1>
<p>Cookies são pequenos arquivos de texto armazenados em seu navegador ou dispositivo móvel que permitem o reconhecimento e a lembrança das suas preferências de navegação.
</p>
<h1>2. POR QUE UTILIZAMOS COOKIES?
Utilizamos Cookies para:</h1>

<p>Personalizar a sua experiência na Plataforma;
Avaliar e aperfeiçoar nossas publicidades e comunicações;
Fornecer aos nossos prestadores de serviços;
Fornecemos seus cookies aos prestadores de serviços para que eles possam direcionar nossas publicidades em outros websites e aplicativos, tais como: Facebook e Google Analytics.
</p>

<h1>3. QUAIS COOKIES SÃO UTILIZADOS?</h1>
Cookies necessários: São os cookies que precisamos coletar para que nossas plataformas possam funcionar corretamente, eles são obrigatórios e não podem ser desativados.
Cookies de análise: São utilizados para melhorar o conteúdo das nossas plataformas, sua experiência e prestação dos nosso serviços.
Cookies de funcionalidade: São utilizados para reconhecer as suas preferências e customizar seu acesso às plataformas.
Cookies de publicidade: São utilizados para fornecer publicidades do seu interesse e por um período limitado de vezes.
<h1>4. COMO OS COOKIES SÃO UTILIZADOS?</h1>
<p><h2>Login</h2> Ao utilizar nosso aplicativo cookies de login são armazenados, os cookies de login, servem para manter o usuario conectado por mais tempo, evitando assim que o mesmo precise fazer login toda vez que entrar no app.</p>
<p><h2>Endereço</h2> Os endereços salvos no app ficam armazenados em nossos servidores, porém, os endereços selecionados ficam armazendados no dispositivo, assim mesmo desconectando o endereço ficará salvo.</p>
<h1>5. COMO ELIMINAR OS COOKIES?</h1>
<p>Você poderá bloquear ou deletar os cookies se as configurações de seu navegador ou dispositivo permitir. Contudo, se você recusar ou bloquear os cookies ou tecnologias similares algumas funções das plataformas Delivery Much poderão não funcionar perfeitamente.</p>
</div></Container>;
}

export default CookiesPage;