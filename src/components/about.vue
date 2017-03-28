<template>
  <div>
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">FCC郑州 demo web</div>
        <div class="md-subhead">by Quincy</div>
      </md-card-header>
      <md-card-content style="margin-left:20%;text-align:left;">
        <p>something:</p>
        <ul>
          <li>node.js</li>
          <li>webpack</li>
          <li>Vue.js</li>
          <li>vue-router</li>
          <li>Vuex</li>
          <li>Vue Material</li>
          <li>VS code</li>
          <li>PowerShell</li>
          <li>Win10</li>
        </ul>
      </md-card-content>
    </md-card>
    
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      
    }
  },
  created(){
    this.$store.state.mytitle="关于"
  }
}
</script>

<style scoped>

</style>
