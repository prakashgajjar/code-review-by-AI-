import { useContext } from 'react'
import contextProvider from '../Hooks/ConetxtProvider'

const Upload = () => {
    const { getGeminiResponse, setInputData, inputData, setInput1Data } = useContext(contextProvider)
    return (
        <div>
            <button onClick={() => {
            }} className=' bg-transparent  border border-zinc-700 w-12 h-12 rounded-full flex justify-center items-center hover:bg-opacity-60 '>
                <img className='text-white' src="/icons/sound2.svg" alt="" srcset="" />
            </button>
        </div>
    )
}

export default Upload