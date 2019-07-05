<template>
  <div class="add container" >
    <h1 class="page-header">更新用户信息</h1>
    <form @submit="updateUser">
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
        <button type="submit" class="btn btn-primary">确定</button>
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
    fetchCustomer(id){
      this.$http.get("http://localhost:3000/user/"+id)
        .then(function (response) {
          /*console.log(response);*/
          this.customer = response.body;
        })

    },
    updateUser(e){
      /*console.log(123);*/
      if(!this.customer.name || !this.customer.phone || !this.customer.email){
        alert("请填写相关信息");
      }else{
        let updateUser = {
          name:this.customer.name,
          phone:this.customer.phone,
          email:this.customer.email,
          edu:this.customer.edu,
          intro:this.customer.intro
        }
        this.$http.put("http://localhost:3000/user/"+this.$route.params.id,updateUser)
          .then(function (response) {
            /*console.log(response);*/
            this.$router.push({path:"/main"})
          })
        e.preventDefault();
      }
      /*取消默认行为*/
      e.preventDefault();
    }
  },
  created(){
    this.fetchCustomer(this.$route.params.id);
  }
  }
</script>

<style>

</style>
