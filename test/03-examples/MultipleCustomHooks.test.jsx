import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { fireEvent, render, screen } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useCounter");
jest.mock("../../src/hooks/useFetch");

describe("Pruebas en <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  const data = {
    name: "Dito",
    sprites: {
      front_default: "https://front_default.com",
      front_shiny: "https://front_shiny.com",
      back_default: "https://back_default.com",
      back_shiny: "https://back_shiny.com",
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Cargando"));
    expect(screen.getByText("Informacion de Pokemon"));
    const previousButton = screen.getByRole("button", { name: "Anterior" });
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(previousButton).toBeDefined();
    expect(nextButton).toBeDefined();
    expect(previousButton.disabled).toBeTruthy();
    expect(nextButton.disabled).toBeTruthy();
  });
  test("Debe de mostrar un Pokemon", () => {
    useFetch.mockReturnValue({
      data,
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("#1 - Dito")).toBeTruthy();
    const previousButton = screen.getByRole("button", { name: "Anterior" });
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    const imgs = screen.getAllByRole("img");
    for (const img of imgs) {
      expect(img.src).toContain("https://");
    }
    expect(previousButton).toBeDefined();
    expect(nextButton).toBeDefined();
    expect(previousButton.disabled).toBeFalsy();
    expect(nextButton.disabled).toBeFalsy();
  });
  test("Debe llamar la funcion incrementar", () => {
    useFetch.mockReturnValue({
      data,
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled()
  });
});
