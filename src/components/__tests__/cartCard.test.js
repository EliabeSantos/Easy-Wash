import { render, screen } from "@testing-library/react";
import CartCard from "../cartCard";
describe("when everyting is ok", () => {
  test("should show title data when card is called", () => {
    render(<CartCard title={"20 pecas de algodao"} value={"R$ 30,00"} />);
    const fromScreen = screen.getByText("20 pecas de algodao");
    // expect(fromScreen).toBeInTheDocument;
  });
  test("should show value data when card is called", () => {
    render(<CartCard title={"20 pecas de algodao"} value={"R$ 30,00"} />);
    const fromScreen = screen.getByText("R$ 30,00");
    // expect(fromScreen).toBeInTheDocument;
  });
});
