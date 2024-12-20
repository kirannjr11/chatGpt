import { useState } from 'react'
import './App.css';
import chatgpt from './assets/chatgpt.png'
import plus from './assets/plus.png'
import message from './assets/message.png'
import home from './assets/home.png'
import ssaved from './assets/ssaved.png'
import upgrade from './assets/upgrade.png'



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

        <div className='divider'></div>

        <div className="lowerSide">
          <div className="Items">
            <img src={home} className="listItems"/>
            <span>Home</span>
            </div>
          <div className="Items">
            <img src={ssaved} className="listItems"/>
           <span> Saved</span>
            </div>
          <div className="Items">
            <img src={upgrade} className="listItems"/>
            <span>Upgrade</span>
            </div>
        </div>
      </div>

      <div className="main">

      </div>
    </div>
  )
}

export default App
