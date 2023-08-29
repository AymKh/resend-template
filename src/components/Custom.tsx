/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import styled from 'styled-components'
import { useState } from 'react';

export default function Custom({ API_KEY }: any) {

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
        return axios.post('https://busy-ruby-fawn-ring.cyclic.app/custom', { EMAIL, API_KEY })
    }
    return (
        <MiniFormLayout>
            <input type="text" placeholder='from' value={from} onChange={(event) => setFrom(event.target.value)} />
            <input type="text" placeholder='to' value={to} onChange={(event) => setTo(event.target.value)} />
            <input type="text" placeholder='subject' value={subject} onChange={(event) => setSubject(event.target.value)} />
            <input type="text" placeholder='text' value={message} onChange={(event) => setMessage(event.target.value)} />
            <button onClick={() => sendCustomEmail()}>Send this 👆️ custom email</button>
        </MiniFormLayout>
    )
}

const MiniFormLayout = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
