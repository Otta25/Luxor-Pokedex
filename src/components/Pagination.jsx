import React, { useState } from 'react'

function Pagination({page,setPage,dataLength,pokemonPerPage}) { 

  const prevPage = () =>{
    if(page>1){
     setPage(page-1)
    }
  }
  
  const nextPage = () =>{
    if(page>=1&&page<dataLength/pokemonPerPage){
     setPage(page+1)
    }
  }

  return (
    <div className='bg-[#1F1F1F] p-4'>
        <div className='flex gap-2'>
            <button className='py-1 px-3 bg-[#2D2F36] text-[white] hover:bg-[#575b68] transition-all ease-in-out active:scale-110' onClick={prevPage}>Prev</button> 
            <button className='py-1 px-3 bg-[#2D2F36] text-[white] hover:bg-[#575b68] transition-all ease-in-out active:scale-110' onClick={nextPage}>Next</button> 
        </div>
    </div>
  )
}

export default Pagination