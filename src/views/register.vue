<template>
    <div>
        <header-component class="sticky-top">
            <div class="color">
                <nav class="navbar bg-primary navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div class="container-fluid" data-bs-theme="blue">
                        <img src="../assets/logo2.png" alt="Italian Trulli" class="navbar-brand">



                    </div>
                </nav>
            </div>
        </header-component>
        <main>
            <div class="view">
                <p>name: </p>
                <MDBInput label="Form control default" />
                <input v-model="name" placeholder="name" />
                <p></p>
                <p>E-mail: </p>
                <MDBInput label="Form control default" />
                <input v-model="acc" placeholder="E-mail" type="email" />
                <p></p>
                <p>密碼: </p>
                <input v-model="password" placeholder="Password" type="password" />
                <p></p>
                <div class="vv">
                    <button @click="register" class="button1" type="button">註冊</button>
                </div>
                <MDBInput label="Form control lg" size="lg" />
                <MDBInput label="Form control default" />
                <MDBInput label="Form control sm" size="sm" />
                <MDBInput label="Example label" v-model="input1" />
                <p></p>

                <MDBInput label="Form control lg" size="lg" />
            </div>
        </main>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import { MDBBtn, MDBInput } from 'mdb-vue-ui-kit'
import axios from 'axios'
import.meta.env

export default {
    components: {
        MDBBtn,
        
    },
    data() {
        return {
            name: '',
            acc: '',
            password: ''
        }
    },
    methods: {
        register() {
            const apiUrl = import.meta.env.VITE_Backend_API;
            // 处理登录按钮点击事件的逻辑
            const regData = {
                name: this.name,
                email: this.acc,
                password: this.password
            };
            console.log(regData);
            axios.post(apiUrl+'/register', JSON.stringify(regData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    const httpCode = response.status;

                    if (httpCode === 200) {
                        this.$router.push('/login');
                    } else {
                        // 登录失败的逻辑
                    }
                })
                .catch(error => {
                    // 处理登录请求失败的逻辑
                });

        },
        callback() {
            // 处理 Google 登录回调的逻辑
        }
    }
}
</script>
<style scoped>
main {
    display: table-cell;
    background-color: rgba(110, 216, 255, 0.732);
    max-height: 100vh;
    width: 100%;
    position: fixed;
    top: 56px;
    right: 0%;
    left: 0%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

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

img {
    height: 40px;
    width: 50px;
}

.vv {
    display: flex;
    gap: 24px;
}

.p {
    margin-top: 12px;
    word-break: break-all;
}
</style>
  