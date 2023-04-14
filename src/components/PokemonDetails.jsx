import { animate, motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import pikachuImg from "../assets/img/pikachu.svg";

function PokemonDetails({ childs }) {
  const pokemon = useSelector((state) => state.pokemons);

  return (
    <div className="w-full h-full flex flex-col">
      {pokemon && (
        <div className="flex w-full justify-between p-10 border-b-2 border-[#333333]">
          <h1 className="text-[white] font-semibold text-[32px]">
            {pokemon && pokemon.name}
          </h1>
          <h2 className="text-[#F2C94C] font-semibold text-[32px]">
            #{pokemon && pokemon.number}
          </h2>
        </div>
      )}
      {!pokemon && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img
            className="w-[15rem] desktop:w-[20rem] opacity-20"
            src={pikachuImg}
            alt=""
          />
          <h2 className=" desktop:text-3xl m-5 text-[#00000053]">
            Pick one Pokemon!
          </h2>
        </div>
      )}
      {pokemon && (
        <div className="pokemoncard desktop:bg-[#00000065] desktop:w-[40%] m-auto py-5 flex flex-col items-center justify-center rounded-lg ">
          <img
            className="w-[360px] h-[330px] object-cover object-top p-3"
            src={pokemon && pokemon.image}
            alt=""
          />
          <span className=" font-bold text-xl text-[#F2C94C]">
            Type: {pokemon && pokemon.classification}
          </span>
          <span className=" text-[white]">
            Minimum weight: {pokemon && pokemon.weight.minimum}
          </span>
          <span className=" text-[white]">
            Maximum weight: {pokemon && pokemon.weight.maximum}
          </span>
          <span className=" text-[white]">
            Minimum weight: {pokemon && pokemon.height.minimum}
          </span>
          <span className=" text-[white]">
            Minimum weight: {pokemon && pokemon.height.maximum}
          </span>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
