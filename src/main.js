import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import {mdi} from 'vuetify/lib/iconsets/mdi';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaults: 'mdi',
        sets: { mdi }
    }
})

createApp(App).use(vuetify).mount('#app')
