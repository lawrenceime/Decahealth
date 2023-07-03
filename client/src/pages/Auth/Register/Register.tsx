 import React from "react"
export interface IAppProps {
    greet: string
   }
   
   export default function Login ({greet}: IAppProps) {
     return (
       <div>
        {greet} 
       </div>
     );
   }
   