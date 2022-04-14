import { createApp, provide, h } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import { router } from './router'
import { HandledError } from './helpers/HandledError'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const httpLink = createHttpLink( {
  uri: 'http://localhost:3020/graphql'
} )
const cache = new InMemoryCache()
const apolloClient = new ApolloClient( {
  link: httpLink,
  cache
} )
const head = createHead()
const app = createApp( {
  setup() {
    provide( DefaultApolloClient, apolloClient )
  },
  render: () => h( App )
} )

app.use( head )
app.use( createPinia() )
app.use( router )

app.config.errorHandler = ( err, vm, info ) => {
  /* Global Exception handler */
  if( err instanceof HandledError ) {
    console.error( '[HANDLED]', err.message )
  } else {
    console.error( err )
  }
}

app.mount( '#app' )
