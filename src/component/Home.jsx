
import React from 'react';
import Tours from './Tours';
import SearchBox from './SearchBox';
import data from '../data.json';


  
function Home (){
    const allData = data.eBooks
    return  (
         <>
         <SearchBox data={allData} /> 

       
    </>);
   
 
}
  
export default Home;