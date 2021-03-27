import React from "react";
import CharacterList from "../../components/CharacterList/CharacterList";
import CharactersHeader from "../../components/CharactersHeader/CharactersHeader";

const Characters = () => {
  return (
    <main className="container mx-auto mt-2">
      <div class="rounded-lg h-96">
        <CharactersHeader />
        <CharacterList />
      </div>
    </main>
  );
};

export default Characters;
