<template>
  <v-md-editor
    v-model="text"
    :theme="theme"
    height="500px"
  />
</template>

<script>
import VMdEditor from '../../../lib/base-editor';
import '../../../lib/style/base-editor.css';
import githubTheme from '../../../lib/theme/github.js';
import '../../../lib/theme/style/github.css';
import createLineNumberPlugin from '../../../lib/plugins/line-number/index';

VMdEditor.use(createLineNumberPlugin());

const text = `\`\`\` bash
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
\`\`\``;

export default {
  components: {
    [VMdEditor.name]: VMdEditor,
  },
  data() {
    this.theme = githubTheme;

    return {
      text,
    };
  },
};
</script>