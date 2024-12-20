import { useState } from 'react'
import './App.css';
import chatgpt from './assets/chatgpt.png'
import plus from './assets/plus.png'
import message from './assets/message.png'


function App() {

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperside">
          <div className="uppsersideTop">
            <img src={chatgpt} alt="image" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midbtn">
            <img src={plus} alt='' className='addBtn' />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="msgbtn">
              <img src={message} alt='' className='addBtn' />
              What is programming?
            </button>
            <button className="msgbtn">
              <img src={message} alt='' className='addBtn' />
              Learn new skills
            </button>

          </div>
        </div>

        <div className="lowerSide">

        </div>
      </div>

      <div className="main">

      </div>
    </div>
  )
}

export default App
