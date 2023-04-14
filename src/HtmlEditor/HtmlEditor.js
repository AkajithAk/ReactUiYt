import React, { useState } from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 

function HtmlEditor(){
   // const modules = {
   //    toolbar: [
   //      ['bold', 'italic', 'underline', 'strike'],
   //    ],
   //  };
   //  const { quill, quillRef } = useQuill({modules});
    const { quill, quillRef } = useQuill();
    const [value,setValue]=useState();

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            console.log(quillRef.current.firstChild.innerHTML);
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);
      // <p><strong>How to add value in</strong> react <u>quilljs</u></p>
      const handleAdd = () =>{
         quill.clipboard.dangerouslyPasteHTML("<p><strong>How to add value in</strong> react <u>quilljs</u></p>")
      }

      console.log(value,"this is quill editor")
    return(
        <div>
         <button onClick={handleAdd}>Set Value</button>
            <div style={{ width: 500, height: 300 }}>
                <div ref={quillRef} />
            </div>
        </div>
    );
}
export default HtmlEditor;
