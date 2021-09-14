import React from "react";
import { NextPage } from "next";

/* Components */
import PokemonCard from "../components/PokemonCard";

/* Styles */
import styles from "../styles/pages/Home.module.css";

/* Services */
import { fetchPokemons } from "../services/pokemons";

/* Types */
import { Pokemon } from "../types/pokemon";

/* Interface - create a datatype for abstract objects */
interface Props {
  pokemons: Pokemon[],
};

const Home = (props: Props) => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>Pokedex Fatec</h1>

        {/* Listagem dos Pokemons */}
        <div className={styles.resultsContainer}>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </section>
    </main>
  );
};

/* Fetching Data from PokeAPI
  * getStaticProps gets the data returning props for our components
*/
export async function getStaticProps() {
  const pokemons = await fetchPokemons();

  return {
    props: {
      pokemons: pokemons,
    },
  };
}

export default Home;
