# When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.

useRef() only returns one item. It returns an Object called current. It’s like a secret pocket of your component that React doesn’t track.

When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.

Do not write or read ref.current during rendering, except for initialization. This makes your component’s behavior unpredictable.

You can mutate the ref.current property. Unlike state, it is mutable.

--> If your component needs to store some value, but it doesn’t impact the rendering logic, choose refs.

