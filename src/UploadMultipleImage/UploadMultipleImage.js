
function UploadMultipleImage(){

    const handleChange = (e) =>{
        console.log(e.target.files)
    }

    return(
        <>
            <input type="file" multiple onChange={(e)=>handleChange(e)} />
        </>
    )
}
export default UploadMultipleImage;