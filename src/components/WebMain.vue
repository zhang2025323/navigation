<template>
  <div class="web-main">
    <div class="type1">
      <div class="text">学习<img class="tu" src="~@/assets/icons/书.png"/>导航</div>
      <div class="N">
        <div class="web" v-for="item in weblist1" :key="item.id">
          <a :href="item.link" target="_blank">
            {{ item.content }}
          </a>
          <!-- 悬浮信息：默认隐藏，hover时显示 -->
          <span class="tooltip">{{ item.desc }}</span>
        </div>
      </div>
    </div>
    <div class="type2">
      <div class="text">工具<img class="tu" src="~@/assets/icons/gongju.png"/>导航</div>
      <div class="N">
        <div class="web" v-for="item in weblist2" :key="item.id">
          <a :href="item.link" target="_blank">
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
          content: "小黑题库",
          link: "http://124.221.48.166/DuiHuanMaWeb/admin/allsofts.php",
          desc: "提供各类考试题库资源,是软件,提供部分的软件下载试题",
        },
        {
          id: 1,
          content: "智慧职教+",
          link: "https://www.icve.com.cn/index",
          desc: "智慧职教官网",
        },
        {
          id: 2,
          content: "云机电",
          link: "https://www.ynmec.edu.cn/",
          desc: "云南机电职业技术学院的官网",
        },
        {
          id: 3,
          content: "全国职规赛",
          link: "https://zgs.chsi.com.cn/home",
          desc: "全国大学生职业规划大赛",
        },
        {
          id: 4,
          content: "学习通",
          link: "https://passport2.chaoxing.com/login?fid=12&refer=http%3A%2F%2Fi.chaoxing.com%2Fbase%3Ft%3D1748502859860&space=2",
          desc: "学习通官网",
        },
        {
          id: 5,
          content: "理工智慧",
          link: "https://ipraclass.com/index/home",
          desc: "数字教育赋能人才培养，出版经验+技术积累+科研能力=理工智慧数字教材解决方案，助力建设高质量数字教材",
        },
        {
          id: 6,
          content: "MUI学习",
          link: "https://mui.dcloud.net.cn/",
          desc: "最接近原生APP体验的高性能前端框架",
        },
        {
          id: 7,
          content: "E-R图绘制",
          link: "https://app.diagrams.net/",
          desc: "E-R的画图的工具",
        },
        {
          id: 8,
          content: "Sprin学习",
          link: "https://www.wolai.com/v5Kuct5ZtPeVBk4NBUGBWF",
          desc: "Spring学习的相关文件笔记",
        },
        {
          id: 9,
          content: "gitee",
          link: "https://gitee.com/",
          desc: "gitee官方网站,可以在上面协同开发",
        },
        {
          id: 10,
          content: "W3编程学习",
          link: "https://www.w3school.com.cn/",
          desc: "编程的学习资料，里面有一些基础的代码学习和文字讲解",
        },
        {
          id: 11,
          content: "Codedex",
          link: "https://www.codedex.io/python",
          desc: "国外的游戏开发网站", 
        },
        {
          id: 12,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 13,
          content: "Netlify",
          link: "https://www.netlify.com/",
          desc: "一个面向现代 Web 应用的一站式云开发与部署平台", 
        },
      ],

      // 把weblist2放在同一个data返回对象里
      weblist2: [
        {
          id: 500,
          uname: "图欧学习导航",
          link: "https://a.zhuxuelo.top/index/chaxun",
          desc: "各种资源，等你去发现~",
        }, // 注意：id要唯一，这里改成20开始自增
        {
          id: 501,
          uname: "在线打字",
          link: "http://www.daziba.cn/default.aspx",
          desc: "练习打字的在线打字网站",
        },
        {
          id: 502,
          uname: "素材资源网",
          link: "https://www.sucaizy.com/",
          desc: "提供各类素材资源",
        },
        {
          id: 503,
          uname: "语雀",
          link: "https://www.yuque.com/login?goto=https%3A%2F%2Fwww.yuque.com%2Fdashboard",
          desc: "文档类网站",
        },
        {
          id: 504,
          uname: "彼岸图网",
          link: "https://pic.netbian.com/index_39.html",
          desc: "背景图和壁纸查找",
        },
        {
          id: 505,
          uname: "转换云",
          link: "https://www.zhuanhuanyun.cn/?by=history&from=kkframenew",
          desc: "提供了在线转换音乐格式,有额度,每天有5个的额度",
        },
        {
          id: 506,
          uname: "精品软件分享",
          link: "https://funxm.top/",
          desc: "提供各类精品的软件下载，无广告，页面简洁",
        },
        {
          id: 507,
          uname: "资源分享",
          link: "https://link3.cc/ym09",
          desc: "提供各类优质资源免费分享",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 509,
          uname: "良工绘图",
          link: "https://www.lghuitu.com/",
          desc: "在线制作 流程图、架构图、平面图、电路图和宣传册",
        },
        {
          id: 510,
          uname: "免费矢量图标",
          link: "https://igoutu.cn/icons",
          desc: "超过1万个图标，无论用于哪种都可以找到！",
        },
        {
          id: 511,
          uname: "工具箱",
          link: "https://tools.liumingye.cn/",
          desc: "刘明野的工具箱-提供好用，易用的工具",
        },
        {
          id: 512,
          uname: "软仓",
          link: "https://softs.wandhi.com/#/",
          desc: "资源分享平台",
        },
        {
          id: 513,
          uname: "优优软件安装",
          link: "https://mp.weixin.qq.com/s/79MccblNTv8lTIvdDPJdLQ",
          desc: "官方原版 零病毒 零插件 无捆绑 免费下载",
        },
      
      ],
    };
  },
};
</script>
