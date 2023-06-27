<template>
  <div id="header">
    <div class="select-page-btn" flex gap4 justify-center pt1 h40px>
      <DvButton
        v-for="(item, index) in state.buttonList" :key="index" :border="item.border"
        :font-size="14" :font-color="fontColor" :color="color" w100px
        @click="console.log(item.title)"
      >
        {{ item.title }}
      </DvButton>
    </div>
    <div class="title">
      智慧城市大屏平台
    </div>
    <div class="time">
      {{ now }}
      <a px5 text-6>返回首页</a>
      <a px5 text-5>登出</a>
    </div>
    <Decoration5 absolute top="4%" :color="['#516AA6', '#516AA6']" style="width: 100%; height: 40px" :dur="5" />
  </div>
  <div w30 ml10>
    <DvButton :border="BorderBox12" @click="changeColor">
      测试
    </DvButton>
  </div>
</template>

<script lang="ts" setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { reactive, ref } from 'vue'
import { BorderBox12, Decoration5, Button as DvButton } from '@kjgl77/datav-vue3'

const now = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

const fontColor = ref('#e18a3b')
const color = ref('#a6559d')

const state = reactive({
  currentIndex: 0,
  buttonList: [
    {
      title: '智慧政务',
      border: 'Border1',
    },
    {
      title: '智慧水利',
      border: 'Border2',
    },
    {
      title: '智慧交通',
      border: 'Border3',
    },
    {
      title: '智慧医疗',
      border: 'Border4',
    },
    {
      title: '智慧农业',
      border: 'Border5',
    },
    {
      title: '智慧城市',
      border: 'Border6',
    },
  ],
})

function changeColor() {
  fontColor.value = fontColor.value === '#e18a3b' ? '#a6559d' : '#e18a3b'
  color.value = color.value === '#a6559d' ? '#e18a3b' : '#a6559d'
}
</script>

<style lang="less" scoped>
#header {
  width: 100%;
  height: 80px;
  background-color: #001534;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 3%;

  .border {
    position: absolute;
    top: 4%;
  }

  .title {
    flex:2;
    padding-left: 180px;
    padding-top: 0.5%;
    font-size: 25px;
    color: #b4e4ff;
    text-shadow: 0 0 15px rgb(5, 119, 250);
    font-weight: bold;
    font-family: '微软雅黑';
  }

  .time {
    font-family: DS-DIGI;
    margin-top: 0.5%;
    font-size: 1.8rem;
    color: #b4e4ff;
    text-shadow: 0 0 10px rgb(5, 119, 250);
  }

  .logout {
    margin-top: 1.6%;
    font-size: 14px;
    color: #fff;
    padding-left: 10px;
  }

  .select-page-btn {
    flex:1;
    font-size: 25px;
    padding-left: 15px;
  }
}
</style>
