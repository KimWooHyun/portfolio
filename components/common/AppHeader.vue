<template>
  <header>
    <button @click="changeStatus()">
      <i class="fas fa-bars" v-if="!isShow"></i>
      <i class="fas fa-times" v-else></i>
    </button>
    <div :class="['div-contents', isShow ? 'show' : 'hide']">
      <div class="flex flex-wrap flex-ai-center flex-jc-center div-list-wrapper">
        <ul>
          <li><nuxt-link to="/#home" @click.native="changeStatus()">Home</nuxt-link></li>
          <li><nuxt-link to="/#about" @click.native="changeStatus()">About</nuxt-link></li>
          <li><nuxt-link to="/#career" @click.native="changeStatus()">Career</nuxt-link></li>
          <li><nuxt-link to="/#pa" @click.native="changeStatus()">Personal Activities</nuxt-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    changeStatus () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~assets/css/color.less';

  header {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    z-index: 10;
    button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      color: #ffffff;
      font-size: 36px;
      border: none;
      z-index: 1;
    }
    .fa-times {
      color: #000000;
    }
    .div-contents {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80vh;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
      .div-list-wrapper {
        height: 100%;
      }
    }
    li {
      padding: 10px 0px;
      a {
        font-size: 36px;
        text-decoration: none;
      }
      a:hover {
        border-bottom: 5px solid @dark-black;
      }
    }
  }

  @media only screen and ( min-width : 768px ){
    header {
      .div-contents {
        height: 60vh;
      }
    }
  }
</style>
