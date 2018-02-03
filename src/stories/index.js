/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  array,
} from '@storybook/addon-knobs';

import MathQuillInput from './MathQuillInput.vue';
import EntryBox from './Entrybox.vue';
import jsxgraph from './jsxgraph.vue';


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('MathQuill input', () => ({
    components: { MathQuillInput },
    template: `<div>
                    <math-quill-input ref='mathquill' :change="change"></math-quill-input>
               </div>`,
    methods: {
      change: action('text changed'),
      focus: function() {
        this.$refs.mathquill.focus();
      },
      write: function(str) {
        this.$refs.mathquill.write(str);
      },
      clear: function() {
        this.$refs.mathquill.clear();
      }
    },
  }))
  .add('EntryBox', () => {
    const header = text('Header', 'Combine to');
    return {
      components: { EntryBox },
      data() {
        return {
          cancelHidden: boolean('CancelHidden', false),
          disabled: false,
          header: text('Header', 'Combine to'),
          input: null,
          kbvisible: true,
          layout: "normal",
          actionsVisible:true
        }
      },
      template: `<div>
                    <entry-box :header-text="header" 
                        v-bind:cancel-hidden="cancelHidden"
                        v-bind:disabled="disabled"
                        :actionsVisible="actionsVisible" 
                        :onOk="onOk" 
                        :onCancel="onCancel"
                        :onFocus="onFocus"
                        :onChange="onChange"></entry-box>
                 </div>`,
      methods: {
        onCancel: action('cancel clicked'),
        onOk: action('ok clicked'),
        onFocus: action('focused'),
        onChange: action('changed'),
      },
    }
  })
  .add('jsxgraph', () => ({
    components: { jsxgraph },
    data(){
      return {
        numbers: array('numbers',["-2","3"], ',').map((e)=>{return +e;}),
      }
    },
    template: `<div style="width: 200px; height: 150px;">
                    <jsxgraph :numbers="numbers" :y-offset="0"/>
               </div>`,
    methods: {
    },
  }));
