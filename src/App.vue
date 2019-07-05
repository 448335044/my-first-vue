<template>
  <div id="app">
    <!--导航开始-->
    <nav class="navbar navbar-primary">
      <div class="container">
          <ul class="nav navbar-nav">
            <li><router-link to="/main">首页</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/exit">安全退出</router-link></li>
          </ul>
      </div>
    </nav>
    <!--导航结束-->
    <!--内容区开始-->
    <router-view class="content"></router-view>
    <!--内容区结束-->
    <!--footer开始-->
    <footer>
      <p>请联系我:17167101167  ||  448335044@qq.com</p>
      </p>
    </footer>
    <!--footer结束-->
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.navbar{
  flex: 0 0 auto;
  background-color:#5bc0de;
}
.navbar ul li a{

  font-size: 20px;
}
.navbar ul li a:hover{
  color:#5bc0de;
}
.content{
  height: 600px;
}
footer p{
  text-align: center;
  font-size: 18px;
  margin-top: 100px;

}
</style>
