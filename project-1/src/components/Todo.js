import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  // setting the state of the modal to be false at initial stage
  // useState always return an array with exactly two elements
  // modalIsOpen is the variable of the React state
  // setModalIsOpen is the function that allow you to change the variable
  // when calling this function React backend will re-execute the component function which the state belongs and update the screen
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function deleteHandler() {
    setmodalIsOpen(true);
  }

  function closeModalHandler() {
    setmodalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
      {modalIsOpen ? <Backdrop onClick={closeModalHandler} /> : null}
    </div>
  );
}
// we cannot put in eventlistener at our own components, this is because they are not built in components like button, etc. So they dont know about onClick function
// the one line modal syntax means check if modalIsOpen equal true, if yes, then show modal, else null or {modalIsOpen && <Modal/>}
// the onclick function cannot be put as deleteHandler() as it will get executed the moment the rendering occurs
// should start with capital letter to differentiate from default browser html
export default Todo;
