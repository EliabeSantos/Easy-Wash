import {render,screen} from "@testing-library/react";
import DefaultButton from "../sharedButton";

describe("Quando tiver tudo ok",()=>{
  test("Verificando se componente botão esta sendo feito",()=>{
      render(<DefaultButton name="diego"></DefaultButton>);
      const Button = screen.getByRole('button', {name: /diego/i});
      expect(Button).toBeInTheDocument;
  });
});