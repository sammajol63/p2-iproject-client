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
        ...mapActions(useAppStore, ['login']),
        handleLogin(){
            this.login({
                email: this.email,
                password: this.password
            })
            this.$router.push('/HomePage')
        }
    }
    }
</script>

<template>
     <!-- Login -->
     <div class="container h-screen mx-auto">
      <div class="grid grid-cols-10 h-screen place-items-center">
        <div class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8 place-items-center">
          <h2 class="text-4xl tracking-widest text-white text-opacity-70 text-center uppercase mb-14">
            <p>Welcome to <br /><span class="text-white text-opacity-100 text-6xl">Hacktiv Heroes</span></p>
          </h2>
          <div class="grid grid-cols-10">
            <div class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8">
              <h2 class="">Login Form</h2>
              <div class="card px-10 py-5 sm:px-20 sm:py-10">
                <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
                  <div class="mb-5">
                    <label for="email-address" class="sr-only">Email address</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;<input v-model="email" id="email-address" name="email" type="email" autocomplete="off" required class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider" placeholder="Email address" />
                  </div>
                  <div>
                    <label for="password" class="sr-only">Password</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="password" id="password" name="password" type="password" autocomplete="off" required class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider" placeholder="Password" />
                  </div><br>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="w3-button w3-black">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>