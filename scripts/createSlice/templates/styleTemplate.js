const toSnakeCase = require('../camelCaseTo-snake-case');

module.exports = (componentName) => {
    const componentNameCSS = toSnakeCase(componentName);

    return `.${componentNameCSS} {

}`;
};
