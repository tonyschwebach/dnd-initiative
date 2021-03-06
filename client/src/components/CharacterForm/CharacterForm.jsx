import React, { useEffect, useState } from "react";
import "./CharacterForm.css";

const CharacterForm = ({
  handleClose,
  handleSubmit,
  formType,
  characterData,
}) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [race, setRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [initiativeModifier, setInitiativeModifier] = useState("");

  useEffect(() => {
    if (formType === "edit" || formType === "view") {
      setName(characterData.name);
      setType(characterData.type);
      setRace(characterData.race);
      setCharacterClass(characterData.characterClass);
      setAvatarUrl(characterData.avatarUrl);
      setInitiativeModifier(characterData.initiativeModifier);
    }
  }, [characterData, formType]);

  // clear race and class if not a player character
  useEffect(() => {
    if (type !== "Player") {
      setRace("");
      setCharacterClass("");
    }
  }, [type]);

  const submitForm = (e) => {
    const formObject = {
      name,
      type,
      race,
      characterClass,
      // if no avatar Url, set to dnd silhouette
      avatarUrl: avatarUrl
        ? avatarUrl
        : "https://www.dndbeyond.com/content/skins/waterdeep/images/characters/default-avatar-builder.png",
      initiativeModifier,
    };

    handleSubmit(e, formObject);
  };

  // control initiative modifier to a whole number between -20 and +20
  const changeInitiativeModifier = (e) => {
    const modifier = e.target.value;
    const re = /^[0-9]+[0-9]*$/;
    re.test(modifier);
    if (
      (re.test(modifier) && modifier <= 20 && modifier >= -20) ||
      modifier === ""
    ) {
      setInitiativeModifier(modifier);
    }
  };

  return (
    <form
      id="character-form"
      className="w-full mx-0 px-0"
      onSubmit={(e) => submitForm(e)}
    >
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* name  */}
            <div className="col-span-6 sm:col-span-3 flex-shrink-0 flex items-center">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mr-2"
              >
                Name
              </label>
              <input
                autoFocus
                type="text"
                name="name"
                id="name"
                required
                placeholder="Character Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                disabled={formType === "view" ? true : false}
              />
            </div>

            {/* type  */}
            <div className="col-span-6 sm:col-span-3 select flex-shrink-0 flex items-center">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mr-2"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                disabled={formType === "view" ? true : false}
              >
                <option disabled="disabled" value="" className="hidden">
                  Player or DM/NPC
                </option>
                <option>DM/NPC</option>
                <option>Player</option>
              </select>
            </div>

            {/* race. conditionally render if player*/}
            {type === "Player" && (
              <div className="col-span-6 sm:col-span-3 select flex-shrink-0 flex items-center">
                <label
                  htmlFor="race"
                  className="block text-sm font-medium text-gray-700 mr-2"
                >
                  Race
                </label>
                <select
                  id="race"
                  name="race"
                  value={race}
                  onChange={(e) => setRace(e.target.value)}
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  disabled={formType === "view" ? true : false}
                >
                  <option disabled="disabled" value="" className="hidden">
                    Race
                  </option>
                  <option>Aarakocra</option>
                  <option>Dwarf</option>
                  <option>Elf</option>
                  <option>Halfling</option>
                  <option>Human</option>
                  <option>Dragonborn</option>
                  <option>Genasi</option>
                  <option>Gnome</option>
                  <option>Half-Elf</option>
                  <option>Half-Orc</option>
                  <option>Kalashtar</option>
                  <option>Tiefling</option>
                  <option>Warforged</option>
                </select>
              </div>
            )}

            {/* class. conditionally render if player*/}
            {type === "Player" && (
              <div className="col-span-6 sm:col-span-3 select flex-shrink-0 flex items-center">
                <label
                  htmlFor="character-Class"
                  className="block text-sm font-medium text-gray-700 mr-2"
                >
                  Class
                </label>
                <select
                  id="character-Class"
                  name="character-Class"
                  value={characterClass}
                  onChange={(e) => setCharacterClass(e.target.value)}
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  disabled={formType === "view" ? true : false}
                >
                  <option disabled="disabled" value="" className="hidden">
                    Class
                  </option>
                  <option>Barbarian</option>
                  <option>Bard</option>
                  <option>Cleric</option>
                  <option>Druid</option>
                  <option>Fighter</option>
                  <option>Monk</option>
                  <option>Paladin</option>
                  <option>Ranger</option>
                  <option>Rouge</option>
                  <option>Sorcerer</option>
                  <option>Warlock</option>
                  <option>Wizard</option>
                </select>
              </div>
            )}
          </div>

          {/* initiative mod  */}
          <div className="col-span-6 sm:col-span-3 flex-shrink-0 flex items-center">
            <label
              htmlFor="initiativeModifier"
              className="block text-sm font-medium text-gray-700 mr-2 "
            >
              Initiative Modifier
            </label>
            <input
              type="number"
              max="20"
              min="-20"
              step="1"
              name="initiativeModifier"
              id="initiativeModifier"
              required
              placeholder="Initiative Modifier"
              value={initiativeModifier}
              onChange={(e) => changeInitiativeModifier(e)}
              className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              disabled={formType === "view" ? true : false}
            />
          </div>

          {/* avatar image  */}
          <div className="col-span-6 sm:col-span-3">
            <div className="mt-1 flex items-center flex-shrink-0 flex items-center">
              <label
                htmlFor="avatar-url"
                className="block text-sm font-medium text-gray-700 mr-2"
              >
                Character Image URL
              </label>
              <input
                type="text"
                name="avatar-url"
                id="avatar-url"
                placeholder="Character Image URL (optional)"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                className="mr-5 mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                disabled={formType === "view" ? true : false}
              />

              <img
                alt="character avatar"
                src={
                  avatarUrl
                    ? avatarUrl
                    : "https://www.dndbeyond.com/content/skins/waterdeep/images/characters/default-avatar-builder.png"
                }
                className=" inline-block h-12 w-12 rounded-full bg-gray-100"
              />
            </div>
            {/* TODO: cloudinary to upload picspics  */}
            {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>

            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Change
              </button>
            </div>
          </div> */}
          </div>
        </div>

        {/* buttons  */}
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 border-t border-gray-200">
          <button
            type="button"
            onClick={handleClose}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
          {/* conditionally render save button  */}
          {formType !== "view" && (
            <button
              type="submit"
              form="character-form"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default CharacterForm;
