import React, { useState } from 'react'

const App = () => {
  const [receivedData, setReceivedData] = useState(null)
  const getGeminiResponse = async () => {
    const response = await fetch('http://localhost:3000/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: 'hii',
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
    <div>
      <button onClick={getGeminiResponse}>
        Send
      </button>
      <p>{receivedData}</p>
    </div>
  )
}

export default App