import App from '@/App.vue'
import { router } from '@/router'
import { createI18n } from 'vue-i18n'
import messages from '@/locales'
import { useMonitorStore } from '@/store/monitor'
import en from '@/locales/en/index'
import zh from './locales/zh-CN/index'

import '@/styles/custom.less'
import 'virtual:uno.css'
import '@/styles/style.css'

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({ locale: 'zh', messages:{zh,en})

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')

useMonitorStore().getMonitors()
