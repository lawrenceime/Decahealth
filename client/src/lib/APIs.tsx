
import axios from '../lib/axios'
export const url = "https://localhost:5000"

export const getUser = async(data:any)=>{
try {
   const response =  await axios.post("/user/signup", JSON.stringify(data),{
   headers : {"Content-Type": "application/json"}
   })
      return response
} catch (error) {
  console.log("error")  
}
}