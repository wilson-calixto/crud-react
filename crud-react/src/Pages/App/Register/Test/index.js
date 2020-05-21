import React from 'react';
import Tabela from '../../../Tabela';
import {useParams} from "react-router-dom";

export default function Test() {
   

    let { productId } = useParams();

    return (
        <>
      <h3>ID: {productId}</h3>

        <Tabela />

          
          <div>test aqui</div>
          </>

    );
}
