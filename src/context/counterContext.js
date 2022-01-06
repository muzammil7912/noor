import React from "react";

export const CounterContext = React.createContext();

function CounterContextProvider(props) {
  const [count, setCount] = React.useState(0);
  return (
    <CounterContext.Provider value={{ countValue: [count, setCount] }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
