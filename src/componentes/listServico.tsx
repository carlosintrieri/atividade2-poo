import { Component } from "react";
import CSS from "csstype";
import "materialize-css/dist/css/materialize.min.css";

type props = {
  tema: string;
};


const backgroundColor: CSS.Properties = {
  backgroundColor: "#000",
};

const botaoStyle: CSS.Properties = {
  padding: "10px",
  fontFamily: "arial",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const fontStyle: CSS.Properties = {
  fontSize: "xx-large",
  fontFamily: "arial",
  color: "#fff",
};

class ListaServicos extends Component<any, props> {
  render() {
    return (
      <div>
        <>
          <nav>
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
          <h5 className="center-align">Lista de Serviços</h5>
          <table className="striped centered">
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Corte de Cabelo</td>
                <td>R$ 50,00</td>
              </tr>
              <tr>
                <td>Depilação</td>
                <td>R$ 40,00</td>
              </tr>
              <tr>
                <td>Maquiagem</td>
                <td>R$ 70,00</td>
              </tr>
              <tr>
                <td>Manicure e Pedicure</td>
                <td>R$ 30,00</td>
              </tr>
              <tr>
                <td>Hidratação de Cabelos</td>
                <td>R$ 60,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaServicos;
