import React from "react";

/* Components */
import PokemonCard from "../components/PokemonCard";

/* Styles */
import styles from "../styles/pages/Home.module.css";

/* Services */
import { fetchPokemons } from "../services/pokemon";

/* Types */
import { Pokemon } from "../types/pokemon";
import Input from "../components/Input";

/* Interface - create a datatype for abstract objects */
interface Props {
  pokemons: Pokemon[];
}

const Home = (props: Props) => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>Pokedex Fatec</h1>

        <div className={styles.inputContainer}>
          <Input placeholder="Digite o nome do Pokemon" />
        </div>

        {/* Listagem dos Pokemons */}
        <div className={styles.resultsContainer}>
          {props.pokemons.map(function(pokemon) {
            // Precisa atribuir uma key
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
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
