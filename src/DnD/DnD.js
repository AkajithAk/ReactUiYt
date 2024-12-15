import React, { useState } from 'react'
import './DnD.css'
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function DnD() {
  const [names,setNames] = useState(['One','Two','Three','Four'])

  const moveName=(from,to)=>{
    const updatedValue = [...names]
    const [val] = updatedValue.splice(from,1)
    updatedValue.splice(to,0,val)
    setNames(updatedValue)
  }

  const Name = ({name,index})=>{
    const [,ref] = useDrag({
      type:'Drag',
      item:{index}
    })

    const [,drop] = useDrop({
      accept:'Drag',
      hover:(dragItem)=>{
        if(dragItem.index !== index){
            moveName(dragItem.index , index)
            dragItem.index = index
        }
      }
    })
    return(
      <div ref={(node)=>ref(drop(node))} className='name-item'>
        {name}
      </div>
    )
  }

  console.log(names,"names")

    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <div className='name-list'>
            {
              names.map((data,i)=>(
                <Name key={i} name={data} index={i} />
              ))
            }
          </div>
        </DndProvider>
      </div>
    );
  }

export default DnD