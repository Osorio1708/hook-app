import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  test("Debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
  test("Debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => {
      increment();
      increment(50);
    });
    expect(result.current.counter).toBe(61);
  });
  test("Debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(50);
    });
    expect(result.current.counter).toBe(49);
  });
  test("Debe reiniciar el contador al valor establecido", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment(50);
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
