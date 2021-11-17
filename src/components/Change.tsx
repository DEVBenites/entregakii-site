import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { colors } from '../config';

export const Container = styled.div`

    display: inline-block;

    .content {
        height: 40px;
        transform: translateY(5px);
        display: inline-block;
        overflow: hidden;
    }
    .list{
        display: flex;
        flex-direction: column;
        transition: 200ms;
        
        -webkit-transition: width 1s ease-in-out;
        -moz-transition: width 1s ease-in-out;
        -o-transition: width 1s ease-in-out;

        &.animation{
            animation: next 1000ms;
        }
    
     
        .item {
            height:40px;
            display: flex;
        }
    }

    @keyframes next {
        0%{
            transform: translateY(-40px);
        }
        100%{
            transform: translateY(0px);
        }
     
    }
`;

function getTextWidth(text:string, font:any) {
    // re-use canvas object for better performance
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if(!context)
        return;

    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

const Change = () => {

    const [previous,setPrevious] = useState<string>();
    const [current,setCurrent] = useState<string>();

    const listRef = useRef<HTMLDivElement>(null);

    const list = [
        "Comida Japonesa",
        "Pizza",
        "Mercado",
        "Bebidas",
        "Lanche",
        "Mercado",
        "Remédios",
        "Pet Shop",
        "Roupas",
        "Remédios",
        "Bebidas",
        "Mercado",
        "Pizza",
    ]

    const shortText = () => {
      
            const max =  list.length-2;
            const i = Math.round(Math.random()*max);
            const next = list[i];
            setPrevious(current)
            setCurrent(next)

            if(!current)
                return;

            if(listRef.current)
                listRef.current.innerHTML = `
                    <div class="list animation" >
                        <div class="item">${current}</div>
                        <div class="item">${previous}</div>
                    </div>
                `
            setTimeout(() => {
                if(listRef.current)
                    listRef.current.innerHTML = `
                    <div class="list" >
                        <div class="item">${current}</div>
                      
                    </div>
                `
            },1000)
    }

    useEffect(() => {
          const timer = setTimeout(() => {
            shortText();
        }, 5000)
        return () => clearTimeout(timer)
    })

    useEffect(() => {
        shortText();
    },[listRef])

  return <Container>
    <div className="content">
        <div ref={listRef}>
        </div>
    </div>
  </Container>;
}

export default Change;