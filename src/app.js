import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  
  new Vue({
    
    el: '#app',
    
    data: {
      things: [
        {title: 'Wash the car', priority: 'low'},
        {title: 'Buy bread', priority: 'low'},
        {title: 'Feed the fish', priority: 'high'}],
      newThing: '',
      newPriority: ''
    },
    
    methods: {
      addNewThing: function(){
        this.things.push(
          {title: this.newThing, priority: this.newPriority}
        );
        this.newThing = '';
        this.newPriority = '';
      }
    }
    
  });
  
  
});
