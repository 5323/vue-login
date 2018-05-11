<template>
  <div>
    <div class="per_userdata">
      <span class="per_not_lingin"></span>
      <div class="per_usedata_box">
        <router-link :to="{ path: 'login' }" class="person_login">登录 注册</router-link>
        <!-- <a class="person_login">登录</a> -->
        <!-- <a class="person_sign">注册</a> -->
      </div>
    </div>
    <a class="per_userdata" style="display:none;">
      <img :src="userAvatar">
      <div class="per_usedata_box after"><p>{{ userName }}</p><p>UID:{{ userID }}</p></div>
    </a>
    <a class="link_rz_m">实名认证<i>未认证</i></a>
    <a class="link_phone islogin">绑定手机<i>未绑定</i></a>
    <a class="link_password_m">修改密码</a>
    <a class="link_kf">联系客服</a>
    <a class="link_out">退出</a>
  </div>
</template>

<script>
import bus from '../../bus'
export default {
  name: 'home',
  data () {
    return {
      msg: 'home page',
      userAvatar: '',
      userName: '11',
      userID: ''
    }
  },
  methods: {
  },
  // mounted () {
  //   bus.$on('userData-message', function (data) {
  //     console.log(data)
  //     // this.$set(this.someObject,userID,2)
  //     // this.userAvatar = data.avatar
  //     // this.userName = 333
  //     // this.userID = data.uin
  //     // console.log(this.userName );
  //     this.$nextTick(function () {
  //       console.log(this);
  //       this.userAvatar = data.avatar
  //       this.userName = 333
  //       this.userID = data.uin
  //     })
  //   })
  // },
  created () {
    bus.$on('userData-message', function (data) {
      console.log(data)
      this.$set(this.someObject,userID,2)
      this.userAvatar = data.avatar
      this.userName = data.nickname
      this.userID = data.uin
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/define';
@import './home';
</style>
