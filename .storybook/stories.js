import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';

import NekaConfirmPlugin from '../src/neka-confirm-plugin';

Vue.use(Vuex);
Vue.use(NekaConfirmPlugin);

const withSettings = component => ({
  nkConfirmSettings: new NekaConfirmPlugin(),
  ...component
});

const stories = storiesOf('NekaConfirmPlugin', module);

stories
  // Add some stories here to make your plugin more descriptive
  .add(
    'My Customs  Component',
    () =>
      withSettings({
        template: `
        <div>
          <neka-confirm-plugin />
        </div>
      `
      }),
    {
      notes: `
        # Using \`neka-confirm-plugin\`

        \`\`\`html
        <template>
          <neka-confirm-plugin />
        </template>
        \`\`\`
      `
    }
  )
  .add(
    'My Custom Component with another markup',
    () =>
      withSettings({
        template: `
        <div>
          <b>Hello</b>
          <neka-confirm-plugin />
          <i>world</i>
        </div>
      `
      }),
    {
      notes: `
        # Using \`neka-confirm-plugin\` with other components

        \`\`\`html
        <template>
          <div>
            <b>Hello</b>
            <neka-confirm-plugin />
            <i>world</i>
          </div>
        </template>
        \`\`\`
      `
    }
  );
