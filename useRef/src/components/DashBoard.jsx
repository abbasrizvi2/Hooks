//                  ******  React Exercise 3


import { useRef } from "react";

let timeoutID;

function DebouncedButton({ onClick, children }) {

 let timeRef = useRef(null)

  return (
    <button onClick={() => {
      clearTimeout(timeRef.current);
      timeoutID = setTimeout(() => {
        onClick();
      }, 1000);
          console.log(children)
          timeRef.current = timeoutID
    }}>
      {children}
    </button>
  );
}



export default function Dashboard() {

  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )

}
