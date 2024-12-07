import React, { Component } from "react";
import CSS from "csstype";

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

export default class ListaClientes extends Component {
  state = {
    clientes: JSON.parse(localStorage.getItem("clientes") || "[]"),
  };

  render() {
    const { clientes } = this.state;

    return (
      <div>
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

        <div className="container">
          <h5 className="center-align">Lista de Clientes</h5>
          {clientes.length === 0 ? (
            <p className="center-align">Nenhum cliente cadastrado.</p>
          ) : (
            <table className="highlight centered">
              <thead>
                <tr>
                  <th>Id_Cliente</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>RG</th>
                  <th>Data Emissão</th>
                  <th>Telefone</th>
                  <th>Data Cadastro</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente: any) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.rg}</td>
                    <td>{cliente.dataEmissao}</td>
                    <td>{cliente.telefone}</td>
                    <td>{cliente.dataCadastro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}
