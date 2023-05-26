<template>
  <div>
    <!-- <div>姓名：{{ card_item.name }} </div>
    <div>学号：{{ card_item.stuId }}</div>
    <div v-if="card_item.gender == 1">性别：男</div>
    <div v-else>性别：女 -->
    <!-- </div> -->
    <span class="cardlogo">
      <img src="/static/pictures/fun.PNG" alt="fun" height="70" width="70">
    </span>
    <div>用户名：{{ card_item.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Studentinfo",
  props: ['card_item'],
}
</script>

<style scoped>
.cardlogo {
  float: left;
  /* padding-top: 10px; */
  padding-bottom: 8px;
  padding-left: 10px;
}
</style>