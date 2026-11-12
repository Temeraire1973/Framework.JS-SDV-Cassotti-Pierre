import{ defineRule, configure} from 'vee-validate';
import {required,email,min,max,regex} from '@vee-validate/rules';

const myFonction = (value) => {
    if (!value ) {
        return 'Ce champ est requis';
    }
};

export default defineNuxtPlugin((nuxtApp) => {
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);
  defineRule('max', max);
  defineRule('regex', regex); 
  defineRule('myFonction', myFonction);
})

configure({
    validateOnBlur:true,
    validateOnChange:true,
    validateOnInput:false,
    validateOnModelUpdate:true
})