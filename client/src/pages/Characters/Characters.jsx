import CharacterList from "../../components/CharacterList/CharacterList";
import NewCharacterModal from "../../components/NewCharacterModal/NewCharacterModal";
import CharactersHeader from "../../components/CharactersHeader/CharactersHeader";
import React, { useState } from "react";

const Characters = () => {
  return (
    <main className="container mx-auto mt-2">
      <div className="rounded-lg h-96">
        <CharactersHeader />

        <CharacterList />
      </div>
    </main>
  );
};

export default Characters;
