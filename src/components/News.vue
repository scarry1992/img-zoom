<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-breakpoint="200"
    :left-class="{
      'bg-grey-2': true,
      'list': true
    }"
  >

    <div slot="left">

      <q-list no-border link inset-delimiter>
        <q-item v-for="block in blocks" :key="block.id" @click="blockClickHandler(block)">
          <q-item-main :label="block.id"/>
        </q-item>
      </q-list>
    </div>

    <div class="logo-container non-selectable no-pointer-events main">
      <div class="logo">
        <img src="~assets/photo_2017-09-10_17-22-12.jpg">
        <div class="backlight" :style="{width: active.width+'%', height: active.height+'%', top: active.top+'%', left: active.left+'%'}"></div>
      </div>
    </div>
  </q-layout>
</template>

<script>
  import {QLayout, QList, QItem, QItemMain} from 'quasar-framework'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState(['blocks', 'active'])
    },
    components: {QLayout, QList, QItem, QItemMain},
    methods: {
      blockClickHandler (block) {
        this.$store.commit('setActive', block)
      }
    }
  }
</script>

<style lang="stylus">
  .list {
    width: 20vw;
  }
  .main {
    width: 80vw;
    height:100vh;
    overflow: hidden;
  }
  .logo {
    height:100%;
    display: inline-block;
    position: relative;
    img {
      height: 100%;
    }
  }
  .backlight {
    opacity: .5;
    background-color: yellow;
    position: absolute;
  }
</style>
