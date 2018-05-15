<template>
  <div>
    <div class="per_userdata" v-show="loginBefore">
      <span class="per_not_lingin"></span>
      <div class="per_usedata_box">
        <router-link :to="{ path: 'login' }" class="person_login">登录 注册</router-link>
        <!-- <a class="person_login">登录 注册</a> -->
      </div>
    </div>
    <a class="per_userdata" v-show="loginAfter">
      <img :src="userAvatar">
      <div class="per_usedata_box after"><p>{{ userName }}</p><p>UID:{{ userID }}</p></div>
    </a>
    <a class="link_rz_m">实名认证<i>未认证</i></a>
    <a class="link_phone islogin">绑定手机<i>未绑定</i></a>
    <a class="link_password_m">修改密码</a>
    <a class="link_kf">联系客服</a>
    <a class="link_out" v-on:click="logout">退出</a>
  </div>
</template>

<script>
// import bus from '../../bus'
import { ajaxUrl } from '../../util/util'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home page',
      loginBefore: true,
      loginAfter: false,
      userAvatar: '',
      userName: '11',
      userID: ''
    }
  },
  mounted () {
    //钩子函数
    this.getUserData()
  },
  methods: {
    getUserData () {
      let uData = this.$route.query //route传值
      if(Object.keys(uData).length != 0){
        this.userAvatar = uData.avatar
        this.userName = uData.username
        this.userID = uData.uin
        this.loginBefore = false
        this.loginAfter = true
      }else{
        this.loginBefore = true
        this.loginAfter = false
      }

      // let that = this // $emit&$on 传值
      // bus.$on('userData-message', function (data) {
      //   that.userAvatar = data.avatar
      //   that.userName = data.username
      //   that.userID = data.uin
      // })
    },
    logout () {
      this.$http.jsonp(ajaxUrl + 'uc/api/logout').then(res => {
        if(res.body.code == 200){
          this.loginBefore = true
          this.loginAfter = false
          this.$router.push({ path: '/home' })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/define';
@import './home';
</style>
