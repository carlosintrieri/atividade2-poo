import { Component } from "react";
import CSS from "csstype";
import "materialize-css/dist/css/materialize.min.css";

type props = {
  tema: string;
};

const backgroundColor: CSS.Properties = {
  backgroundColor: "#000", // Fundo preto
};

const botaoStyle: CSS.Properties = {
  padding: "10px",
  fontFamily: "arial",
  backgroundColor: "#000", // Fundo do botão preto
  color: "#fff", // Texto do botão branco
  border: "none", // Remove bordas
  cursor: "pointer", // Alterar cursor para indicar que é clicável
};

const fontStyle: CSS.Properties = {
  fontSize: "xx-large",
  fontFamily: "arial",
  color: "#fff", // Texto branco
};

class ListaConsumos extends Component<any, props> {
  render() {
    return (
      <div>
        <>
          <nav className="">
            <div style={backgroundColor} className="nav-wrapper">
              <a className="brand-logo right" style={fontStyle}>
                World Beauty
              </a>

              <a style={botaoStyle} href="/cadServico">
                Cadastros
              </a>
              <a style={botaoStyle} href="/listaCliente">
                Cliente
              </a>
              <a style={botaoStyle} href="/listaProduto">
                Produto
              </a>
              <a style={botaoStyle} href="/listaPedidos">
                Consumo
              </a>
              <a style={botaoStyle} href="/listaServicos">
                Serviços
              </a>
              <a style={botaoStyle} href="/Listagens">
                Listagens
              </a>
            </div>
          </nav>
        </>
        <br />
        <div className="container">
          <h5 className="center-align">Lista de Consumo</h5>

          <table className="striped centered">
            <thead>
              <tr>
                <th>Consumo</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shampoo + Condicionador</td>
                <td>R$ 30,00</td>
              </tr>
              <tr>
                <td>Escova + Hidratação</td>
                <td>R$ 45,00</td>
              </tr>
              <tr>
                <td>Manicure Completa</td>
                <td>R$ 25,00</td>
              </tr>
              <tr>
                <td>Depilação Completa</td>
                <td>R$ 80,00</td>
              </tr>
              <tr>
                <td>Maquiagem Profissional</td>
                <td>R$ 90,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaConsumos;
