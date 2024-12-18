import { closeSnackbar, enqueueSnackbar, SnackbarProvider } from 'notistack'
import React from 'react'

function NotistackToster() {

  const handleClick =()=>{
      enqueueSnackbar('Custom notification!', {
        variant: 'error', // 'default', 'error', 'warning', 'info'
        autoHideDuration: 1000,
        preventDuplicate: true,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        action: (key) => (
          <button onClick={() => closeSnackbar(key)} color="secondary">
            Close
          </button>
        ),
        persist: true, // Keeps the notification until dismissed
      });
  }

  return (
    <div>
        <SnackbarProvider/>
        <button onClick={handleClick}>Show snackbar</button>
    </div>
  )
}

export default NotistackToster