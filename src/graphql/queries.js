import { useQuery, gql } from "@apollo/client";

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

export default GET_POKEMONS;