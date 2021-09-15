import React from "react";
import Image from "next/image";

/* Components */
import Pokeball from "../Pokeball/index";

/* Styles */
import styles from "./styles.module.css";
import { colorMapping } from "../../styles/colors";

/* Types */
import { Pokemon } from "../../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = (props) => {
  const bgColor = colorMapping[props.pokemon.color];

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      {/* Pokemon Info */}
      <div className={styles.info}>
        <h1>{props.pokemon.name}</h1>

        {/* Pokemon Type */}
        <div className={styles.type}>
          {props.pokemon.pokemonTypes.map(function(type) {
            return <span key={type.name}>{type.name}</span>;
          })}
        </div>
      </div>

      {/* Pokeball and Pokemon Image */}
      <div className={styles.pokeball}>
        <Pokeball />

        {/* Pokemon */}
        <div className={styles.image}>
          <Image
            src={props.pokemon.sprites.other["official-artwork"].front_default}
            alt="Pokemon icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
