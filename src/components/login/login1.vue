<template>
  <div>
    <div class="user-login" v-show="showLogin">
  		<div class="lp_tit">玩蛋账号登录</div>
  		<input class="lact_accountnumber" type="text" placeholder="账号" v-model="username" @focus="hideTips">
  		<input class="lact_password" type="password" placeholder="密码" v-model="password" @focus="hideTips">
  		<span class="lact_login" v-on:click="login">立即登录</span>
  		<div class="lact_fj"><a class="lact_forgetpassword">忘记密码?</a><a class="lact_joinfast" v-on:click="gotoRegister">快速注册</a></div>
  		<div class="lp_tips"><span v-show="errorTips">{{ tipsText }}</span></div>
  	</div>
    <div class="user-register" v-show="showRegister">
  		<div class="lp_tit">玩蛋快速注册</div>
  		<input class="register_account" type="text" placeholder="账号：4-15字符（仅限数字，英文）" v-model="newUsername" @focus="hideTips">
  		<input class="register_password" type="password" placeholder="密码：6-20位密码" v-model="newPassword" @focus="hideTips">
  		<input class="register_password" type="password" placeholder="确认密码" v-model="newrPassword" @focus="hideTips">
  		<span class="register_login" @click="register">立即注册</span>
  		<div class="lact_fj"><a class="lact_logfast" v-on:click="gotoLogin">登录账号</a></div>
      <div class="lp_tips"><span v-show="errorTips">{{ tipsText }}</span></div>
  	</div>
  </div>
</template>

<script src="./login">
</script>

<style lang="scss" scoped>
@import '../../assets/css/define';
@import './login';
</style>
