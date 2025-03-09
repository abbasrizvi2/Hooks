# useRef() only returns one item. It returns an Object called current.

When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.

Do not write or read ref.current during rendering, except for initialization. This makes your component’s behavior unpredictable.

You can mutate the ref.current property. Unlike state, it is mutable.

--> If your component needs to store some value, but it doesn’t impact the rendering logic, choose refs.