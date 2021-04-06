import React from "react";

const CharacterRow = ({
  avatarUrl,
  name,
  race,
  characterClass,
  type,
  _id: id,
  openViewCharacterModal,
  openEditCharacterModal,
  openDeleteCharacterModal,
}) => {
  return (
    <tr>
      <td
        className="px-6 py-4 whitespace-nowrap cursor-pointer"
        onClick={() => openViewCharacterModal(id)}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={avatarUrl} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            {type === "Player" && (
              <div className="text-sm text-gray-500">{`${race} - ${characterClass} `}</div>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{type}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        <div className="flex-shrink-0 flex items-center">
        <i
          class="fas fa-pen fa-lg cursor-pointer text-purple-600 hover:text-purple-900"
          onClick={() => openEditCharacterModal(id)}
        >

        </i>
           <i
          class="fas fa-times fa-2x cursor-pointer text-purple-600 hover:text-purple-900 ml-4"
          onClick={() => openDeleteCharacterModal(id)}
        ></i>

        </div>
       

      </td>
    </tr>
  );
};

export default CharacterRow;
