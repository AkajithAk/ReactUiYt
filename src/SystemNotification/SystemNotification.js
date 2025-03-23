import React from 'react'
import Logo from './logo.png'
function SystemNotification() {

    const handleSend =()=>{
        if(!("Notification" in window)){
            alert("Not Support")
            return
        }

        Notification.requestPermission().then(permisstion=>{
            if(permisstion == "granted"){
                const notification = new Notification("Hello",{
                    body:"This test notification",
                    icon:Logo
                }) 

                notification.onclick =()=>{
                    window.open("https://www.fitmistudios.com/","_blank")
                }
            }
        })
    }
   
    
  return (
    <div>
       <button onClick={handleSend}>Send Notification</button>
    </div>
  )
}

export default SystemNotification