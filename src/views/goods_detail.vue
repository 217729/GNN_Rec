<template>
    <div class="a">
        <!-- 导航头 -->
        <div class="FirstLine">

            <span class="maintitle">
                <span>
                    <span style="color: RGB(87,96,113); size: 25px; "> GNN Recommendation System </span>
                </span>
            </span>

            <span class="mainlogo">
                <!-- <img src="/static/pictures/logo1.png" alt="主logo" width="40" height="37"> -->
                <img src="/static/pictures/goods-details.png" alt="主logo" width="100" height="100">
            </span>

            <span class="idimply">
                <span class="welcome"> 欢迎用户：嘿嘿 </span>
                <span class="link" id="back" @click="exit">退出登录 </span>
            </span>

        </div>

        <hr />

        <!-- 详情页内容部分	 -->
        <div class="de_container wrap">
            <!-- 产品介绍模块 -->
            <div class="product_intro clearfix">
                <!-- 预览区域 -->
                <div class="preview_wrap fl">
                    <div class="preview_img">
                        <img src="/static/pictures/Prince.jpg" alt="">
                    </div>


                </div>
                <!-- 产品详细信息 -->
                <div class="itemInfo_wrap fr">
                    <div class="sku_name">
                        Little Prince
                    </div>
                    <div class="goodsuid">
                        iid=1234567890
                    </div>
                    <div class="summary">
                        <dl class="summary_price">
                            <dt>Price</dt>
                            <dd>
                                <i class="price">￥36.00 </i>
                            </dd>
                        </dl>
                        <dl class="summary_promotion">
                            <dt>details</dt>
                            <dd>
                                When you've finished your own toilet in the morning.Welcome to buy it!
                            </dd>
                        </dl>
                        <dl class="summary_evaluate">
                            <dt>Evaluate</dt>
                            <dd>
                                <div class="comment-container">

                                    <!-- 标签评分 -->
                                    <div style="display: flex;margin-bottom: 10px">
                                        <div class="comment-container-item-label-box" v-for="n in 5" :key="index"
                                            @click="selected(n)">
                                            <img class="comment-container-item1" v-show="cur < n"
                                                src="https://www.viplxy.com/smallRoutineTest/images/shouchang.png" />
                                            <img class="comment-container-item1" v-show="cur >= n"
                                                src="https://www.viplxy.com/smallRoutineTest/images/shouchang_check.png" />
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>

                    </div>
                </div>
            </div>

        </div>
        <!-- 详情页内容部分	 -->
    </div>
</template>
 
<script>
export default {
    name: "goods_detail",
    data() {
        return {
            cur: -1,//评分星星下标
        }
    },
    methods: {
        //评分点击事件
        selected(n) {
            this.cur = n
            console.log(this.cur)
        },
        exit(){
            this.$router.push('/')
        }
        
    }
}
</script>
 
<style scoped>
.a {
    width: 1500px;
    height: 575px;
}

.comment-container {
    /* padding: 15px; */
    float: left;
    /* background-color: #368656; */
}

.comment-container-item-label-box {
    padding: 6px 0px;
    display: flex;
    align-items: center;
    justify-content: end;
}

.comment-container-item1 {
    width: 30px;
    height: 30px;
    margin-right: 5px;
}

.imgurl-item {
    width: 80px;
    height: 80px;
    margin-right: 5px;
}

/*详情页的样式文件*/
em,
i {
    font-style: normal;
}

li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle;
}

hr {
    color: #ccc;
}


.fl {
    float: left;
}

.fr {
    float: right;
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
    color: rgb(95, 160, 129);
}

.link:hover {
    color: 368656;
    text-decoration: underline;
}


.dropdown {
    display: none;
}

.de_container {
    width: 70%;
    margin-left: 170px;
    margin-top: 70px;
    padding: 50px;
    background: #fff;
    box-shadow: 5px 5px 7px #647b6dbc;
}


.preview_img {
    position: relative;
    height: 360px;
    border: 2px solid #daeade;
}

.preview_img img {
    height: 350px;
    width: 380px;
    align-self: center;
}

.sku_name {
    /* margin-left: -80px; */
    text-align: left;
    padding-left: 10px;
    height: 35px;
    font-size: 30px;
    font-weight: 500;
}

.goodsuid {
    height: 32px;
    padding-left: 10px;
    /* margin-left: -80px; */
    color: #368656;
    margin-top: 20px;
    font-size: 18px;
    text-align: left;
}

.summary dl {
    overflow: hidden;
    margin-top: 20px;
    vertical-align: middle;
}

.summary dt,
.summary dd {
    float: left;
}

.summary dt {
    width: 100px;
    line-height: 36px;

    text-align: center;
    font-size: 22px;

    background-color: #368656;
    color: #fff;
    /* margin-left: 10px; */
    margin-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 7px;
}

.summary dd {
    width: 500px;
}

.summary_price,
.summary_promotion {
    position: relative;
    padding: 10px 0;
}

.price {
    font-size: 24px;
    color: #368656;
    text-align: left;
    /* width: 100px; */
    float: left;
    /* background-color: cadetblue; */
}

.summary_price a {
    color: #368656;
}

.summary_promotion dd {
    line-height: 36px;
    font-size: 20px;
    margin-top: -5px;
    float: left;
    /* width: 500px; */
    /* background-color: #ccc; */
    text-align: left;
}


.summary a.current {
    border-color: #368656;
}

/* 清除浮动 */

.clearfix:after {
    visibility: hidden;
    content: "";
    height: 0;
    display: block;
    clear: both;
}

.clearfix {
    *zoom: 1;
}
</style>