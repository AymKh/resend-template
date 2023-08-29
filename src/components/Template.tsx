/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import styled from 'styled-components'

export default function Template({ API_KEY }: any) {
    const sendEmail = () => {
        return axios.post('https://busy-ruby-fawn-ring.cyclic.app/template', API_KEY)
    }
    return (
        <TemplateEmailLayout>
            <button onClick={() => sendEmail()}>Send this 👇️ template email</button>
            <img src="https://imgur.com/aGCc5zj.png" alt="code snippet" style={{ 'display': 'block' }} />
        </TemplateEmailLayout>
    )
}

const TemplateEmailLayout = styled.div`
    width: 500px;
    display: block;
    margin-top: 1rem;
`