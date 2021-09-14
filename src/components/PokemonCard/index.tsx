import React from "react";
import Image from "next/image";

/* Components */
import Pokeball from "../Pokeball/index";

/* Styles */
import styles from "./styles.module.css";

const PokemonCard: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Pokemon Info */}
      <div className={styles.info}>
        <h1>Pikachu</h1>

        {/* Pokemon Type */}
        <div className={styles.type}>
          <span>Electric</span>
          <span>Water</span>
        </div>
      </div>

      {/* Pokeball and Pokemon Image */}
      <div className={styles.pokeball}>
        <Pokeball />

        {/* Pokemon */}
        <div className={styles.image}>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pokemon icon" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
