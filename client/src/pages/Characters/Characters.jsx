import React from "react";
import CharacterList from "../../components/CharacterList/CharacterList";
import CharactersHeader from "../../components/CharactersHeader/CharactersHeader";

const Characters = () => {
  return (
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="rounded-lg h-96">
            <CharactersHeader />
            <CharacterList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Characters;
