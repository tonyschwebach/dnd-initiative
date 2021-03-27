import API from "../../utils/API";
import React, { useState, useEffect } from "react";
import CharacterRow from "./CharacterRow";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  console.log(characters);


  useEffect(() => {
    API.getCharacters()
      .then((response) => {
        setCharacters(response.data)})
      .catch((err) => console.log(err));
  }, []);

  return (
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
                   {characters.map((char) => <CharacterRow {...char} key={char._id}/>)}
          
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
