import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemon } from "../redux/pokemonReducer";
import { motion } from "framer-motion";


function PokemonCard({ name, image, number, id ,mapIndex,classification,weight,height}) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const pokemonState = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();


  const handleClick = () =>{
    dispatch(setPokemon({ name, image, number, id,classification,weight,height }))
    window.scrollTo(0,0)
  }

  return (
    <motion.div
      onClick={handleClick}
      className="bg-[#3F414B] flex my-2 items-center cursor-pointer hover:bg-[#545663] transition-all ease-in-out"
      key={id}
      variants={{
        hidden:{
          opacity:0,
        },
        visible:(mapIndex)=>({
          opacity:1,
          transition:{
            delay: mapIndex * 0.05,
            type:'spring'
          }
        })
      }}

      initial='hidden'
      animate='visible'
      custom={mapIndex}
    >
      <img
        src={image}
        className="w-12 h-12 object-cover rounded-full m-3 mr-3"
        alt={"image of" + name}
      />
      <span className=" text-[#ffcc00] font-semibold mr-3">{number}</span>
      <h3 className=" text-[white]">{name}</h3>
    </motion.div>
  );
}

export default PokemonCard;
