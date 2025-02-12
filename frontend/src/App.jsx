import React, { useState } from 'react'
import contextProvider from './Hooks/ConetxtProvider'
import SearchBar from './components/SerchBar'
import DisplayText from './components/DisplayText'
import MainDisplay from './components/MainDisplay'

const App = () => {
  const [receivedData, setReceivedData] = useState(null)
  const [inputData , setInputData] = useState(null)
  const [show, setShow] = useState(null);
  const getGeminiResponse = async () => {
    const response = await fetch('http://localhost:3000/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: inputData,
        id: 1,
      }),
      credentials: 'include'
    })
    const data = await response.text()
    console.log(data);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    setReceivedData(data);
  }

  return (

    <contextProvider.Provider value={{ getGeminiResponse, setReceivedData, receivedData , setInputData ,inputData , setShow , show }}>
      <div className=''>
           <MainDisplay/>
      </div>
    </contextProvider.Provider>

  )
}

export default App