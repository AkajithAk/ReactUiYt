import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function DisplayCode(){
    const [data,setData] = useState('')

    return (
        <div>
            <textarea onChange={(e)=>setData(e.target.value)} /> 
            <SyntaxHighlighter language="javascript">
            {data}
            </SyntaxHighlighter>
        </div>
    )
}
export default DisplayCode;