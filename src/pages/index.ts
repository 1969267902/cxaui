import CxaCard from './card/cxa-card.vue';
import List from './list/List.vue';

export default (vue: any, option: any) => {
  vue.component('Cxa-Card', CxaCard);
  vue.component('Cxa-List', List);
};

