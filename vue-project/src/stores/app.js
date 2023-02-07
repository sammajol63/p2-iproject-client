import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAppStore = defineStore('app', {
    state: () => ({
        heroes: ""
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
                console.log(data, `masuk <<<<<<<<`);
                this.$router.push('/HomePage')
            } catch (error) {
                console.log(error, `<<<<<<`);
            }
        },
        logout(){
            localStorage.removeItem("access_token")
            this.$router.push('/')
        },
        async readData(){
            try {
                const data = await axios({
                    url: `http://localhost:3000/getNews`,
                    method: 'get',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.heroes = data
                console.log(this.heroes);
            } catch (error) {
                console.log(error)
            }
        },
        async bookmarks(id){
            try {
              const {data} = await axios({
                url:`http://localhost:3000/bookmarks`,
                method:'post',
                headers:{
                  access_token: localStorage.getItem("access_token")
                }
              })
            } catch (error) {
                console.log(error);
            }
          },
      }
})