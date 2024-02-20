import { getData } from "../../utils/function";
import { useRef, useState } from "react";
import "./index.css";

function Form(props) {
    const  {changeState} = props;
    const [error, setError] = useState('');
    const nameRef = useRef('');

    function validate(nameRef){
        if (nameRef.current.value.trim().length < 5){
            nameRef.current.focus();
            setError("Kamida 5 ta belgi bo'lishi kerak")
            return false;
        }else{
            setError('');
        }

        return true;
    }
    
  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate(nameRef);
    if (isValid){
        const todo = {
            name: nameRef.current.value,
            status: 'unchecked',
            id: Date.now()
        }
        let todos = getData();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        changeState(todos);
        nameRef.current.value = '';
    }


  }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <div className="field">
            <input ref={nameRef} type="text" placeholder="Enter todo" />
            {
                error && <p>{error}</p>
            }
        </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
