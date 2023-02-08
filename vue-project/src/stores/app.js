import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAppStore = defineStore('app', {
    state: () => ({
        news: [],
      favorite: [],
        isLogin: false,
      }),
      actions:{
        async login(loginData){
            // console.log(loginData);
            try {
                const {data} = await axios({
                    url: `http://localhost:3000/login`,
                    method: 'post',
                    data: loginData
                }) 
                localStorage.setItem("access_token", data.access_token)
                this.readData()
                this.isLogin = true
                this.$router.push('/HomePage')
            } catch (error) {
                console.log(error, `<<<<<<`);
            }
        }
      }
})
