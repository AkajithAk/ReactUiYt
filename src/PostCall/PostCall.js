import React from "react";

function PostCall(){
    // http://localhost:2000/login
    const handleSubmit = (e) =>{
        e.preventDefault()
        // if(e.target.userName.value =="abc" && e.target.password.value == "12345" ){
            console.log("sdfsdfsd")
           const data={
                    
                }
            // fetch("http://localhost:2000/login",{
            //     method:"POST",
            //     headers: {
            //         'Content-Type': 'application/json',
            //       },
            //     // headers: {
            //     //   "content-type": "application/json",
            //     // //   "cache-control": "no-cache",
            //     // //   "postman-token": "97ae496c-6c6f-da3b-6f67-90f3b58ac47b"
            //     // },
                
            //     body:JSON.stringify({data})
            // })
            // var datas = JSON.stringify({
            //     username: "abc",
            //     password: "12345"
            //   });
            //   let headers = new Headers();

            //   headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
            //   headers.append('Access-Control-Allow-Credentials', 'true');
            // fetch('http://localhost:2000/login', {
            //     method: 'POST',
            //     // headers: headers,
            //     headers:{
            //         "Access-Control-Allow-Origin":"*",
            //         'Access-Control-Allow-Credentials': 'true',
            //         "Access-Control-Allow-Headers ":" Origin, Content-Type, Accept",
            //         "mode": 'no-cors'
            //     },
            //     body:JSON.stringify({
            //         username: e.target.userName.value,
            //         password: e.target.password.value
            //       })
            //    })
            // .then((res) => res.json()).then(data=>console.log(data))
            // const val =JSON.stringify({
            //     username: e.target.userName.value,
            //             password: e.target.password.value 
            //   });
            var datass = JSON.stringify({
                "username": "abc",
                "password": "12345"
              });
            //   console.log(val,"sjfhsgkuvfh")
            fetch('http://localhost:2000/login', {
                method: 'POST',  
                // async: true,  
                withCredentials: true,    
                crossorigin: true,    
                mode: 'no-cors', 
                // "processData": false,
                headers: {
                    'Content-type': 'application/json'
                    // 'Access-Control-Allow-Origin': '*',
    //                 "content-type": "application/json",
    // "cache-control": "no-cache",
                    },
    //   body:val 
      body:datass 
    })
      .then((res) => res.json())
      .then((result) => console.log(result.rows))
      .catch((err) => console.log('error'))
        // }
    }

    return(
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input name="userName" /> 
                <input name="password" /> 
                <button>Login</button>
            </form>
        </>
    )
}

export default PostCall;