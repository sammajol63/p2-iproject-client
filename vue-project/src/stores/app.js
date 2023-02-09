import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAppStore = defineStore('app', {
    state: () => ({
        news: [],
      favorite: [],
        isLogin: false,
        isHome: true
      }),
      actions:{
        async googlelogin(response) {
          try {
            let { data } = await axios({
              method: "POST",
              url: "https://agregationnews-production.up.railway.app/loginGoogle",
              data: {
                idToken: response.credential,
              },
            });
            localStorage.setItem("access_token", data.access_token);
            this.isLogin = true
            this.$router.push('/HomePage')
            Swal.fire("Succces!", "Login", "success");
          } catch (error) {
            console.log(error, `<<<<<<<<<<<<<`);
            Swal.fire({
              title: "Error!",
              text: error.response.data.message,
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        },
        async login(loginData){
            // console.log(loginData);
            try {
                const {data} = await axios({
                    url: `https://agregationnews-production.up.railway.app/login`,
                    method: 'post',
                    data: loginData
                }) 
                localStorage.setItem("access_token", data.access_token)
                this.readData()
                this.isLogin = true
                this.$router.push('/HomePage')
                Swal.fire("Succces!", "Login", "success");
            } catch (error) {
                console.log(error, `<<<<<<`);
                Swal.fire({
                  title: "Error!",
                  text: error.response.data.message,
                  icon: "error",
                  confirmButtonText: "Cool",
                });
            }
        },
        logout(){
            localStorage.removeItem("access_token")
            this.isLogin = false
            this.$router.push('/')
            Swal.fire("Succces!", "Logout", "success");
        },
        async readData(result){
          let search=''
          if(result){
            search = `?q=${result}`
          }
            try {
                const data = await axios({
                    url: `https://agregationnews-production.up.railway.app/getNews`+ search,
                    method: 'get',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.news = data
                // console.log(this.news, `<<<<<<<<<<<<`)
            } catch (error) {
                console.log(error)
            }
        },
        async register(result){
            try {
                const { data } = await axios({
                    url: "https://agregationnews-production.up.railway.app/register",
                    method: "post",
                    data: {
                      name: result.name,
                      email: result.email,
                      password: result.password,
                    },
                    headers: {
                      access_token: localStorage.access_token,
                    },
                  });
                  this.$router.push("/");
                  Swal.fire("Succces!", "Register", "success");
            } catch (error) {
                // console.log(error, `<<<<<<<<<<<<<<<<<<<<`);
                Swal.fire({
                  title: "Error!",
                  text: error.response.data.message,
                  icon: "error",
                  confirmButtonText: "Cool",
                });
            }
        },
        async bookmarks(result){
            try {
              const {data} = await axios({
                url:`https://agregationnews-production.up.railway.app/bookmarks`,
                method:'post',
                data: {
                  title: result.title,
                  description: result.description,
                  source: result.source,
                  theme: result.theme
                },
                headers:{
                  access_token: localStorage.getItem("access_token")
                }
              })
              Swal.fire("Succces!", "Add Bookmark", "success");
            } catch (error) {
                console.log(error);
                Swal.fire({
                  title: "Error!",
                  text: error.response.data.message,
                  icon: "error",
                  confirmButtonText: "Cool",
                });
            }
          },
          async myNews(){
            try {
              const {data} = await axios({
                url: `https://agregationnews-production.up.railway.app/myNews`,
                method: "get",
                headers:{
                  access_token: localStorage.access_token
                }
              })
              this.favorite = data
              console.log(this.favorite, `<<<<<<<<INI<<<<`);
            } catch (error) {
              console.log(error);
            }
          },
      }
})