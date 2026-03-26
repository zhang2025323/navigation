<template>
  <div class="web-main">
    <div class="type">
      <div class="text">学习<img class="tu" src="~@/assets/icons/书.webp"/>链接</div>
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
      <div class="text">其他<img class="tu" src="~@/assets/icons/gongju.webp"/>链接</div>
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
          id: 16,
          content: "软考",
          link: "https://www.ruankao.org.cn/index.html",
          desc: "计算机技术与软件专业技术资格考试",
          icon1: new URL('@/assets/icons/ruankao.webp', import.meta.url).href,
        },
        {
          id: 21,
          content: "菜鸟学编程",
          link: "https://www.runoob.com/",
          desc: "菜鸟教程-学的不仅是技术，更是梦想！",
          icon1: new URL('@/assets/icons/cainiao.ico', import.meta.url).href,
        },
        {
          id: 6,
          content: "鸿蒙MUI",
          link: "https://mui.dcloud.net.cn/",
          desc: "最接近原生APP体验的高性能前端框架模板",
          icon1: new URL('@/assets/icons/MUI.webp', import.meta.url).href,
        },
        
        {
          id: 8,
          content: "SSM框架",
          link: "https://www.wolai.com/v5Kuct5ZtPeVBk4NBUGBWF",
          desc: "快速掌握：全新SSM+Spring Boot+MyBatis-Plus实战精讲",
          icon1: new URL('@/assets/icons/spring.webp', import.meta.url).href,
        },
        {
          id: 10,
          content: "W3编程",
          link: "https://www.w3school.com.cn/",
          desc: "编程相关学习资料",
          icon1: new URL('@/assets/icons/3.webp', import.meta.url).href,
        },
        {
          id: 0,
          content: "小黑题库",
          link: "http://124.221.48.166/DuiHuanMaWeb/admin/allsofts.php",
          desc: "提供各类考试题库资源&部分的软件下载试题",
          icon1: new URL('@/assets/icons/xh.ico', import.meta.url).href,
        },
        {
          id: 11,
          content: "科德迪克斯",
          link: "https://www.codedex.io/python",
          desc: "国外的游戏开发网站", 
          icon1: new URL('@/assets/icons/Learn.webp', import.meta.url).href,
        },
        {
          id: 9,
          content: "gitee",
          link: "https://gitee.com/",
          desc: "gitee官方网站,可以在上面协同开发",
          icon1: new URL('@/assets/icons/G.ico', import.meta.url).href,
        },
        {
          id: 12,
          content: "GitHub",
          link: "https://github.com/",
          desc: "基于 Git 的代码托管与开发者协作平台",
          icon1: new URL('@/assets/icons/GitHub.webp', import.meta.url).href,
        },
        {
          id: 13,
          content: "Netlify",
          link: "https://www.netlify.com/",
          desc: "面向现代 Web 应用的一站式云开发与部署平台", 
          icon1: new URL('@/assets/icons/Push.svg', import.meta.url).href,
        },
        {
          id: 20,
          content: "又拍云",
          link: "https://console.upyun.com",
          desc: "管理云存储、CDN 加速等云服务的操作后台",
          icon1: new URL('@/assets/icons/upyun.webp', import.meta.url).href,
        },
        {
          id: 16,
          content: "小皮面板",
          link: "https://www.xp.cn/",
          desc: "免费、安全、稳定、高效、易用的服务器管理面板",
          icon1: new URL('@/assets/icons/xp.ico', import.meta.url).href,
        },
        {
          id: 1,
          content: "智慧职教+",
          link: "https://www.icve.com.cn/index",
          desc: "智慧职教官网",
          icon1: new URL('@/assets/icons/zhihui.webp', import.meta.url).href,
        },
        {
          id: 4,
          content: "学习通",
          link: "https://passport2.chaoxing.com/login?fid=12&refer=http%3A%2F%2Fi.chaoxing.com%2Fbase%3Ft%3D1748502859860&space=2",
          desc: "学习通官网",
          icon1: new URL('@/assets/icons/xuexitong.webp', import.meta.url).href,
        },
        {
          id: 2,
          content: "云机电官网",
          link: "https://www.ynmec.edu.cn/",
          desc: "云南机电职业技术学院官网",
          icon1: new URL('@/assets/icons/yunjidian.webp', import.meta.url).href,
        },
        {
          id: 3,
          content: "全国职规赛",
          link: "https://zgs.chsi.com.cn/home",
          desc: "全国大学生职业规划大赛",
          icon1: new URL('@/assets/icons/zhiye.webp', import.meta.url).href,
        },
        
        {
          id: 5,
          content: "理工智慧",
          link: "https://ipraclass.com/index/home",
          desc: "理工智慧数字教材解决方案，助力建设高质量数字教材",
          icon1: new URL('@/assets/icons/ligongzhihui.ico', import.meta.url).href,
        },
        {
          id: 14,
          content: "Forvo",
          link: "https://forvo.com/",
          desc: "让你听到全世界各个国家，真人发音的网站", 
          icon1: new URL('@/assets/icons/Forvo.ico', import.meta.url).href,
        },
        {
          id: 15,
          content: "NEEA",
          link: "https://www.neea.edu.cn/",
          desc: "教育部教育考试院主办的官方平台", 
          icon1: new URL('@/assets/icons/NEEA.webp', import.meta.url).href,
        },
        
      ],

      

      // 把weblist2放在同一个data返回对象里
      weblist2: [
         {
          id: 499,
          uname: "硬核网",
          link: "https://yinghezhinan.com/",
          desc: "够高清才是真硬核~~~",
          icon2: new URL('@/assets/icons/yh.webp', import.meta.url).href,
        },
        {
          id: 500,
          uname: "图欧导航",
          link: "https://tuostudy.upnb.top/#term-360",
          desc: "各种资源，等你去发现~",
          icon2: new URL('@/assets/icons/tuou.webp', import.meta.url).href,
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
          uname: "素材资源",
          link: "https://www.sucaizy.com/",
          desc: "提供各类素材资源",
          icon2: new URL('@/assets/icons/ziyuan.svg', import.meta.url).href,
        },
        
        {
          id: 504,
          uname: "彼岸图网",
          link: "https://pic.netbian.com/index_39.html",
          desc: "背景图和壁纸查找",
          icon2: new URL('@/assets/icons/4k.webp', import.meta.url).href,
        },
        {
          id: 509,
          uname: "良工绘图",
          link: "https://www.lghuitu.com/",
          desc: "制作 流程图、架构图、平面图、电路图和宣传册等",
          icon2: new URL('@/assets/icons/lianggong.webp', import.meta.url).href,
        },
        {
          id: 7,
          uname: "绘图.oi",
          link: "https://app.diagrams.net/",
          desc: "面向团队的安全优先绘图工具",
          icon2: new URL('@/assets/icons/er.webp', import.meta.url).href,
        },
        {
          id: 511,
          uname: "工具箱",
          link: "https://tools.liumingye.cn/",
          desc: "刘明野的工具箱-提供好用，易用的工具",
          icon2: new URL('@/assets/icons/T.webp', import.meta.url).href,
        },
        {
          id: 514,
          uname: "星辰工具箱",
          link: "https://tools.xcadmin.com/",
          desc: "回归现实，发现有趣！~~",
          icon2: new URL('@/assets/icons/xincheng.webp', import.meta.url).href,
        },
        {
          id: 512,
          uname: "软仓",
          link: "https://softs.wandhi.com/#/",
          desc: "资源分享平台",
          icon2: new URL('@/assets/icons/R.webp', import.meta.url).href,
        },
        {
          id: 513,
          uname: "优优软件",
          link: "https://mp.weixin.qq.com/s/79MccblNTv8lTIvdDPJdLQ",
          desc: "官方原版 零病毒 零插件 无捆绑 免费下载",
          icon2: new URL('@/assets/icons/NTI4MWU5.ico', import.meta.url).href,
        },
        {
          id: 506,
          uname: "精品软件",
          link: "https://funxm.top/",
          desc: "提供各类精品的软件下载，无广告，页面简洁",
          icon2: new URL('@/assets/icons/xiazai.webp', import.meta.url).href,
        },
        {
          id: 516,
          uname: "FC8软件库",
          link: "https://fc8.top/",
          desc: "免费软件下载站",
          icon2: new URL('@/assets/icons/fc8.svg', import.meta.url).href,
        },
        {
          id: 515,
          uname: "阿里图标",
          link: "https://www.iconfont.cn",
          desc: "阿里巴巴矢量图标库",
          icon2: new URL('@/assets/icons/albb.webp', import.meta.url).href,
        },
        {
          id: 510,
          uname: "矢量图标",
          link: "https://igoutu.cn/icons",
          desc: "超过1万个图标，无论用于哪种都可以找到！",
          icon2: new URL('@/assets/icons/shiliang.svg', import.meta.url).href,
        },
        
        {
          id: 518,
          uname: "图片转换",
          link: "https://imageconverters.org/zh",
          desc: "免费的图片格式转换网站",
          icon2: new URL('@/assets/icons/imag.svg', import.meta.url).href,
        },
        {
          id: 518,
          uname: "在线压缩",
          link: "https://www.youcompress.com/zh-cn/",
          desc: "文件有点大？试试在线压缩器！",
          icon2: new URL('@/assets/icons/zxys.ico', import.meta.url).href,
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "转换各类PDF文档,电子书,图像,图标等",
          icon2: new URL('@/assets/icons/zaixian.ico', import.meta.url).href,
        },
        {
          id: 505,
          uname: "转换云",
          link: "https://www.zhuanhuanyun.cn/?by=history&from=kkframenew",
          desc: "在线转换音乐格式,每天有5个免费额度",
          icon2: new URL('@/assets/icons/zhuanhuanyun.ico', import.meta.url).href,
        },
        {
          id: 503,
          uname: "语雀",
          link: "https://www.yuque.com/login?goto=https%3A%2F%2Fwww.yuque.com%2Fdashboard",
          desc: "文档类网站",
          icon2: new URL('@/assets/icons/yvque.webp', import.meta.url).href,
        },
      ],
    };
  },
};
</script>