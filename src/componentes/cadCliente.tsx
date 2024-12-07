import { Component } from "react";
import CSS from "csstype";

type Cliente = {
  id: string;
  nome: string;
  cpf: string;
  rg: string;
  dataEmissao: string;
  telefone: string;
  dataCadastro: string;
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

export default class CadastroCliente extends Component {
  state = {
    nome: "",
    cpf: "",
    rg: "",
    dataEmissao: "",
    telefone: "",
    dataCadastro: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, cpf, rg, dataEmissao, telefone, dataCadastro } = this.state;

    const clienteNovo = {
      id: String(Date.now()), // Gerar ID único baseado no timestamp
      nome,
      cpf,
      rg,
      dataEmissao,
      telefone,
      dataCadastro,
    };

    const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    clientes.push(clienteNovo);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    this.setState({
      nome: "",
      cpf: "",
      rg: "",
      dataEmissao: "",
      telefone: "",
      dataCadastro: "",
    });

    alert("Cliente cadastrado com sucesso!");
  };

  render() {
    const { nome, cpf, rg, dataEmissao, telefone, dataCadastro } = this.state;

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
          <h5 className="center-align">Cadastro de Cliente</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>CPF:</label>
              <input
                type="text"
                name="cpf"
                value={cpf}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>RG:</label>
              <input
                type="text"
                name="rg"
                value={rg}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Data Emissão:</label>
              <input
                type="date"
                name="dataEmissao"
                value={dataEmissao}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Telefone:</label>
              <input
                type="text"
                name="telefone"
                value={telefone}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label>Data Cadastro:</label>
              <input
                type="date"
                name="dataCadastro"
                value={dataCadastro}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" style={botaoStyle}>
              Registrar Cliente
            </button>
          </form>
        </div>
      </div>
    );
  }
}
