const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const storyTemplate = require('./storyTemplate');
const styleTemplate = require('./styleTemplate');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log('Не удалось создать UI директорию');
        }
    };

    const createComponent = async () => {
        try {
            const ComponentName = firstCharUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(ComponentName));
            await fs.writeFile(
                resolveUIPath(ComponentName, `${ComponentName}.tsx`),
                componentTemplate(ComponentName, sliceName),
            );
            await fs.writeFile(
                resolveUIPath(ComponentName, `${ComponentName}.stories.tsx`),
                storyTemplate(layer, ComponentName),
            );
            await fs.writeFile(
                resolveUIPath(ComponentName, `${ComponentName}.module.scss`),
                styleTemplate(sliceName),
            );
        } catch (e) {
            console.log('Не удалось создать компонент');
        }
    };

    await createUIDir();
    await createComponent();
};
