import { ChatContext } from '../../context/chat'
import React, { useContext, useState, useEffect } from "react";
import { db, chatDb } from '../../data/data'
import './chat.css'


export default function Chat () {
  const { chatState, chatDispatch } = useContext(ChatContext)
  const [texts, setTexts] = useState(chatDb[chatState.chat_id] || null)
  const [input, setInput] = useState('')
  const getCurrentGoat = () => {
    for (const goat of db) {
      if (goat.id === chatState.chat_id) return goat
    }
    return null
  }
  const goat = getCurrentGoat()
  
  useEffect(() => {
    console.log(texts)
  }, [texts])
  return (
    <>
    <p className='greeting'> You and {goat.name} have matched! </p>
    {texts && (
      texts.map((text) => {
        return (
          <div className={`textContainer_${text.sender}`}>
            {text.sender === 'Goat' &&
              <img className='chatProfilePic' src={goat.url} />
            }
            <p className={`${text.sender}_text`} >{text.message}</p>
          </div>
        )
      })
    )}
    <form className='chat_input'>
      <input 
      className='chat_inputField'
      placeholder="Type a message..."
      type='text'
      value={input}
      onChange={ (e) => setInput(e.target.value)}
      />
      <button 
      type='submit'
      onClick={(e) => {
        e.preventDefault()
        setTexts([...texts, 
          { 
            sender: 'Human',
            message: input }
        ])}

      } 
      >
        Send
      </button>
    </form>
    </>
  )
}