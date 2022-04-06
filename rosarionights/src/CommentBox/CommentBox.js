import React from 'react';
import "./CommentBox.css";

function CommentBox() {
  return (
    <div className='comment__contenedor'>
        <div className='comment__title'>
            <h2> Comentarios y opiniones sobre el lugar..</h2>
        </div>
        <div className='comment__cont'>
           <div className='comment__input'>
                <p>USER ID</p>
                <input className='user__box' readOnly="true" disabled="true" placeholder='COMENTARIO...'></input>
            </div>
            <div className='comment__input'>
                <p>USER ID</p>
                <input className='user__box' readOnly="true" disabled="true" placeholder='COMENTARIO...'></input>
            </div>
            <div className='comment__input'>
                <p>USER ID</p>
                <input className='user__box' readOnly="true" disabled="true" placeholder='COMENTARIO...'></input>
            </div> 
            <div className='comment__input'>
                <p>USER ID</p>
                <input className='user__box' readOnly="true" disabled="true" placeholder='COMENTARIO...'></input>
            </div> 
            <div className='comment__input'>
                <p>USER ID</p>
                <input className='user__box' readOnly="true" disabled="true" placeholder='COMENTARIO...'></input>
            </div> 
            <div className='comment__input'>
                <p>USER ID</p>
                <input className='user__box' readOnly="true" disabled="true" placeholder='COMENTARIO...'></input>
            </div> 
            <div className='comment__input'>
                <p>USER ID</p>
                <input className='user__box' readOnly="true" disabled="true" placeholder='COMENTARIO...'></input>
            </div> 
            <div className='comment__input'>
                <p>USER ID</p>
                <input className='user__box' readOnly="true" disabled="true" placeholder='COMENTARIO...'></input>
            </div> 
        </div>
        <div className='comment__input-box'>
            <input className='input__box' placeholder='Ingrese un comentario..'></input>
            <button id="send" typeof='submit'>ENVIAR</button>
        </div>
    </div>
  )
}

export default CommentBox