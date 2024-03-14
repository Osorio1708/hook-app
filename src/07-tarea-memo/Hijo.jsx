import React from "react";
export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("Me volvi a generar :(");
  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
