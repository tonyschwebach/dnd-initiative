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
  // openDeleteCharacterModal
}) => {
  return (
    <tr>
      <td
        className="px-6 py-4 whitespace-nowrap cursor-pointer"
        onClick={()=>openViewCharacterModal(id)}
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

      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <i className="cursor-pointer" onClick={()=>openEditCharacterModal(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 20"
            fill="currentColor"
            className="text-purple-600 hover:text-purple-900"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </i>

        <i
          className="cursor-pointer"
          onClick={() => console.log("delete" + id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 20"
            fill="currentColor"
            className="text-purple-600 hover:text-purple-900"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </i>
      </td>
    </tr>
  );
};

export default CharacterRow;
