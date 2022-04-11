<template>
  <div>
    <router-link to="/about/1?a=b">About</router-link>
    <p class="active">test {{ counter }}</p>
    <p class="active">test 2 {{ doubleCounter }}</p>
    <el-button
      type="primary"
      @click="increaseCounter"
    >
      increase
    </el-button>
    <el-button
      type="primary"
      @click="mainStore.decreaseCounter()"
    >
      decrease 1
    </el-button>
    <el-button
      type="primary"
      @click="mainStore.decreaseCounter(10)"
    >
      decrease 10
    </el-button>
    <el-button
      type="primary"
      @click="mainStore.callAPI()"
    >
      call API
    </el-button>
    <el-button
      type="primary"
      @click="reset"
    >
      reset
    </el-button>

    <input
      type="text"
      v-model="state.firstName"
      @blur="v$.$touch"
    >
    <input
      type="text"
      v-model="state.email"
    >

    <span v-if="v$.firstName.$error">Field is required</span>
    <!-- <span v-if="v$.email.required">Field is required</span> -->
    <span v-if="v$.email.email.$invalid">Invalid email</span>

    <img
      :src="Logo"
      alt=""
    >
  </div>
</template>
<script lang="ts" setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { storeToRefs } from 'pinia'
import { useMainStore } from 'src/store/demo'
import { watch, reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { useHead } from '@vueuse/head'
import Logo from 'src/assets/img/logo.png'

const state = reactive( {
  firstName: '',
  email: ''
} )
const rules = {
  firstName: { required },
  email: { email, required }
}
const v$ = useVuelidate( rules, state )
const mainStore = useMainStore()
const { counter, doubleCounter } = storeToRefs( mainStore )
const increaseCounter = () => {

  mainStore.$patch( {
    counter: mainStore.counter + 1
  } )

}
const meta = reactive( {
  title: 'lol'
} )

useHead( {
  title: computed( () => meta.title )
} )

const query = gql`
query tagList {
  tags {
    id,
    label
  }
}
`
const { result, error } = useQuery( query )

// resp.onError( ( err ) => {
//   console.log('error', err)
// } )

watch( result, ( v ) => {

  console.log( 'graphql value', v )

} )
watch( error, ( v ) => {

  console.log( 'graphql error', v )

} )



const reset = () => {

  mainStore.$reset()

}
</script>
<style lang="scss" src="./style.scss" />