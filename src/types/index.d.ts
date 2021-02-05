import Vue, { PluginFunction } from 'vue';
// import { Store } from 'vuex';

export class NekaConfirmPlugin {
  constructor(options?: NekaConfirmPluginOptions);

  static install(): PluginFunction<any>;
  // static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;

  // Your instance methods
  world(): string;
}

export interface NekaConfirmPluginOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $nkConfirm: NekaConfirmPlugin;
    __$NekaConfirmPluginInstance: NekaConfirmPlugin;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    nkConfirmSettings?: NekaConfirmPluginOptions | NekaConfirmPlugin
  }
}
