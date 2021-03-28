import CharacterModal from "../../components/CharacterModal/CharacterModal";
import "./CharactersHeader.css";
import React, { useState } from "react";

const CharactersHeader = () => {
  const [characterModalOpen, setCharacterModalOpen] = useState(false);

  const closeCharacterModal = () => {
    setCharacterModalOpen(false);
  };

  return (
    <>
      {characterModalOpen && (
        <CharacterModal
          closeCharacterModal={closeCharacterModal}
          characterModalOpen={characterModalOpen}
        />
      )}
      <header id="characters-hero" className="text-center rounded-lg">
        <div className="py-20">
          <h1 className="text-7xl text-gray-50 sm:truncate hero-title">
            Characters
          </h1>

          <button
            type="button"
            onClick={() => setCharacterModalOpen(true)}
            className=" inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        </div>
      </header>
    </>
  );
};

export default CharactersHeader;
