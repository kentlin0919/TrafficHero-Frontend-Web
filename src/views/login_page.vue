<template>
  <div>
    <header-component class="sticky-top">
      <div class="color">
        <nav class="navbar bg-primary navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid" data-bs-theme="blue">
    <img src="../assets/p1.png" alt="Italian Trulli" class="navbar-brand">
    
    

  </div>
</nav>
    </div>
    </header-component>
    <main>
      <div class="view">
        <p>E-mail: </p>
        <MDBInput v-model="acc" placeholder="E-mail" />
        <p></p>
        <p>密碼: </p>
        <MDBInput v-model="password" placeholder="password" type="password" />
        <p></p>
        <div class="vv">
          <MDBBtn color="primary" @click="login">登錄</MDBBtn>
          <MDBBtn @click="register" color="primary">註冊</MDBBtn>
        </div>
        <p></p>
        <GoogleLogin :clientId="GOOGLE_CLIENT_ID" :callback="handleGoogleAuthCodeLogin" popup-type="popup">
          <MDBBtn @click="handleGoogleAuthCodeLogin" type="button" color="secondary">Google</MDBBtn>
        </GoogleLogin>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import { googleAuthCodeLogin } from 'vue3-google-login'
import { MDBBtn, MDBInput } from 'mdb-vue-ui-kit'
import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.Backend_API;
const GOOGLE_CLIENT_ID = 'clientID'

export default {
  components: {
    MDBBtn,
    MDBInput
  },
  data() {
    return {
      acc: "",
      password: "",
      data: null
    }
  },
  methods: {
    handleGoogleAuthCodeLogin(response) {
      googleAuthCodeLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => {
    console.log(response)
    this.sendAuthCodeToBackend(response)

  })
      
    },

    sendAuthCodeToBackend(authCode) {

      // const data = { auth_code: authCode };
      console.log(JSON.stringify(authCode))
      axios.post('http://114.34.89.252:8000'+'/googlelogin',  authCode ,{headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          // 后端验证成功，可以进行后续处理
          this.$router.push('/login_after');
        })
        .catch(error => {
          // 后端验证失败，处理登录失败逻辑
        });
  //     const data = { auth_code: authCode };
  // axios
  //   .post('http://lin.kent0919.com:8000/googlelogin', data)
  //   .then(response => {
  //     // 後端驗證成功，可以進行後續處理
  //     this.$router.push('/login_after');
  //   })
  //   .catch(error => {
  //     // 後端驗證失敗，處理登入失敗邏輯
  //   });
      
    },

    register() {
      this.$router.push('/register');
    },

    login() {
      // 创建包含登录数据的对象
      const body = {
        "email": this.acc,
        "password": this.password
      };

      // 打印登录数据到控制台
      console.log(JSON.stringify(body));

      // 发送登录请求到后端
      // axios.post('https://eddie.tw:8000/login', JSON.stringify(body), {
        axios.post(apiKey+'/login', JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          const httpCode = response.status;

          if (httpCode === 200) {
            console.log(httpCode)
            this.$router.push('/login_after');
          } else {
            console.log(httpCode)
            // this.$router.push('/login_beforce');
          }
        })
        .catch(error => {
          // 处理登录请求失败的逻辑
          console.log(error.status)
          this.$router.push('/login_beforce');
        });
    },

    callback() {
      // 处理 Google 登录回调的逻辑
    }
  },

  data() {
    return {
      GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID
    }
  }
}
</script>
<style scoped>
header-component {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  position: fixed;
  width: 100%;
  top: 0%;
  right: 0%;
  left: 0%;
}
main {
  display: table-cell;
  background-color: rgba(110, 216, 255, 0.732);
  max-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0%;
  right: 0%;
  left: 0%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.view {
  display: table-cell;
  position: sticky;
  align-items: center;
  justify-content: center;
  top: 40%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vv {
  display: flex;
  gap: 24px;
}

.p {
  margin-top: 12px;
  word-break: break-all;
}
img {
  height: 40px;
  width: 50px;
}
</style>
