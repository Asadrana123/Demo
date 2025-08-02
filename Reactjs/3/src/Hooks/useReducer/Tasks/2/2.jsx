import React, { useReducer, useState, useRef } from "react";

const initialState = []; // An array of { id, text, completed }

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);
    case 'TOGGLE':
      return state.map(item =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    default:
      return state;
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const nextId = useRef(0);

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch({
      type: "ADD",
      payload: { id: nextId.current++, text: input, completed: false }
    });
    setInput("");
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.map(todo => (
          <li
            key={todo.id}
            onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.text}
            <button
              onClick={e => {
                e.stopPropagation();
                dispatch({ type: "REMOVE", id: todo.id });
              }}
              aria-label={`Remove ${todo.text}`}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
