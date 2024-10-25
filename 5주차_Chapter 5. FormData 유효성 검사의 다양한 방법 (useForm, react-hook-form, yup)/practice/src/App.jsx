import { useState, useRef } from 'react'

function App() {

  //                     ref로 DOM 조작하기
  // const inputRef = useRef(null);

  // const inputFocus = () => {
  //   inputRef.current.focus();
  // }

  // return (
  //   <>
  //     <input ref={inputRef} />
  //     <button onClick={inputFocus}>Focus</button>
  //   </>
  // )


  //                    State와 Ref의 차이

  // const ref = useRef(0);
  // const [state, setState] = useState(0);

  // const incRef = () => {
  //   ref.current += 1;
  // }
  // const incState = () => {
  //   setState(state + 1)
  // }

  // return (
  //   <>
  //     <p>Ref : {ref.current}</p>
  //     <button onClick={incRef}>Ref UP</button>
  //     <p>State : {state}</p>
  //     <button onClick={incState}>state UP</button>
  //   </>
  // )
}

export default App