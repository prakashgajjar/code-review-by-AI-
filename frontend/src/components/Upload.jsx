import { useContext, useState } from 'react'
import contextProvider from '../Hooks/ConetxtProvider'

const Upload = () => {
    const { getGeminiResponse, setInputData, inputData, setInput1Data, fileInputShow, setFileInputShow } = useContext(contextProvider)
    const [selectedFile, setSelectedFile] = useState(null);

    const sendFile = async () => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch('http://localhost:3000/file', {
            method: 'POST',
            body:formData,
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
    return (
        <div>
                <div className={`bg-white bg-opacity-5 rounded-[28px] w-52 h-20 absolute -left-4 -top-[200px]  ${fileInputShow ? "block" : "hidden"}`}>
                    <label className="relative top-7 left-2 w-32 cursor-pointer bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-zinc-700">
                        Choose File
                        <input
                           onChange={(e) => setSelectedFile(e.target.files[0])}
                           type="file"
                           name='image'
                          
                            className="absolute -top-8 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </label>
                    <button onClick={sendFile} className='border border-white  py-1 px-3 rounded-lg absolute right-2 top-5 text-white border-opacity-25' type="button">send</button>
                </div>
            <button onClick={() => {
                setFileInputShow(!fileInputShow);
            }} className=' bg-transparent  border border-zinc-700 w-12 h-12 rounded-full flex justify-center items-center hover:bg-opacity-60 '>
                <svg className='opacity-65' width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50" y1="25" x2="50" y2="75" stroke="white" stroke-width="4" stroke-linecap="round" />
                    <line x1="25" y1="50" x2="75" y2="50" stroke="white" stroke-width="4" stroke-linecap="round" />
                </svg>

            </button>
        </div>
    )
}

export default Upload