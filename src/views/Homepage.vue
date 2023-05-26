<template>
  <div class="a">
    <div class="FirstLine">

      <span class="maintitle">
        <span>
          <span style="color: RGB(87,96,113); size: 25px; "> GNN Recommendation System </span>
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
      <span class="lcard" id="Beginners" @click="show_detail">
        <span class="arrow"> → </span>
        <span class="ctitle"> Little Prince </span>
        <span class="cardlogo">
          <img src="/static/pictures/Prince.jpg" alt="beginners" height="90" width="100">
        </span>
        <span class="explation">
          <p>When you've finished your own toilet in the morning, then it is time to attend to the toilet of your planet, just so, with the greatest care. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          100+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.8
        </span>

      </span>
      <span class="rcard" id="Growth">
        <span class="arrow"> → </span>
        <span class="ctitle"> Classic Leather Jacket </span>
        <span class="cardlogo">
          <img src="/static/pictures/leather.jpg" alt="growth" height="90" width="100">
        </span>
        <span class="explation">
          <p>A timeless and stylish leather jacket made from high-quality genuine leather. It features a classic design with a front zipper closure. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          30+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.7
        </span>
      </span>

      <span class="lcard" id="Profession">
        <span class="arrow"> → </span>
        <span class="ctitle"> Premium Bluetooth Headphones</span>
        <span class="cardlogo">
          <img src="/static/pictures/earphones.jpg" alt="profession" height="90" width="100">
        </span>
        <span class="explation">
          <p>Experience crystal-clear sound and wireless convenience with these premium Bluetooth headphones. Ideal for music lovers. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          1000+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.6
        </span>
      </span>

      <span class="rcard" id="Core">
        <span class="arrow"> → </span>
        <span class="ctitle"> Vintage Polaroid Camera</span>
        <span class="cardlogo">
          <img src="/static/pictures/camera.jpg" alt="core" height="90" width="100">
        </span>
        <span class="explation">
          <p>Capture moments in retro style with this vintage Polaroid camera. A must-have for photography enthusiasts and collectors alike. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          3w+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          5.0
        </span>
      </span>

      <div class="lcard" id="Romance">
        <span class="arrow"> → </span>
        <span class="ctitle"> Organic Green Tea </span>
        <span class="cardlogo">
          <img src="/static/pictures/tea.jpg" alt="Romance" height="90" width="100">
        </span>
        <span class="explation">
          <p>Enjoy the refreshing taste and numerous health benefits of organic green tea.Start your day with a soothing cup of this beverage.</p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          100+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.5
        </span>
      </div>

      <div class="rcard" id="Everydaylife">
        <span class="arrow"> → </span>
        <span class="ctitle"> Fitness Tracker Watch </span>
        <span class="cardlogo">
          <img src="/static/pictures/xueyaji.jpg" alt="everydaylife" height="90" width="100">
        </span>
        <span class="explation">
          <p> It monitors your heart rate, steps, calories burned, and sleep patterns, helping you maintain an active and healthy lifestyle. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          100+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.5
        </span>
      </div>

      <div class="lcard" id="Research">
        <span class="arrow"> → </span>
        <span class="ctitle"> Professional Chef's Knife Set </span>
        <span class="cardlogo">
          <img src="/static/pictures/knife.jpg" alt="research" height="90" width="100">
        </span>
        <span class="explation">
          <p> Each knife is crafted with precision and features a high-carbon stainless steel blade for exceptional sharpness and durability. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          100+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.5
        </span>
      </div>

      <div class="rcard" id="Dive">
        <span class="arrow"> → </span>
        <span class="ctitle"> Handcrafted Leather Handbag</span>

        <span class="cardlogo">
          <img src="/static/pictures/bag.jpg" alt="dive" height="90" width="100">
        </span>
        <span class="explation">
          <p>  Made from premium full-grain leather, it boasts meticulous craftsmanship, a spacious interior, and elegant detailing. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          100+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.5
        </span>
      </div>

      <div class="lcard" id="Fiction">
        <span class="arrow"> → </span>
        <span class="ctitle"> Designer Sunglasses </span>
        <span class="cardlogo">
          <img src="/static/pictures/glass.jpg" alt="fiction" height="90" width="100">
        </span>
        <span class="explation">
          <p> Made with high-quality materials, these sunglasses provide 100% UV protection while adding a touch of glamour to your look. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          100+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.5
        </span>
      </div>

      <div class="rcard" id="Fun">
        <span class="arrow"> → </span>
        <span class="ctitle"> Smart Home Assistant </span>
        <span class="cardlogo">
          <img src="/static/pictures/jiaju.jpg" alt="fun" height="90" width="100">
        </span>
        <span class="explation">
          <p>  Transform your home into a smart and connected space with this advanced smart home assistant. </p>
        </span>
        <span class="minilogo">
          <img src="/static/pictures/sell.png" alt="articles" height="14" width="14">
          100+　
          <img src="/static/pictures/score.png" alt="comments" height="14" width="14">
          4.5
        </span>
      </div>

    </div> <!-- cards -->

    <div class="link" id="viewall"> View all commodities → </div>

    <!-- 侧栏返回按钮 -->
    <aside>
      <ul>
        <li>
          <a href=" " target="_blank" @click="to_Mine1">关注列表</a>
        </li>
      </ul>
    </aside>

    <!-- 侧栏返回按钮 -->
    <aside1>
      <ul>
        <li>
          <a href=" " target="_blank" @click="Liken">猜我喜欢</a>
        </li>
      </ul>
    </aside1>

  </div>
</template>

<script>
export default {
  name: "Homepage",

  data: function () {
    return {
    }
  },

  methods: {

    //Mine(){  this.$router.push("Mine")},

    // getParams: function () {
    //         // 取到路由带过来的参数
    //         var routerParams = this.$route.query.list;
    //         this.user_list = routerParams;
    // },
    Liken() {
      this.$router.push("Guess_like")
    },
    exit() {
      this.$router.push("/")
    },
    show_detail() {
      this.$router.push('goods_detail')
    },
    to_Mine1() {
      this.$router.push('Mine')
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
  color: rgb(58, 53, 53);
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
  color: rgb(58, 53, 53);
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