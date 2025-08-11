const questionsList = [
  {
    question: "What is the primary purpose of React?",
    options: [
      "To manipulate the DOM directly",
      "To build user interfaces",
      "To handle backend services",
      "To style web pages"
    ],
    answer: "To build user interfaces"
  },
  {
    question: "Which method in a React class component is called after the component is first rendered?",
    options: [
      "componentDidMount",
      "componentWillUnmount",
      "shouldComponentUpdate",
      "render"
    ],
    answer: "componentDidMount"
  },
  {
    question: "What hook would you use to manage state in a functional component?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useReducer"
    ],
    answer: "useState"
  },
  {
    question: "How do you pass data from a parent component to a child component in React?",
    options: [
      "Using state",
      "Using props",
      "Using refs",
      "Using context API"
    ],
    answer: "Using props"
  },
  {
    question: "What is the purpose of the virtual DOM in React?",
    options: [
      "To increase the actual DOM size",
      "To optimize rendering performance",
      "To store application state",
      "To handle server-side rendering"
    ],
    answer: "To optimize rendering performance"
  },
  {
    question: "Which React hook is used to perform side effects in functional components?",
    options: [
      "useState",
      "useEffect",
      "useCallback",
      "useMemo"
    ],
    answer: "useEffect"
  },
  {
    question: "What is JSX in React?",
    options: [
      "A CSS preprocessor",
      "A JavaScript syntax extension",
      "A database query language",
      "A state management tool"
    ],
    answer: "A JavaScript syntax extension"
  },
  {
    question: "How do you conditionally render components in React?",
    options: [
      "Using if-else in render method or ternary operators in JSX",
      "Using loops inside JSX",
      "Directly manipulating the DOM",
      "Using context API"
    ],
    answer: "Using if-else in render method or ternary operators in JSX"
  },
  {
    question: "Which is the correct way to update state based on previous state in React?",
    options: [
      "setState(newState)",
      "setState(prevState => newState)",
      "Direct assignment to state variable",
      "Using forceUpdate()"
    ],
    answer: "setState(prevState => newState)"
  },
  {
    question: "What is the purpose of keys in React lists?",
    options: [
      "To uniquely identify elements for efficient update",
      "To style the list items",
      "To bind event handlers",
      "To access DOM nodes directly"
    ],
    answer: "To uniquely identify elements for efficient update"
  }
];

export default questionsList;
