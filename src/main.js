import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSun, faMoon, faAngleDown, faGlobe)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
