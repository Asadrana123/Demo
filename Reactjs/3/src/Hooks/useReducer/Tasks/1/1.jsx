import React, { useReducer } from "react";

const initialState = { name: "", email: "" };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function Example1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={e => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
        placeholder="Email"
      />
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
      <div>
        <b>Current state:</b>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </form>
  );
}
