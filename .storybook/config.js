import { configure, addParameters, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS
        },
        defaultViewport: 'iphonexr'
    }
});

addDecorator(
    withKnobs({
        escapeHTML: false
    })
);

addDecorator(
    withOptions({
        addonPanelInRight: true
    })
);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
