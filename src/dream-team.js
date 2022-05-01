const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  let dreamName = [];
  let dreamString = "";

  if (Array.isArray(names) && names.length > 0) {
    for (let name of names) {
      if (typeof name == "string" && typeof name.trim()[0] == "string") {
        dreamName.push(name.trim()[0].toUpperCase());
      }
    }
    return (dreamString = dreamName.sort().join(""));
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
