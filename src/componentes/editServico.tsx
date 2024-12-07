import { Component } from "react";
import CSS from "csstype";

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

export default class FormularioEdicaoServico extends Component<any, props> {
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
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="nome_servico" type="text" className="validate" />
                  <label htmlFor="nome_servico">Nome do Serviço</label>
                </div>
                <div className="input-field col s6">
                  <input id="valor_servico" type="text" className="validate" />
                  <label htmlFor="valor_servico">Valor do Serviço</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Alterar o serviço
                    <i className="material-icons right">send</i>
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
