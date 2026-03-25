<template>
  <div class="web-main">
    <div class="type">
      <div class="text">个人<img class="tu" src="~@/assets/icons/书.webp"/>笔记</div>
      <div class="N">
        <div class="web" v-for="item in weblist1" :key="item.id">
          <a :href="item.link" target="_blank" class="web-a">
            <!-- 添加图标渲染 -->
            <img v-if="item.icon1" :src="item.icon1" class="web-icon" />
            {{ item.content }}
          </a>
          <!-- 悬浮信息：默认隐藏，hover时显示 -->
          <span class="tooltip">{{ item.desc }}</span>
        </div>
      </div>
    </div>
    <div class="type">
      <div class="text">AI<img class="tu" src="~@/assets/icons/人工智能.webp"/>链接</div>
      <div class="N">
        <div class="web" v-for="item in weblist2" :key="item.id">
          <a :href="item.link" target="_blank" class="web-a">
            <!-- 添加图标渲染 -->
              <img v-if="item.icon2" :src="item.icon2" class="web-icon" />
              {{ item.uname }}
          </a>
          <!-- 悬浮信息：默认隐藏，hover时显示 -->
          <span class="tooltip">{{ item.desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weblist1: [
        {
          id: 0,
          content: "GitHub部署",
          link: "https://www.yuque.com/g/u54918272/pwefbc/bkzbwf6hz2fatg7g/collaborator/join?token=Ap5jxnkXDGxi4j97&source=doc_collaborator# 《Vue3 + Vite 项目部署至 GitHub Pages 全攻略》",
          desc: "温馨提示:需要注册登陆后才能访问哦~",
          icon1: new URL('@/assets/icons/wen.webp', import.meta.url).href,
        },

      ],

      

      // 把weblist2放在同一个data返回对象里
      weblist2: [
        {
          id: 513,
          uname: "小布助手",
          link: "https://xiaobu.coloros.com/chat/",
          desc: " OPPO 推出的系统级 AI 智能助手",
          icon2: new URL('@/assets/icons/xiaobu.webp', import.meta.url).href,
        }, 
        {
          id: 514,
          uname: "豆包",
          link: "https://www.doubao.com/chat/",
          desc: "豆包为你答疑解惑，提供灵感，辅助创作",
          icon2: new URL('@/assets/icons/豆包.webp', import.meta.url).href,
        }, 
        {
          id: 520,
          uname: "DeepSeek",
          link: "https://www.deepseek.com/zh/",
          desc: "国产大模型",
          icon2: new URL('@/assets/icons/dpsk.svg', import.meta.url).href,
        }, 
        {
          id: 521,
          uname: "千问",
          link: "https://tongyi.aliyun.com/qianwen/",
          desc: "阿里巴巴集团推出的AI助手",
          icon2: new URL('@/assets/icons/qianwen.webp', import.meta.url).href,
        }, 
        {
          id: 522,
          uname: "Kimi",
          link: "https://www.kimi.com/zh/",
          desc: "月之暗面研发的长文本 AI 智能助手",
          icon2: new URL('@/assets/icons/kimi.ico', import.meta.url).href,
        }, 
        {
          id: 515,
          uname: "Jitter",
          link: "https://jitter.video/",
          desc: "将你的LOGO变成动态效果的网站",
          icon2: new URL('@/assets/icons/jttr.webp', import.meta.url).href,
        }, 
        {
          id: 516,
          uname: "飞书 AI",
          link: "https://www.feishu.cn/",
          desc: "字节跳动旗下工作平台，让工作更简单",
          icon2: new URL('@/assets/icons/feishu.image', import.meta.url).href,
        }, 
        {
          id: 516,
          uname: "美图设计室",
          link: "https://www.designkit.cn/?channel=sllbd575&bd_vid=10322754193813292888",
          desc: "一键生成你想要的图片",
          icon2: new URL('@/assets/icons/meitu.ico', import.meta.url).href,
        }, 
        {
          id: 517,
          uname: "墨刀",
          link: "https://modao.cc/ad/aiprototype?utm_channel=SEM&utm_source=baidu&utm_medium=modao00&utm_term_space=JP-AI&utm_keyword=gemdesign&bd_vid=11077466852706140466",
          desc: "AI生成可编辑原型图",
          icon2: new URL('@/assets/icons/modao.ico', import.meta.url).href,
        },
        {
          id: 518,
          uname: "Tools",
          link: "https://pidoutv.com/sites/38557.html",
          desc: "由 Dverso Studio 推出的 在线 AI 抠图与背景去除工具",
          icon2: new URL('@/assets/icons/tools.webp', import.meta.url).href,
        },
        {
          id: 519,
          uname: "码上飞",
          link: "https://www.codeflying.net/my-home",
          desc: "用手机浏览器，就能生成一个带后台的小程序、APP和网站",
          icon2: new URL('@/assets/icons/mashangfei.ico', import.meta.url).href,
        },
      
      ],
    };
  },
};
</script>