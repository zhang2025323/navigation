<template>
  <div class="web-main">
    <div class="type">
      <div class="text">学习<img class="tu" src="~@/assets/icons/书.png"/>链接</div>
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
      <div class="text">其他<img class="tu" src="~@/assets/icons/gongju.png"/>工具</div>
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
          id: 21,
          content: "菜鸟学习",
          link: "https://www.runoob.com/",
          desc: "菜鸟教程-学的不仅是技术，更是梦想！",
          icon1: new URL('@/assets/icons/cainiao.ico', import.meta.url).href,
        },
        {
          id: 20,
          content: "又拍云控制台",
          link: "https://console.upyun.com",
          desc: "管理云存储、CDN 加速等云服务的操作后台",
          icon1: new URL('@/assets/icons/upyun.png', import.meta.url).href,
        },
        {
          id: 0,
          content: "小黑题库",
          link: "http://124.221.48.166/DuiHuanMaWeb/admin/allsofts.php",
          desc: "提供各类考试题库资源,是软件,提供部分的软件下载试题",
          icon1: new URL('@/assets/icons/xiaohei.webp', import.meta.url).href,
        },
        {
          id: 1,
          content: "智慧职教+",
          link: "https://www.icve.com.cn/index",
          desc: "智慧职教官网",
          icon1: new URL('@/assets/icons/zhihui.png', import.meta.url).href,
        },
        {
          id: 2,
          content: "云机电官网",
          link: "https://www.ynmec.edu.cn/",
          desc: "云南机电职业技术学院的官网",
          icon1: new URL('@/assets/icons/yunjidian.png', import.meta.url).href,
        },
        {
          id: 3,
          content: "全国职规赛",
          link: "https://zgs.chsi.com.cn/home",
          desc: "全国大学生职业规划大赛",
          icon1: new URL('@/assets/icons/zhiye.png', import.meta.url).href,
        },
        {
          id: 4,
          content: "学习通",
          link: "https://passport2.chaoxing.com/login?fid=12&refer=http%3A%2F%2Fi.chaoxing.com%2Fbase%3Ft%3D1748502859860&space=2",
          desc: "学习通官网",
          icon1: new URL('@/assets/icons/xuexitong.png', import.meta.url).href,
        },
        {
          id: 5,
          content: "理工智慧",
          link: "https://ipraclass.com/index/home",
          desc: "数字教育赋能人才培养，出版经验+技术积累+科研能力=理工智慧数字教材解决方案，助力建设高质量数字教材",
          icon1: new URL('@/assets/icons/ligongzhihui.ico', import.meta.url).href,
        },
        {
          id: 6,
          content: "MUI学习",
          link: "https://mui.dcloud.net.cn/",
          desc: "最接近原生APP体验的高性能前端框架",
          icon1: new URL('@/assets/icons/MUI.png', import.meta.url).href,
        },
        {
          id: 7,
          content: "E-R图绘制",
          link: "https://app.diagrams.net/",
          desc: "E-R的画图的工具",
          icon1: new URL('@/assets/icons/er.png', import.meta.url).href,
        },
        {
          id: 8,
          content: "Spring 学习",
          link: "https://www.wolai.com/v5Kuct5ZtPeVBk4NBUGBWF",
          desc: "Spring学习的相关文件笔记",
          icon1: new URL('@/assets/icons/spring.png', import.meta.url).href,
        },
        {
          id: 9,
          content: "gitee",
          link: "https://gitee.com/",
          desc: "gitee官方网站,可以在上面协同开发",
          icon1: new URL('@/assets/icons/G.ico', import.meta.url).href,
        },
        {
          id: 10,
          content: "W3编程学习",
          link: "https://www.w3school.com.cn/",
          desc: "编程的学习资料，里面有一些基础的代码学习和文字讲解",
          icon1: new URL('@/assets/icons/3.png', import.meta.url).href,
        },
        {
          id: 11,
          content: "Codedex",
          link: "https://www.codedex.io/python",
          desc: "国外的游戏开发网站", 
          icon1: new URL('@/assets/icons/Learn.png', import.meta.url).href,
        },
        {
          id: 12,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
          icon1: new URL('@/assets/icons/GitHub.png', import.meta.url).href,
        },
        {
          id: 13,
          content: "Netlify",
          link: "https://www.netlify.com/",
          desc: "一个面向现代 Web 应用的一站式云开发与部署平台", 
          icon1: new URL('@/assets/icons/Push.svg', import.meta.url).href,
        },
        {
          id: 14,
          content: "Forvo",
          link: "https://forvo.com/",
          desc: "一个能够让你听到全世界各个国家，真人发音的网站", 
          icon1: new URL('@/assets/icons/Forvo.ico', import.meta.url).href,
        },
      ],

      

      // 把weblist2放在同一个data返回对象里
      weblist2: [
        {
          id: 500,
          uname: "图欧导航",
          link: "https://tuostudy.upnb.top/#term-360",
          desc: "各种资源，等你去发现~",
          icon2: new URL('@/assets/icons/tuou.png', import.meta.url).href,
        }, 
        {
          id: 501,
          uname: "在线打字",
          link: "http://www.daziba.cn/default.aspx",
          desc: "练习打字的在线打字网站",
          icon2: new URL('@/assets/icons/dazi.ico', import.meta.url).href,
        },
        {
          id: 502,
          uname: "素材资源网",
          link: "https://www.sucaizy.com/",
          desc: "提供各类素材资源",
          icon2: new URL('@/assets/icons/ziyuan.svg', import.meta.url).href,
        },
        {
          id: 503,
          uname: "语雀",
          link: "https://www.yuque.com/login?goto=https%3A%2F%2Fwww.yuque.com%2Fdashboard",
          desc: "文档类网站",
          icon2: new URL('@/assets/icons/yvque.png', import.meta.url).href,
        },
        {
          id: 504,
          uname: "彼岸图网",
          link: "https://pic.netbian.com/index_39.html",
          desc: "背景图和壁纸查找",
          icon2: new URL('@/assets/icons/4k.png', import.meta.url).href,
        },
        {
          id: 505,
          uname: "转换云",
          link: "https://www.zhuanhuanyun.cn/?by=history&from=kkframenew",
          desc: "提供了在线转换音乐格式,有额度,每天有5个的额度",
          icon2: new URL('@/assets/icons/zhuanhuanyun.ico', import.meta.url).href,
        },
        {
          id: 506,
          uname: "精品软件",
          link: "https://funxm.top/",
          desc: "提供各类精品的软件下载，无广告，页面简洁",
          icon2: new URL('@/assets/icons/xiazai.png', import.meta.url).href,
        },
        {
          id: 507,
          uname: "资源分享",
          link: "https://link3.cc/ym09",
          desc: "提供各类优质资源免费分享",
          icon2: new URL('@/assets/icons/link3.ico', import.meta.url).href,
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
          icon2: new URL('@/assets/icons/zaixian.ico', import.meta.url).href,
        },
        {
          id: 509,
          uname: "良工绘图",
          link: "https://www.lghuitu.com/",
          desc: "在线制作 流程图、架构图、平面图、电路图和宣传册",
          icon2: new URL('@/assets/icons/lianggong.png', import.meta.url).href,
        },
        {
          id: 510,
          uname: "免费矢量图标",
          link: "https://igoutu.cn/icons",
          desc: "超过1万个图标，无论用于哪种都可以找到！",
          icon2: new URL('@/assets/icons/shiliang.svg', import.meta.url).href,
        },
        {
          id: 511,
          uname: "工具箱",
          link: "https://tools.liumingye.cn/",
          desc: "刘明野的工具箱-提供好用，易用的工具",
          icon2: new URL('@/assets/icons/T.png', import.meta.url).href,
        },
        {
          id: 512,
          uname: "软仓",
          link: "https://softs.wandhi.com/#/",
          desc: "资源分享平台",
          icon2: new URL('@/assets/icons/R.jpg', import.meta.url).href,
        },
        {
          id: 513,
          uname: "优优软件安装",
          link: "https://mp.weixin.qq.com/s/79MccblNTv8lTIvdDPJdLQ",
          desc: "官方原版 零病毒 零插件 无捆绑 免费下载",
          icon2: new URL('@/assets/icons/NTI4MWU5.ico', import.meta.url).href,
        },
        {
          id: 514,
          uname: "星辰工具箱",
          link: "https://tools.xcadmin.com/",
          desc: "回归现实，发现有趣！~~",
          icon2: new URL('@/assets/icons/xincheng.png', import.meta.url).href,
        },
        {
          id: 515,
          uname: "Iconfont",
          link: "https://www.iconfont.cn",
          desc: "阿里巴巴矢量图标库",
          icon2: new URL('@/assets/icons/albb.png', import.meta.url).href,
        },
      ],
    };
  },
};
</script>