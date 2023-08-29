import { useState } from 'react';
import './App.css'
import Custom from './components/Custom';
import Template from './components/Template';

function App() {
  const [key, setkey] = useState('');

  return (
    <>
      <input type="text" placeholder='put in your api key' value={key} onChange={(event) => setkey(event.target.value)} />
      <p>⚠️ Please note that your API key will be visible and can be traced in the network calls</p>
      <hr />
      <Custom key={key} />
      <hr />
      <Template key={key} />
    </>
  )
}


export default App