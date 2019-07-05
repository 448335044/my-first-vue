<template>
    <div class="container">
      <router-link class="btn btn-info" to="/main">返回</router-link>
      <h1 class="page-header">HI~  {{ item.name }}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/update/'+item.id">编辑</router-link>
        <button class="btn btn-danger" @click="delUser(item.id)">删除</button>
      </span>
      </h1>
      <div class="border">
        <ul>
          <li><p>姓名:{{item.name}}</p></li>
          <li><p>手机:{{item.phone}}</p></li>
          <li><p>邮箱:{{item.email}}</p></li>
          <li><p>学历:{{item.edu}}</p></li>
          <li><p>简介:{{item.intro}}</p></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
      return {
        item:""
      }
    },
    methods:{
      fetchCustomers(id){
        this.$http.get("http://localhost:3000/user/" + id)
          .then(function(response){
            console.log(response);
            this.item = response.body;
          })
      },
      delUser(id){
       /* console.log(id);*/
       this.$http.delete("http://localhost:3000/user/" + id)
         .then(function(response){
           this.$router.push({path:"/main"})
         })
      }
    },
    created(){
      this.fetchCustomers(this.$route.params.id);
    }
    }
</script>

<style>
.border{
  width: 100%;
  height:500px;
  border:1px solid #d3d3d3;
  font-size: 20px;
  box-shadow: 10px 10px 5px #d3d3d3;
}
.border li{
  margin: 20px 50px;
}
</style>
