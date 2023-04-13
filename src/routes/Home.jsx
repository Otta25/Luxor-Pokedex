import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Spinner from "../components/Spinner";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import PokemonDetails from "../components/PokemonDetails";

const GET_POKEMONS = gql`
  {
    pokemons(first: 35) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [page, setPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(7);
  const dataLength = data && data.pokemons.length;
  const pokemonsData = useSelector((state) => state);

  if (data) {
    if (pokemonsData.pokemons) {
      document.title = `${pokemonsData.pokemons.name} | Pokedex `;
    } else {
      {
        document.title = `Home | Pokedex `;
      }
    }
    return (
      <div className=" bg-[#484D57] min-h-[100vh] flex items-center justify-center">
        <div className="flex flex-col-reverse w-full desktop:flex-row  desktop:w-[1200px]  m-auto my-10">
          <div className="desktop:w-[40%]">
            <div className=" bg-[#2D2F36] p-10">
              {data &&
                data.pokemons
                  .slice(
                    (page - 1) * pokemonPerPage,
                    (page - 1) * pokemonPerPage + pokemonPerPage
                  )
                  .map((pokemon, index) => (
                    <PokemonCard
                      classification={pokemon.classification}
                      weight={pokemon.weight}
                      height={pokemon.height}
                      mapIndex={index}
                      key={pokemon.id}
                      name={pokemon.name}
                      image={pokemon.image}
                      id={pokemon.id}
                      number={pokemon.number}
                    />
                  ))}
            </div>
            <Pagination
              page={page}
              setPage={setPage}
              pokemonPerPage={pokemonPerPage}
              dataLength={dataLength}
            />
          </div>
          <div className="bg-[#3B3E46] w-full ">
            <PokemonDetails />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-[#484D57] w-[100vw] h-[100vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
}

export default Home;
