import React, { useEffect } from "react"


function GoogleRecaptcha(){
    // https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key


    useEffect(()=>{
        const script = document.createElement('script')
        script.src="https://www.google.com/recaptcha/api.js?render=6LdjATQmAAAAAGrx948-2XbhbK8UMJuHr3ontkNq"
        script.addEventListener('load',()=>{
            window.grecaptcha.ready(()=>{
                window.grecaptcha.execute('6LdjATQmAAAAAGrx948-2XbhbK8UMJuHr3ontkNq').then((token)=>console.log(token,"---token"))
            })
        })
        document.body.appendChild(script)
    })
    return(
        <>
            <div
            className="g-recaptcha"
            data-sitekey="6LdjATQmAAAAAGrx948-2XbhbK8UMJuHr3ontkNq"
            data-size="invisible"
            >

            </div>
        </>
    )
}
export default GoogleRecaptcha;