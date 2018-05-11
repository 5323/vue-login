import { errorMsgShow } from '../../util/util'
import bus from '../../bus'
export default {
  name: 'login',
  data () {
    return {
      showLogin: true,
      showRegister: false,
      errorTips: false,
      username: '',
      password: '',
      tipsText: ''
    }
  },
  methods: {
    gotoLogin () {
      this.showLogin = true
      this.showRegister = false
    },
    gotoRegister () {
      this.showLogin = false
      this.showRegister = true
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
      this.$http.jsonp('//h5.2144.com/api/account/login', {'params': datas}).then(res => {
        if(res.body.code == 200){
          this.showTips('登录成功')
          bus.$emit('userData-message', res.body.data) //传递数据
          setTimeout(function(){
              this.$router.push('/home')
          }.bind(this),1000)
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
