import React, { Fragment } from 'react'
import Button from '../Button'
import ReactDOM from 'react-dom'
import Card from '../UI/Card'
import Styles from './Modal.module.css'
const BackDrop=props=>{
  return(<div className={Styles.overlay} onClick={props.closeModal}></div>)

}
const ModalDrop=props=>{
  return(   <div className={Styles.modal}>
        <header>{props.title}</header>
        <div>
            <p>{props.msg}</p>
        </div>
        <footer><Button type='submit' onClick={props.closeModal}>Close</Button></footer>
        </div>);
}

const Modal=({title,msg,closeModal})=> {
  return (
   <Fragment>
    {ReactDOM.createPortal(<BackDrop closeModal={closeModal}/>,document.getElementById("backdrop"))}
    {ReactDOM.createPortal(<ModalDrop tite={title} msg={msg} closeModal={closeModal}/>,document.getElementById("modaldrop"))}
              
 
   </Fragment>

  )
}

export default Modal