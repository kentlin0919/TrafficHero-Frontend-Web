
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import login from '@/components/navbar_login_after.vue'
import { ref } from 'vue'
import { MDBBtn } from "mdb-vue-ui-kit";
import { googleTokenLogin } from 'vue3-google-login'

const GOOGLE_CLIENT_ID = '130370070421-eiu49norj8h9kbsqmruc99ooeqq01974.apps.googleusercontent.com'
    const handleGoogleAccessTokenLogin = () => {
      googleTokenLogin({
        clientId: GOOGLE_CLIENT_ID
      }).then((response) => {
        data.value = response
      })
    }

</script>

<template>
  <div >
    <main >
      <div class="button1">
      <p>E-mail: {{ acc }}</p>
      <input v-model="acc" placeholder="E-mail" />
      <p></p>
      <p>密碼: {{ password }}</p>
      <input v-model="password" placeholder="Password" />
      <p></p>
      <MDBBtn color="primary">登錄</MDBBtn>

      <button @click="api" class="button1">註冊
      </button>
      <p></p>
      <GoogleLogin :callback="callback" popup-type="TOKEN">
        <MDBBtn color="secondary" @click="handleGoogleAccessTokenLogin">
          
          Google 
        </MDBBtn>
      </GoogleLogin>
      
     

    </div>
    </main>
  </div>
</template>

<style scoped>
main {
  display: table-cell;
  background-color: rgba(110, 216, 255, 0.732);
  max-height: 100vh;
  width: 100%;
  position: fixed;
  top: 60px;
  right: 0%;
  left: 0%;
  height: 100%;
  align-items: center; 
  justify-content: center; 
  flex-wrap: wrap;
}

.button1 {
  display: table-cell;
  position: sticky;
  align-items: center; 
  justify-content: center; 
  top: 50%;
  left: 50%;

}

.p {
  margin-top: 12px;
  word-break: break-all;
}
</style>