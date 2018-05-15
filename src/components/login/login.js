import { ajaxUrl, errorMsgShow } from '../../util/util'
// import bus from '../../bus'
export default {
  name: 'login',
  data () {
    return {
      showLogin: true,
      showRegister: false,
      errorTips: false,
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      newrPassword: '',
      tipsText: ''
    }
  },
  methods: {
    gotoLogin () {
      this.showLogin = true
      this.showRegister = false
      this.hideTips()
    },
    gotoRegister () {
      this.showLogin = false
      this.showRegister = true
      this.hideTips()
    },
    showTips (msg) {
      this.tipsText = msg
      this.errorTips = true
    },
    hideTips () {
      this.tipsText = ''
      this.errorTips = false
    },
    login () {
      let username = this.username.replace(/(^\s*)|(\s*$)/g,'')
      let password = this.password.replace(/(^\s*)|(\s*$)/g,'')
      if(!username){
        // errorMsgShow('请填写用户名')
        this.showTips('请填写用户名')
        return;
      }else if(username.length < 4 || username.length > 15){
        // errorMsgShow('请填写正确的用户名')
        this.showTips('请填写正确的用户名')
        return;
      }
      if(!password){
        // errorMsgShow('请填写密码')
        this.showTips('请填写密码')
        return
      }else if(password.length < 6 || password.length > 20){
        // errorMsgShow('请填写正确的密码')
        this.showTips('请填写正确的密码')
        return
      }
      let datas = {
        username: username,
        password: password,
        pos: 0
      }
      this.$http.jsonp(ajaxUrl + 'api/account/login', {'params': datas}).then(res => {
        if(res.body.code == 200){
          this.showTips('登录成功')
          // bus.$emit('userData-message', res.body.data) //传递数据
          let resData = res.body.data
          let queryData =  {
            avatar: resData.avatar,
            username: resData.username,
            uin: resData.uin
          }
          this.$router.push({ path: '/home',query: queryData })
        }else{
          this.tipsText = res.body.message
          this.errorTips = true
        }
      }).catch(err => {
      　console.log(err)
      })

    },
    register () {
      let newNsername = this.newUsername.replace(/(^\s*)|(\s*$)/g,'')
      let newPassword = this.newPassword.replace(/(^\s*)|(\s*$)/g,'')
      let newRpassword = this.newrPassword.replace(/(^\s*)|(\s*$)/g,'')
      if(!newNsername){
        // errorMsgShow('请填写用户名')
        this.showTips('请填写用户名')
        return;
      }else if(newNsername.length < 4 || newNsername.length > 15){
        // errorMsgShow('请填写正确的用户名')
        this.showTips('请填写正确的用户名')
        return;
      }
      if(!newPassword || !newRpassword){
        // errorMsgShow('请填写密码')
        this.showTips('请填写密码')
        return
      }else if(newPassword.length < 6 || newPassword.length > 20){
        // errorMsgShow('请填写正确的密码')
        this.showTips('请填写正确的密码')
        return
      }
      if(newPassword != newRpassword){
        this.showTips('两次输入的密码不一致')
        return
      }

      let datas = {
        username: newNsername,
        password: newPassword,
        password_repeat: newRpassword,
        pos: 0
      }
      this.$http.jsonp(ajaxUrl + 'api/account/register', {'params': datas}).then(res => {
        if(res.body.code == 200){
          this.showTips('注册成功')
          // bus.$emit('userData-message', res.body.data) //传递数据
          let resData = res.body.data
          let queryData =  {
            avatar: resData.avatar,
            username: resData.username,
            uin: resData.uin
          }
          this.$router.push({ path: '/home',query: queryData })
        }else{
          this.tipsText = res.body.message
          this.errorTips = true
        }
      }).catch(err => {
      　console.log(err)
      })

    }
  }
}
