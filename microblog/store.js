import {reactive} from 'vue';

//
class Store {
  constructor() {
    this.state = reactive({
      posts: [{
        id: 1,
        title: 'Title',
        content: 'This is content'
      }]
    })
  }
}

export const store = new Store();