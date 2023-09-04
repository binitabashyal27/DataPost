
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
function PostData(){
    const [post,setPost]=useState({
      
    })
    const handleInput=(event)=>{
       setPost({...post,[event.target.name]:event.target.event })
    }
   function handleSubmit(event){
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",{post})
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    }
    
    return(
    
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-blue-600">
                        Form
                        </h3>
                    </a>
         <div className='mt-1'>          
                <div className='w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg'>
          <label  className="block text-sm font-medium text-gray-700 undefined">
               Id:
          </label>
<input type='text' placeholder='enter your id' onChange={handleInput} ></input><br></br>


<label   className="block text-sm font-medium text-gray-700 undefined">
    Name:
</label>
<input type='text' placeholder='enter your name'  onChange={handleInput} ></input><br></br>


<label   className="block text-sm font-medium text-gray-700 undefined">
    Email:
</label>
<input type='text' placeholder='enter your email'  onChange={handleInput} ></input><br></br>


<button type='submit' onChange={handleSubmit} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Register</button>
</div>
</div>
</div>
</div>
)}


export default PostData;