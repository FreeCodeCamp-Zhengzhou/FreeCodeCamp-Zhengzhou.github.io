<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">H5杀人游戏</div>
      </md-card-header>
      <md-card-content>
        <p style="margin:0 50px;">
          <md-avatar class="md-large">
            <img :src="us5">
          </md-avatar>
          <p class="md-title">孙逍宇</p>
          <p>2-1:冷启动界面</p><p>
              2-2：版本选择（其实只有一个版本）</p><p>
              2-3:设置玩家人数</p><p>
              3:身份查看页</p><p>
              4-1:法官查看页</p><p>
              4-2:显示天数</p><p>
              4-3:杀人页</p><p>
              4-4:黑夜解密</p><p>
              4-5:投票页</p><p>
              4-6:结果页</p><p>
              #游戏流程 </p><p>
              设置玩家人数,可满足6-18人游戏。</p><p>
              设置完成之后，一次查看自己的身份，不要泄露给他人。</p><p>
              然后法官查看身份，宣布开始游戏。</p><p>
              晚上，杀手杀人。白天公布被杀玩家，全体投票。</p><p>
              当水民全部死亡，杀手获得胜利，反之杀手全部死亡，水民获胜。</p>
        </p>
      </md-card-content>
      <md-card-actions>
        <md-button href="https://vshaonian.github.io/">个人博客</md-button>
        <md-button href="https://github.com/vshaonian/killgame">项目地址</md-button>
      </md-card-actions>
    </md-card>
    
  </div>
</template>

<script>
export default {
  name: 'code',
  data () {
    return {
      us5:"https://freecodecamp-zhengzhou.github.io/img/gallery/g1.jpg"
    }
  },
  created(){
    this.$store.state.mytitle="成员作品"
  }
}
</script>

<style scoped>

</style>
