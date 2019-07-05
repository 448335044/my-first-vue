<template>
    <div class="add container" >
      <h1 class="page-header">添加用户</h1>
      <form @submit="addUser">
        <div class="well">
          <div class="form-group">
            <lebal>姓名</lebal>
            <input type="text" class="form-control" placeholder="姓名"
                   v-model="customer.name"/>
          </div>
          <div class="form-group">
            <lebal>电话</lebal>
            <input type="phone" class="form-control" placeholder="电话"
                   v-model="customer.phone"/>
          </div>
          <div class="form-group">
            <lebal>邮箱</lebal>
            <input type="email" class="form-control" placeholder="邮箱"
                   v-model="customer.email"/>
          </div>
          <div class="form-group">
            <lebal>学历</lebal>
            <input type="text" class="form-control" placeholder="学历"
                   v-model="customer.edu"/>
          </div>
          <div class="form-group">
            <lebal>简介</lebal>
            <textarea class="form-control" v-model="customer.intro" cols="30" rows="6"></textarea>
          </div>
         <button type="submit" class="btn btn-primary">添加</button>
         <router-link class="btn btn-info" to="/main">取消</router-link>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
      data(){
      return{

        customer:{}

      }
    },
    methods:{
      addUser(e){
        /*console.log(123);*/
        if(!this.customer.name || !this.customer.phone || !this.customer.email){
          alert("请填写相关信息");
        }else{
          let newUser = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            edu:this.customer.edu,
            intro:this.customer.intro
          }
          this.$http.post("http://localhost:3000/user",newUser)
            .then(function (response) {
              /*console.log(response);*/
              this.$router.push({path:"/main"})
            })
          e.preventDefault();
        }
        /*取消默认行为*/
        e.preventDefault();
      }
    }
    }
</script>

<style>

</style>
