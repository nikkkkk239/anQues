import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { blockContext } from './Helper/Context'

function App() {
  const {state,dispatch}=useContext(blockContext)
  useEffect(() => {

    if (state.memory.length === 9) {
      const removeBlocks = async () => {
        for (const m of state.memory) {
          await new Promise(resolve => setTimeout(() => {
            dispatch({ type: 'removeBlock', payload: { id: m } })
            resolve()
          }, 300))
        }
      }
      removeBlocks()
    }
  }, [state.memory, dispatch])

  const handleAdd=(id)=>{
    dispatch({type:'add',payload:{id}})
  }

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100wh',height:'100vh'}}>
      
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gridTemplateRows:'1fr 1fr 1fr'}}>
          {state.blocks.map((block,i)=>{
            return <div key={i} onClick={()=>handleAdd(block.id)} style={block.isClicked ? {cursor:'pointer',backgroundColor:'green',width:'150px',height:'150px',border:'1px solid black'}:{cursor:'pointer',width:'150px',height:'150px',border:'1px solid black'}}></div>
          })}
        </div>
    </div>
  )
}

export default App
