<template>
  <div id="app">

<!-- 标题栏 -->
<md-toolbar class="md-dense">
  <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
    <md-icon>menu</md-icon>
  </md-button>
  <h2 class="md-title" style="flex: 1">{{ $store.state.mytitle }}</h2>
  <md-button class="md-icon-button" href="https://github.com/FreeCodeCamp-Zhengzhou/FreeCodeCamp-Zhengzhou.github.io">
    <md-icon>code</md-icon>
  </md-button>
</md-toolbar>

<!-- 侧边栏 -->
<md-sidenav class="md-left" ref="leftSidenav" @click.native="toggleLeftSidenav">
  <md-toolbar class="md-dense">
    <div class="md-toolbar-container">
      <h3 class="md-title">导航菜单</h3>
    </div>
  </md-toolbar>
  <p>
    <router-link to="/fcc">
      <md-button class="md-primary">关于Fcc</md-button>
    </router-link>
  </p>
  <p>
    <router-link to="/zzfcc">
      <md-button class="md-primary">FCC郑州</md-button>
    </router-link>
  </p>
  <p>
    <router-link to="/us">
      <md-button class="md-primary">成员列表</md-button>
    </router-link>
  </p>
  <p>
    <router-link to="/code">
      <md-button class="md-primary">成员作品</md-button>
    </router-link>
  </p>
  <p>
    <router-link to="/join">
      <md-button class="md-primary">加入我们</md-button>
    </router-link>
  </p>
  <p>
    <router-link to="/about">
      <md-button class="md-primary">about</md-button>
    </router-link>
  </p>
  <a href="https://cn.vuejs.org"><img src="./assets/logo.png"></a>
</md-sidenav>    

<!-- 路由切换页面 -->
<router-view id="myview"></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#myview{
  max-width: 960px;
  margin:0 auto;
}
</style>
