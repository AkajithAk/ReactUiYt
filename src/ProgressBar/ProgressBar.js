import React, { useEffect, useState } from 'react';

function ProgressBar() {
    const [progress,setProgress] = useState(0)

    useEffect(()=>{
        const clear = setInterval(()=>{
            setProgress(val=>{
                const newVal = val + 10
                return newVal > 100 ? 100 : newVal
            })
        },1000)

        return () => clearInterval(clear)
    })
    
  return (
    <div>
        <div style={{display:'flex',justifyContent:'center',margin:'30px'}}>
            <div style={{textAlign:'center'}}>
                <div style={{width:'200px',border:'2px solid'}}>
                    <div style={{height:"20px",background:'red',width:`${progress}%`,transition:'width 0.3s ease-in-out'}}></div>
                </div>
                <p>{progress}%</p>
            </div>
        </div>
    </div>
  );
}

export default ProgressBar;