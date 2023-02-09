<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    data(){
    return{
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useAppStore, ['register']),
    handleRegister(){
      this.register({
        name: this.name,
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>


<template>
<div class="d-flex justify-content-center align-items-center mt-5">
  <div class="card">
    <form @submit.prevent="handleRegister">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <h3><center>REGISTER</center></h3>
          <div class="form px-4 pt-5">
            <input v-model="name" type="text" name="" class="form-control" placeholder="Name"><br>
            <input v-model="email" type="text" name="" class="form-control" placeholder="Email">
            <br>
            <input v-model="password" type="password" name="" class="form-control" placeholder="Password"><br>
            <button class="btn btn-dark btn-block">Register</button><br><br>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        </div>     
       </div>
      </form>
</div>
</div>
</template>