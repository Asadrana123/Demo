function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  function handleClick() {
    console.log('Clicked');
  }

  return <div onClick={handleClick}>Hello</div>;
}

const MyComponentFiber = {
  // 1) This Fiber is a FunctionComponent
  tag: 0,                 // FunctionComponent
  type: MyComponent,      // function reference
  key: null,

  // 2) Props
  pendingProps: {},       // props for this render
  memoizedProps: {},      // committed props (none here)

  // 3) Hooks linked list
  memoizedState: {
    // Hook #1: useState
    memoizedState: 0,     // current state
    queue: {
      pending: { action: c => c + 1, next: '[Circular]' },
      dispatch: setCount,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: 0
    },
    next: {
      // Hook #2: useEffect
      memoizedState: {
        tag: Passive,
        create: () => { console.log(count); },
        destroy: undefined,
        deps: [0]
      },
      queue: null,
      next: null
    }
  },

  // 4) Fiber-level update queue
  updateQueue: {
    baseState: 0,
    baseQueue: null,
    shared: {
      pending: { action: c => c + 1, next: '[Circular]' }
    },
    effects: null
  },

  // 5) Child tree: HostComponent <div>
  child: {
    tag: 5,               // HostComponent
    type: 'div',
    key: null,

    // ✅ HERE: handleClick lives in props
    pendingProps: {
      onClick: handleClick, // function stored here
      children: 'Hello'
    },

    memoizedProps: {
      onClick: handleClick, // committed props
      children: 'Hello'
    },

    memoizedState: null,   // HostComponent has no hooks

    child: {
      tag: 6,              // HostText for 'Hello'
      type: null,
      memoizedProps: 'Hello',
      child: null,
      sibling: null
    },

    sibling: null
  },

  sibling: null,         // no siblings for root

  // 6) Double buffering
  alternate: {},         // points to the other Fiber tree

  // 7) Real DOM link
  stateNode: null,       // null for FunctionComponent

  // 8) Effects & flags
  flags: 0,              // Placement, Update, etc.
  deletions: null
};
/*Every time you trigger a state update (setCount, setName), it goes on that specific hook’s queue.
Every time you use useEffect (or useLayoutEffect), it is registered in the Fiber’s updateQueue so React 
knows to run them after painting the UI.*/