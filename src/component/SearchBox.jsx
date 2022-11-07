
import React, { useState, useEffect } from 'react';


  
function SearchBox (props){

    const Books =props.data
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const [price, setPrice] = useState(0);



useEffect(() => {
   
  setResult( Books.filter((book)=>{
   return (book.language.toLowerCase().includes(search.toLowerCase().trim()) && price >  book.price   )
}))
  },[search ,price]);


  console.log(result);

    return  (
         <>
     <input type="search" placeholder=" search ..." className='p-1 mt-5 ' value={search}  onChange={(e) => setSearch(e.target.value)}/>
     
     <div className="mt-5 ">
    
<label for="countries" className="block  mx-4 text-sm font-medium text-gray-900 dark:text-gray-400 ">Select an price</label>
<select id="countries" className='p-2 mx-2'  name='price' onChange={(e) => setPrice(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
   <option value={40}>all Books</option>
   <option value={20}>less than 20$</option>
   <option value={30}>less than 30$</option>
   <option value={40}>less than 40$</option>
   </select>
   </div>
<div className=' p-5 d-flex flex-wrap'>

     {result.map((book,i) =>{
       return <div key={i} className=" w-25">
        <div className='m-3 shadow p-5 '>
            <h4>{book.language}</h4>
            <p>{book.edition}</p>
            <p style={{ color:'#61da61' }}>{book.price}$</p>

        </div>
        </div>
    } )  }
    
    </div>
   
      
    </>);
   
 
}
  
export default SearchBox;