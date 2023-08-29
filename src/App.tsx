import { useState } from 'react';
import './App.css'
import axios from "axios"
import styled from 'styled-components'
function App() {

  const sendEmail = () => {
    return axios.post('http://localhost:3000/', null)
  }

  const [key, setkey] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendCustomEmail = () => {
    const EMAIL = {
      from: 'onboarding@resend.dev',
      to: 'yo@aymkh.tn',
      subject: 'Hello World',
      html: '<p>ASBA</p>'
    }
    return axios.post('http://localhost:3000/', { EMAIL, key })
  }

  return (
    <>
      {/* VERY UGLY FORM TO DISPLAY THE BASICS */}
      <input type="text" placeholder='put in your api key' value={key} onChange={(event) => setkey(event.target.value)} />
      <p>⚠️ Please note that your API key will be visible and can be traced in the network calls</p>
      <hr />

      <MiniFormLayout>
        <input type="text" placeholder='from' value={from} onChange={(event) => setFrom(event.target.value)} />
        <input type="text" placeholder='to' value={to} onChange={(event) => setTo(event.target.value)} />
        <input type="text" placeholder='subject' value={subject} onChange={(event) => setSubject(event.target.value)} />
        <input type="text" placeholder='text' value={message} onChange={(event) => setMessage(event.target.value)} />
        <button onClick={() => sendCustomEmail()}>Send this 👆️ custom email</button>
      </MiniFormLayout>


      <TemplateEmailLayout>
        <button onClick={() => sendEmail()}>Send this 👇️ template email</button>
        <img src="https://imgur.com/aGCc5zj.png" alt="code snippet" style={{ 'display': 'block' }} />
      </TemplateEmailLayout>
    </>
  )
}


export default App
const MiniFormLayout = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
const TemplateEmailLayout = styled.div`
  width: 500px;
  display: block;
  margin-top: 1rem;
`