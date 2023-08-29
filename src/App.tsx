import { useState } from 'react';
import './App.css'
import Custom from './components/Custom';
import Template from './components/Template';

function App() {
  const [API_KEY, setAPI_KEY] = useState('');

  return (
    <>
      <input type="text" placeholder='put in your api key' value={API_KEY} onChange={(event) => setAPI_KEY(event.target.value)} />
      <p>⚠️ Please note that your API key will be visible and can be traced in the network calls</p>
      <hr />
      <Custom API_KEY={API_KEY} />
      <hr />
      <Template API_KEY={API_KEY} />
    </>
  )
}


export default App