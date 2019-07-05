<template>
    <div class="main container">
      <h1 class="page-header">用户管理系统</h1>
      <input type="text" class="form-control" placeholder="搜索"  v-model="keywords"/>
      <br/>
      <router-link class="btn btn-info" to="/add">添加用户</router-link>
     <table class="table table-striped">
       <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th>学历</th>
            <th>查看详情</th>
          </tr>
       </thead>
          <tbody>
            <!--<tr v-for="(item,index) in customers" :key="index" >-->
           <!-- <tr v-for="(item,index) in filterBy(customers,filterInput)" :key="index" >-->
            <tr v-for="(item,index) in search(keywords)" :key="index" >
              <td>{{item.name}}</td>
              <td>{{item.phone}}</td>
              <td>{{item.email}}</td>
              <td>{{item.edu}}</td>
              <td> <router-link class="btn btn-info" v-bind:to="'/detail/'+item.id">详情</router-link></td>
            </tr>
          </tbody>
     </table>
    </div>
</template>

<script>

    export default {
      data () {
        return {
          customers:[],
          filterInput:"",
          keywords:""
        }
      },
      methods:{
        fetchCustomers(){
          this.$http.get("http://localhost:3000/user")
            .then(function(response){
              /*console.log(response);*/
              this.customers = response.body;
            })
        },
//        filterBy(customers,value){
//return customers.filter(function(item){
//return item .name.match(value);
//})
//        }
        search(keywords){
          var newList = []
          this.customers.forEach(item => {
            if (item.name.indexOf(keywords) != -1){
              newList.push(item)
            }
          })
          return newList
        }
      },
    created(){
      this.fetchCustomers();
    }
    }
</script>

<style>

</style>
