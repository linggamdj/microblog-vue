import {reactive} from 'vue';

//
class Store {
  constructor() {
    this.state = reactive({
      posts: [{
        id: 1,
        title: 'Title',
        content: 'This is content',
        likes: 10,
        hastags: [
          'vue',
          'javascript',
          'composition api',
        ]
      }]
    })
  }
}

export const store = new Store();