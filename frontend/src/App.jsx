import React, { useState } from 'react'
import contextProvider from './Hooks/ConetxtProvider'
import SearchBar from './components/SerchBar'
import DisplayText from './components/DisplayText'
import MainDisplay from './components/MainDisplay'

const App = () => {
  const [receivedData, setReceivedData] = useState(null) //server to user data come
  const [inputData , setInputData] = useState("") //input from user and send to server
  const [input1Data , setInput1Data] = useState(null) // this for input message show on display like we send hii show hii
  const [show, setShow] = useState(null); // same for display
  const [selectedModel , setSelectedModel] =  useState('Novio Genisis') // models select
  const[fileInputShow , setFileInputShow] = useState(false) // file input show on display 
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

    <contextProvider.Provider value={{ getGeminiResponse, setReceivedData, receivedData , setInputData ,inputData , setShow , show, setInput1Data ,input1Data , setSelectedModel , selectedModel , fileInputShow , setFileInputShow}}>
      <div className=''>
           <MainDisplay/>
      </div>
    </contextProvider.Provider>

  )
}
export default App