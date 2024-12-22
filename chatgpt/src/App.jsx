import { useState } from 'react'
import './App.css';
import chatgpt from './assets/chatgpt.png'
import plus from './assets/plus.png'
import message from './assets/message.png'
import home from './assets/home.png'
import ssaved from './assets/ssaved.png'
import upgrade from './assets/upgrade.png'
import send from './assets/send.png'




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
            <img src={home} className="listItems" />
            <span>Home</span>
          </div>
          <div className="Items">
            <img src={ssaved} className="listItems" />
            <span> Saved</span>
          </div>
          <div className="Items">
            <img src={upgrade} className="listItems" />
            <span>Upgrade</span>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={chatgpt} className="logo" />
            <p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur non repellat quisquam autem fugiat quia magni laudantium nulla. Unde, hic?</p>
          </div>

          <div className="chat">
            <img src={chatgpt} className="logo" />
            <p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur non repellat quisquam autem fugiat quia magni laudantium nulla. Unde, hic?</p>
          </div>

        </div>

        <div className="chatFooter">
          <div className="inp">
            <input type='text' placeholder='write a querries' />
            <button className="send"><img src={send} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
