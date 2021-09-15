import React, { useState } from "react";
import Head from "next/head";

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
  const [search, setSearch] = useState("");

  /* Estado dos Pokemons; atualizamos o estado, pois não podemos alterar as props */
  const [statePokemons, setStatePokemons] = useState(props.pokemons);

  /* Lidar com o evento "digitar" do Input */
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.value === "") {
      setStatePokemons(props.pokemons);
    }

    setSearch(event.target.value);

    /* Array filter => filtrar os Pokemons */
    const regex = `${event.target.value}.*`;

    /* Filtrando os Pokemons pela Regex */
    const filteredPokemons = props.pokemons.filter(function(pokemon) {
      return pokemon.name.match(new RegExp(regex, "is"));
    });

    setStatePokemons(filteredPokemons);
  }

  return (
    <main className={styles.container}>
      <Head>
        <title>Pokedex Fatec</title>
      </Head>
      <section className={styles.content}>
        <h1 className={styles.title}>Pokedex Fatec</h1>

        <div className={styles.inputContainer}>
          <Input
            placeholder="Digite o nome do Pokemon"
            onChange={handleOnChange}
          />
        </div>

        {/* Listagem dos Pokemons */}
        <div className={styles.resultsContainer}>
          {statePokemons.map(function(pokemon) {
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
    revalidate: 1,
  };
}

export default Home;
