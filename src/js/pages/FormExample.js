import React from "react";

export default class FormExample extends React.Component {
  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <div class="row">
          <div class="col-lg-6">
            <form>
              <div class="form-group">
                <label htmlFor="inputName">Nome</label>
                <input type="text" class="form-control" id="inputName" placeholder="Digite seu nome" />
              </div>
              <div class="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu email" />
              </div>
              <div class="form-group">
                <label htmlFor="inputPhone">Telefone</label>
                <input type="text" class="form-control" id="inputPhone" placeholder="(__) _ ____-____" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}