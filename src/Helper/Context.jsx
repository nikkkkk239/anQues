import { Children, createContext, memo, useReducer } from "react";

export const blockContext=createContext({})

export const BlockContextProvider=({children})=>{
    const reducer=(state,action)=>{
        switch (action.type) {
            case 'add':
                return {
                    blocks : state.blocks.map((block)=>{
                        if(block.id == action.payload.id){
                            return {
                                id:action.payload.id,
                                isClicked:true,
                            }
                        }
                        return block
                    }),
                    memory:[
                        ...state.memory,
                        action.payload.id
                    ]
                }   
            case 'removeBlock':
                
                return {
                    blocks : state.blocks.map((block,i)=>{
                        if(block.id == action.payload.id){
                            return {
                                id:action.payload.id,
                                isClicked:false,
                            }
                        }
                        return block
                    }),
                    memory : state.memory.filter((m,i)=>{
                        return m != action.payload.id
                    })
                }
        
            default:
                return state;
        }
    }

    const [state,dispatch]=useReducer(reducer,{blocks:[{id:1,isClicked:false},{id:2,isClicked:false},{id:3,isClicked:false},{id:4,isClicked:false},{id:5,isClicked:false},{id:6,isClicked:false},{id:7,isClicked:false},{id:8,isClicked:false},{id:9,isClicked:false}],memory:[]})

    return <blockContext.Provider value={{state,dispatch}}>
        {children}
    </blockContext.Provider>
}