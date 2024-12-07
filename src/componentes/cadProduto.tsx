import React, { Component } from "react";
import CSS from "csstype";

// Estilos para a página
const backgroundColor: CSS.Properties = {
  backgroundColor: "#000000", // Preto
};

const botaoStyle: CSS.Properties = {
  padding: "12px 20px",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#333333",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const fontStyle: CSS.Properties = {
  fontSize: "xx-large",
  fontFamily: "Arial, sans-serif",
  color: "#FFFFFF",
};

// Componente de Cadastro de Produtos
class CadProduto extends Component {
  state = {
    nomeProduto: "",
    preco: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nomeProduto, preco } = this.state;

    // Cria um novo produto
    const newProduct = { nomeProduto, preco };

    // Recupera os produtos existentes no localStorage ou cria um novo array
    const storedProducts = JSON.parse(localStorage.getItem("produtos") || "[]");

    // Adiciona o novo produto à lista
    storedProducts.push(newProduct);

    // Armazena a lista de produtos atualizada no localStorage
    localStorage.setItem("produtos", JSON.stringify(storedProducts));

    // Exibe o produto registrado no console
    console.log("Produto registrado:", { nomeProduto, preco });

    // Limpa o formulário
    this.setState({ nomeProduto: "", preco: "" });
  };

  render() {
    return (
      <div>
        <nav>
          <div style={backgroundColor} className="nav-wrapper">
            <a className="brand-logo center" style={fontStyle}>
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
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="nome_produto"
                    type="text"
                    name="nomeProduto"
                    value={this.state.nomeProduto}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <label htmlFor="nome_produto">Nome</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="preco"
                    type="text"
                    name="preco"
                    value={this.state.preco}
                    onChange={this.handleChange}
                    className="validate"
                  />
                  <label htmlFor="preco">Preço</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button
                    style={botaoStyle}
                    type="submit"
                    name="action"
                  >
                    Registrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CadProduto;
