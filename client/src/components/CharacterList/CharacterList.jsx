import API from "../../utils/API";
import React, { useState, useEffect } from "react";
import CharacterRow from "./CharacterRow";
import NewCharacterModal from "../NewCharacterModal/NewCharacterModal"
import ViewCharacterModal from "../ViewCharacterModal/ViewCharacterModal"
import EditCharacterModal from "../EditCharacterModal/EditCharacterModal"

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [NewCharacterModalOpen, setNewCharacterModalOpen] = useState(false);
  const [ViewCharacterModalOpen, setViewCharacterModalOpen] = useState(false);
  const [EditCharacterModalOpen, setEditCharacterModalOpen] = useState(false);


  const closeNewCharacterModal = () => {
    setNewCharacterModalOpen(false);
  };

  // makes API call to update characters state when character is added or updated
  useEffect(() => {
    if (!NewCharacterModalOpen) {
      API.getCharacters()
        .then((response) => {
          setCharacters(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [NewCharacterModalOpen]);


  return (
    <>
      {NewCharacterModalOpen && (
        <NewCharacterModal
          closeNewCharacterModal={closeNewCharacterModal}
          NewCharacterModalOpen={NewCharacterModalOpen}
        />
      )}
              <button
          type="button"
          onClick={() => setNewCharacterModalOpen(true)}
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
      
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {characters.map((char) => (
                    <CharacterRow {...char} key={char._id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterList;
