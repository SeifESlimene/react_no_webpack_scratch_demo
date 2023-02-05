import React from "react";
import { hot } from "react-hot-loader/root";
import { MyJSComponent } from "./components/MyJSComponent";
import { Counter } from "./components/Counter";

export function _App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <MyJSComponent />
      <Counter />
    </div>
  );
}

export const App = hot(_App);
