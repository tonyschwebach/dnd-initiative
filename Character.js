class Character {
  constructor(name, initiative, dexMod) {
    this.name = name;
    this.initiative = initiative;
    this.dexMod = dexMod;
  }
  getName() {
    return this.name;
  }
  getInitiative() {
    return this.initiative;
  }
  getDexMod() {
    return this.dexMod;
  }
}
