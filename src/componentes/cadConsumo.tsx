import { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
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


export default class FormularioCadastroServico extends Component<any, props> {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      M.FormSelect.init(elems);
    });
  }
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
          <h4 className="center-align">Cadastrar Pedidos</h4>
          <form className="col s12 formCli">
            <div className="row">
              <div className="input-field col s12 opcoes">
                <select>
                  <option value="0">Selecione o Cliente</option>
                </select>
              </div>

              <div className="input-field col s12 opcoes">
                <select>
                  <option value="1">Selecione o Serviço</option>
                </select>
              </div>

              <div className="input-field col s12 opcoes">
                <select>
                  <option value="2">Selecione o Produto</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button
                  style={botaoStyle} // Aplica o estilo do botão
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
    );
  }
}
