import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import { addTodo } from "./redux/actions";

function App({ store }) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)}
        <button onClick={click}>추가</button>
      </header>
    </div>
  );

  function click() {
    store.dispatch(addTodo("todo"));
  }
}

export default App;
