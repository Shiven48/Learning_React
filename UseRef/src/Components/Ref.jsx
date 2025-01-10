import { useRef } from "react"; 

const Ref = () => { 

    // Dosn't re-renders as the value is set  
    const InputRef1 = useRef(null)

    const FocusInput = () => {
        InputRef1.current.focus()
        InputRef1.current.style.backgroundColor = 'yellow'
    }

    return(
        <div>
            <input ref={InputRef1}/>
            <button onClick={() => FocusInput()}>Click Me 1</button>
        </div>
    );
}

export default Ref