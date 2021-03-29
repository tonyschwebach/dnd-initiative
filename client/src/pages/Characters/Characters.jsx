import CharacterList from "../../components/CharacterList/CharacterList";
import CharacterModal from "../../components/CharacterModal/CharacterModal";
import CharactersHeader from "../../components/CharactersHeader/CharactersHeader";
import React, { useState } from "react";

const Characters = () => {
  const [characterModalOpen, setCharacterModalOpen] = useState(false);

  const closeCharacterModal = () => {
    setCharacterModalOpen(false);
  };
  return (
    <>
      {" "}
      {characterModalOpen && (
        <CharacterModal
          closeCharacterModal={closeCharacterModal}
          characterModalOpen={characterModalOpen}
        />
      )}
      <main className="container mx-auto mt-2">
        <div className="rounded-lg h-96">
          <CharactersHeader />
          <button
            type="button"
            onClick={() => setCharacterModalOpen(true)}
            className=" inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {/* <!-- Heroicon name: solid/pencil --> */}
            <svg
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
            </svg>
            Add Character
          </button>
          <CharacterList  characterModalOpen={characterModalOpen} />
        </div>
      </main>
    </>
  );
};

export default Characters;
