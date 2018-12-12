import cloneDeep from 'lodash.clonedeep';

class LayoutsStore {
  set layout(_layout) {
    this._layout = cloneDeep(_layout);
    console.log('[Layouter] Set Layout State', this._layout, _layout);
  }

  get layout() {
    return this._layout;
  }
}

export default new LayoutsStore();
