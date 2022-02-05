import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(()=> {
    api('/transactions').then(({ data }) => console.log(data));
    
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th> 
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 1200.00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>

          <tr>
            <td>Alugeul</td>
            <td className="withdraw">- R$500.00</td>
            <td>Imovél</td>
            <td>30/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}