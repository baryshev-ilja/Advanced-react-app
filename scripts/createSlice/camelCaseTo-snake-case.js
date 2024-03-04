module.exports = (string = '') => string
    .replace(/([A-Z])/g, (match, group) => `-${group.toLowerCase()}`);
