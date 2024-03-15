import React from 'react'
import './ResponsivPopup.css'

function SimplePopup(props) {
  return (
    <div>
        <div className='bg'>
                <div className='popup'>
                    <span className='close' onClick={()=>props.close(false)}>x</span>
                    <span className='title'>Popup</span>
                </div>
            </div>
    </div>
  )
}

export default SimplePopup