import CharacterList from "../../components/CharacterList/CharacterList";
import CharactersHeader from "../../components/CharactersHeader/CharactersHeader";
import React from "react";

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
