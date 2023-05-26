<template>
    <div class="a">
        <div class="FirstLine">

            <span class="maintitle">
                <span>
                    <span style="color: RGB(87,96,113); size: 25px "> GNN Recommendation System </span>
                </span>
            </span>

            <span class="mainlogo">
                <!-- <img src="/static/pictures/logo1.png" alt="主logo" width="40" height="37"> -->
                <img src="/static/pictures/goods_square.png" alt="主logo" width="100" height="100">
            </span>

            <span class="idimply">
                <span class="welcome"> 欢迎用户：嘿嘿 </span>
                <span class="link" id="back" @click="exit">退出登录 </span>
            </span>

        </div>

        <hr />
        <br />

        <br />
        <div id="cards">
            <span class="lcard" id="Beginners">
                <span class="arrow"> → </span>
                <span class="ctitle"> Beginners </span>
                <span class="cardlogo">
                    <img src="/static/pictures/beginner.PNG" alt="beginners" height="90" width="100">
                </span>
                <span class="explation">
                    <p>New to the world of personality types? This is the place to start.</p>
                </span>
                <span class="minilogo">
                    <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
                    1000+　
                    <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
                    4.9
                </span>

            </span>
            <span class="rcard" id="Growth">
                <span class="arrow"> → </span>
                <span class="ctitle"> Personal Growth </span>
                <span class="cardlogo">
                    <img src="/static/pictures/growth.PNG" alt="growth" height="90" width="100">
                </span>
                <span class="explation">
                    <p>Get advice and tips on everything from emotional intelligence to creating fulfilling relationships.
                    </p>
                </span>
                <span class="minilogo">
                    <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
                    500+　
                    <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
                    4.7
                </span>
            </span>

        </div> <!-- cards -->

        <!-- 侧栏返回按钮 -->
        <aside>
            <ul>
                <li>
                    <a href=" " target="_blank" @click="to_mine">关注列表</a>
                </li>
            </ul>
        </aside>

        <!-- 侧栏返回按钮 -->
        <aside1>
            <ul>
                <li>
                    <a href=" " target="_blank" @click="Return_home">商品首页</a>
                </li>
            </ul>
        </aside1>

    </div>
</template>
  
<script>
export default {
  name: "Guess_like",
  
  data:function (){
    return{
    }
  },
    
  methods:{
   
    //Mine(){  this.$router.push("Mine")},

    // getParams: function () {
    //         // 取到路由带过来的参数
    //         var routerParams = this.$route.query.list;
    //         this.user_list = routerParams;
    // },
    Return_home(){
      this.$router.push("Homepage");
    },
    exit(){
        this.$router.push("/");
    },
    to_mine(){
        this.$router.push("Mine");
    }

  },
   
   
}
</script>
  
<style scoped>
.a {
    width: 1500px;
    height: 575px;
}

.FirstLine {
    padding-top: 15px;
    padding-bottom: 15px;
}

.maintitle {
    color: RGB(78, 77, 67);
    font-size: 35px;
    font-weight: bold;
    /* font-family: "Times New Roman", serif; */
    padding-top: 15px;
    padding-bottom: 15px;
}

.mainlogo {
    float: left;
    padding-right: 20px;
    padding-left: 20px;
}

.idimply {
    font-family: "黑体", serif;
    float: right;
    padding-right: 35px;
    margin-top: 10px;
    font-size: 20px;
}

.welcome {
    padding-right: 50px;
}

.imply {
    font-family: "Arial", sans-serif;
    background-color: RGB(245, 245, 245);
    border-radius: 10px;
    padding-left: 30px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-right: 40px;
    margin-left: 15%;
    margin-right: 15%;
}

.link {
    color: cadetblue;
}

.link:hover {
    color: darkcyan;
    text-decoration: underline;
}

.lcard {
    clear: both;
    float: left;

    margin-left: 7%;
    margin-bottom: 2%;
    width: 38%;
    border-radius: 8px;
    border-color: RGB(228, 228, 228);
    border-style: solid;

    padding: 20px;

}

.lcard:hover {
    border-color: mediumseagreen;
}

.lcard:hover .arrow {
    color: mediumseagreen;
}

.rcard {
    float: right;

    margin-right: 7%;
    margin-bottom: 2%;
    width: 38%;
    border-radius: 8px;
    border-color: RGB(228, 228, 228);
    border-style: solid;

    padding: 20px;
}

.rcard:hover {
    border-color: mediumseagreen;
}

.rcard:hover .arrow {
    color: mediumseagreen;
}

.cardlogo {
    float: left;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 25px;
}

.arrow {
    float: right;
    color: RGB(228, 228, 228);
}



.ctitle {
    color: RGB(78, 77, 67);
    font-size: 20px;
    font-style: "Arial", sans-serif;
    font-weight: bold;
}

.explation {
    color: RGB(147, 147, 147);
    font-size: 14px;
    font-style: "Arial", sans-serif;

}

#viewall {
    clear: both;
    float: right;

    margin-right: 5%;
    margin-bottom: 3%;
}

.minilogo {
    color: RGB(147, 147, 147);
    font-size: 12px;
}


aside {
    position: fixed;
    right: 0;
    top: 45%;
    z-index: 2;
}

aside ul {
    list-style-type: none;
}

aside ul li {
    margin-bottom: 10px;
    -webkit-border-radius: 10px 0 0 10px;
    border-radius: 19px 0 0 10px;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-color: #5f8276;
}

aside ul li a {
    display: inline-block;
    width: 80px;
    height: 38px;
    line-height: 38px;
    padding-left: 10px;
    color: #fff;
}

aside1 {
    position: fixed;
    right: 0;
    top: 55%;
    z-index: 2;
}

aside1 ul {
    list-style-type: none;
}

aside1 ul li {
    margin-bottom: 10px;
    -webkit-border-radius: 10px 0 0 10px;
    border-radius: 19px 0 0 10px;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-color: #5f8276;
}

aside1 ul li a {
    display: inline-block;
    width: 80px;
    height: 38px;
    line-height: 38px;
    padding-left: 10px;
    color: #fff;
}
</style>