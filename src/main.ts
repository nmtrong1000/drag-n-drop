import { createApp, provide, h } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import { router } from './router'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

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

app.mount( '#app' )
