import axios from "axios";

const API = {
  // Characters
  createCharacter: function (characterData) {
    return axios.post("/api/characters", characterData);
  },

  getCharacters: function () {
    return axios.get("/api/characters");
  },

  getCharacter: function (id) {
    return axios.get(`/api/characters/${id}`);
  },

  editCharacter: function (id, characterData) {
    return axios.put(`/api/characters/${id}`, characterData);
  },

  deleteCharacter: function (id) {
    return axios.delete(`/api/characters/${id}`);
  },

  // Combats

  // Campaigns

  // Users
};
