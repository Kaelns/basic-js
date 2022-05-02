const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    let res = value === undefined ? "" : value;
    this.chain.push(`${res}`);
    return this;
  },

  removeLink(position) {
    if (
      Number.isNaN(position) ||
      position < 1 ||
      position > this.chain.length ||
      position % 1 !== 0
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain = this.chain.filter((el, id) => id !== position - 1);

    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = `( ${this.chain.join(" )~~( ")} )`;
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
