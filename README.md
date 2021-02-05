# NekaConfirmPlugin

Your plugin description...

## Installation

### 1. Install
```
yarn add neka-confirm-plugin
# or
npm i neka-confirm-plugin --save
```

### 2. Plug-in
```js
import NekaConfirmPlugin from 'neka-confirm-plugin'

Vue.use(NekaConfirmPlugin)

new Vue({
  // your vue config
  nkConfirmSettings: new NekaConfirmPlugin(),
})
```

### 3. Use in your components

```vue
<template>
  <neka-confirm-plugin />
</template>

<script>
  export default {
    async created() {
      console.log(this.$nkConfirm);
    },
  };
</script>
```

## License
MIT