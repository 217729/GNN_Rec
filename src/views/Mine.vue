<template>
    <div class="a">
        <div class="FirstLine">
            <span class="maintitle">
                <span>
                    <span style="color: RGB(87,96,113); size: 25px"> GNN Recommendation System </span>
                </span>
            </span>

            <span class="mainlogo">
                <!-- <img src="/static/pictures/logo1.png" alt="主logo" width="40" height="37"> -->
                <img src="/static/pictures/Mine.png" alt="主logo" width="100" height="100">
            </span>

            <span class="idimply">
                <span class="welcome"> 欢迎用户：嘿嘿 </span>
                <span class="link" id="back" @click="exit">退出登录 </span>
            </span>
        </div>
        <hr />
        <br />
        <div id="cards">
            <span class="lcard" id="own">
                <button @click="favor" class="my_button">{{content}}</button>
                <!-- <span class="arrow"> → </span> -->
                <span class="cardlogo">
                    <img src="/static/pictures/beginner.PNG" alt="beginners" height="70" width="70">
                </span>
                <span class="ctitle"> Sunshine(u_id=1) </span>
                <span class="explation">
                    <p>kaishifafeng wyaofengl jingshenztaihenbuhao aaaaaaaaaaaaaa</p>
                </span>
            </span>
            <span class="lcard" id="Beginners">

            </span>
        </div>


        <!-- 侧栏返回按钮 -->
        <aside>
            <ul>
                <li>
                    <a href=" " target="_blank" @click="to_HOME">首页</a>
                </li>
            </ul>
        </aside>

        <!-- 侧栏返回按钮 -->
        <aside1>
            <ul>
                <li>
                    <a href=" " target="_blank" @click="to_Liken">猜我喜欢</a>
                </li>
            </ul>
        </aside1>

    </div>
</template>
  
<script>
export default {
    name: "Mine",
    data() {
        return {
            liked: true,
            content: "已关注",
        }
    },
    methods: {
        favor(){
            this.liked=!this.liked;
            if(this.liked){
                this.content="已关注"
            }
            else{
                this.content="+关注"
            }
        },
        to_Liken(){
            this.$router.push("Guess_like")
        },
        to_HOME(){
            this.$router.push("Homepage")
        },
        exit(){
            this.$router.push("/")
        }
    }
}
</script>
  
<style scoped>
button {
    outline: none;
}

.my_button {
    float:right;
    color: white;
    background:  #5f8276;
    border: #445b53 solid;
    border-radius: 20px;
    padding: 12px 20px;
    text-align: center;
    margin-right: 10px;
    margin-top: 12px;
    font-size: 25px;
    -webkit-transform: scale(0.7);
}

.my_button:hover{
    background: #445b53;
}

.lcard {
    clear: both;
    float: left;

    margin-left: 25%;
    /* margin: center; */
    margin-bottom: 2%;
    width: 700px;
    border-radius: 8px;
    border-color: RGB(228, 228, 228);
    border-style: solid;

    padding: 10px;
}

.lcard:hover {
    border-color: mediumseagreen;
}

.cardlogo {
    float: left;
    padding-left: 10px;
    /* padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 25px; */
}

.ctitle {
    float: left;
    /* background-color: #5f8276; */
    padding-left: 20px;
    padding-top: 8px;
    color: RGB(78, 77, 67);
    font-size: 25px;
    font-style: "Arial", sans-serif;
    font-weight: bold;
    text-align: left;
}

.explation {
    color: RGB(147, 147, 147);
    font-size: 14px;
    font-style: "Arial", sans-serif;
    float: left;
    padding-left: 20px;
}

.arrow {
    float: right;
    color: RGB(228, 228, 228);
}

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
    padding-left: 30px;
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