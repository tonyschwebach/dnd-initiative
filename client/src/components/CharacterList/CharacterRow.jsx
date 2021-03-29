import React from "react";

const CharacterRow = ({ avatarUrl, name, race, characterClass, type }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
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

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-purple-600 hover:text-purple-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default CharacterRow;
