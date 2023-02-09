<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';
    export default {
      data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        ...mapActions(useAppStore, ['login', 'googlelogin']),
        handleLogin(){
            this.login({
                email: this.email,
                password: this.password
            })
            this.$router.push('/HomePage')
        },
        callback(response){
          console.log(response, `<<<<<<<<<<<LOGIN<`);
          this.googlelogin(response)
        },
    }
    }
</script>

<template>
<div class="d-flex justify-content-center align-items-center mt-5">
  <div class="card">
    <form @submit.prevent="handleLogin">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <h3><center>LOGIN</center></h3>
          <div class="form px-4 pt-5">

            <input v-model="email" type="text" name="" class="form-control" placeholder="Email">
            <br>
            <input v-model="password" type="password" name="" class="form-control" placeholder="Password"><br>
            <button class="btn btn-dark btn-block">Login</button> &nbsp
            <button @click.prevent="this.$router.push(`/RegisterPage`)" class="btn btn-dark btn-block">Register</button><br><br>
            <GoogleLogin :callback="callback"/>
                      <button type="submit" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                      </button>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        </div>     
       </div>

      </form>
</div>
</div>
     <!-- Login -->

</template>