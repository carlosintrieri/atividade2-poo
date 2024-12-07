import { Component } from "react";
import CSS from "csstype";
import "materialize-css/dist/css/materialize.min.css";

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

class ListaProduto extends Component {
  state = {
    produtos: [
      { nomeProduto: "Creme Hidratante", preco: "R$ 35,00" },
      { nomeProduto: "Máscara Facial", preco: "R$ 45,00" },
      { nomeProduto: "Shampoo Revitalizante", preco: "R$ 25,00" },
      { nomeProduto: "Condicionador Nutritivo", preco: "R$ 28,00" },
      { nomeProduto: "Óleo Corporal", preco: "R$ 60,00" },
      { nomeProduto: "Loção Tônica", preco: "R$ 30,00" },
      { nomeProduto: "Protetor Solar", preco: "R$ 50,00" },
      { nomeProduto: "Bálsamo Labial", preco: "R$ 15,00" },
    ],
  };

  render() {
    return (
      <div>
        <nav>
          <div style={backgroundColor} className="nav-wrapper">
            <a className="brand-logo right" style={fontStyle}>
              World Beauty
            </a>
            <a style={botaoStyle} href="/cadServico">Cadastros</a>
            <a style={botaoStyle} href="/listaCliente">Cliente</a>
            <a style={botaoStyle} href="/listaProduto">Produto</a>
            <a style={botaoStyle} href="/listaPedidos">Consumo</a>
            <a style={botaoStyle} href="/listaServicos">Serviços</a>
            <a style={botaoStyle} href="/Listagens">Listagens</a>
          </div>
        </nav>
        <br />
        <div className="container">
          <h5 className="center-align">Lista de Produtos</h5>
          <table className="striped centered">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.nomeProduto}</td>
                  <td>{produto.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaProduto;
