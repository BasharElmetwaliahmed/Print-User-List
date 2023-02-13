import React, { useState,Fragment, useRef } from 'react'
import Card from './UI/Card'
import styles from './AddUser.module.css'
import Button from './Button'
import Modal from './Modal/Modal'
const AddUser=({setUserHandler})=> {
   const refName=useRef();
   const refAge=useRef();
  const [modalContent,setModal]=useState();

    const SubmitHandler=(e)=>{
        e.preventDefault();
        const nameHandler=refName.current.value;
        const ageHandler=refAge.current.value;
        
      if(nameHandler.trim().length==0 || ageHandler.trim().length==0){
        setModal({title:"Empty input",msg:"You must input value"});
        return
      }
      if(ageHandler<0){
                setModal({title:"Negative Age",msg:"You must input valid Age (age>0)"});

        return;
      }
      setUserHandler(nameHandler ,ageHandler);
    }
    const closeModal=()=>{
      setModal(null);

    }

  return (
   <Fragment>
    {modalContent &&<Modal title={modalContent.title} msg={modalContent.msg} closeModal={closeModal}></Modal>}
        <Card className={styles.form}> 
        <form onSubmit={SubmitHandler}>
        <div className='input'>
            <label htmlFor='user'>User Name</label>
            <input id='user'  ref={refName} type="text" />
        </div>
        <div className='input'>
            <label htmlFor='user'>Age</label>
            <input id='user'  type="number" ref={refAge} />
        </div>        
        <Button type="submit">Submit</Button>
      
        </form>

    </Card>
   </Fragment>
  )
}

export default AddUser