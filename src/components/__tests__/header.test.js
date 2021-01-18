// quando clicado no botão menu caso a pessoa esteja autorizado verificar se aparceu na tela o botão Perfil, Novo Registro, Ver Carrinho
// quando clicado no botão menu caso a pessoa não esteja autorizado verificar se tem botão Entrar, Registre-se

import Header from "../header";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("When the user is authenticate", () => {
  test("Should when clicked in button", async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    userEvent.click(screen.getByRole("button"));
  });
});
