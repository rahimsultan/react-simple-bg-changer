import { useState } from "react"

function App() {
 const [color, setColor]=useState('olive')

  return (
    <>
     <div className="w-full h-screen duration-200 px-4" style={{backgroundColor:color}}>
      <div className="fixed bottom-14 px-2 inset-x-0 flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor('black')} className="font-semibold text-white px-3 py-2 rounded-full" style={{backgroundColor:"black"}}>Black</button>

            <button onClick={()=>setColor('red')} className="font-semibold text-white px-3 py-2 rounded-full" style={{backgroundColor:"red"}}>Red</button>

            <button onClick={()=>setColor('green')} className="font-semibold text-white px-3 py-2 rounded-full" style={{backgroundColor:"green"}}>Green</button>

            <button onClick={()=>setColor('blue')} className="font-semibold  text-white px-3 py-2 rounded-full" style={{backgroundColor:"blue"}}>Blue</button>

            <button onClick={()=>setColor('orange')} className="font-semibold  text-white px-3 py-2 rounded-full" style={{backgroundColor:"orange"}}>Orange</button>

            <button onClick={()=>setColor('purple')} className="font-semibold text-white px-3 py-2 rounded-full" style={{backgroundColor:"purple"}}>Purple</button>
            

        </div>
      </div>
     </div>
    </>
  )
}

export default App
