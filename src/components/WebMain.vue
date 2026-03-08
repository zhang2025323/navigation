<template>
  <div class="web-main">
    <div class="type1">
      <div class="text">学习导航</div>
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
      <div class="text">工具导航</div>
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
          content: "智慧职教",
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
          content: "理工智慧+",
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
          id: 13,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 14,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 15,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 16,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 17,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 18,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 19,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 20,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 21,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 22,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 23,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 24,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 25,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 26,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 27,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 28,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 29,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 30,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 31,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 32,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 33,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 34,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 35,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 36,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 37,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 38,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 39,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 40,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 41,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 42,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },
        {
          id: 43,
          content: "GitHub",
          link: "https://github.com/",
          desc: "GitHub 是全球最大的基于 Git 的代码托管与开发者协作平台",
        },

      ],

      // 把weblist2放在同一个data返回对象里
      weblist2: [
        {
          id: 500,
          uname: "助学网",
          link: "https://a.zhuxuelo.top/index/chaxun",
          desc: "网课“快速学习”的一个网站",
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
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },

        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },

        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        {
          id: 508,
          uname: "在线转换",
          link: "https://www.aconvert.com/cn/",
          desc: "在线转换各类PDF文档,电子书,图像,图标,视频,音频和压缩文件",
        },
        
      ],
    };
  },
};
</script>

<style>
.web-main {
  width: auto;
  min-height: 900px;
  background-color: beige;
  margin: 20px auto;
  padding: 0 10px;
  box-sizing: border-box;
}
.type1 {
  min-height: 445px;
  color: black;
  font-size: 10px;
  background-color: rgb(215, 215, 215);
}
.type2 {
  min-height: 445px;
  color: black;
  font-size: 10px;
  background-color: rgb(215, 215, 215);
  margin-top: 10px;
}
.text {
  font: normal bold 21px 微软雅黑;
  background-color: #f65c5c;
  text-indent: 1em;
}
.web {
  width: 97px;
  height: 50px;
  border-radius: 10%;
  text-align: center;
  margin: 10px;
  background-color: #decd8a;
  font-size: 16px;
  font-family: 微软雅黑;
  line-height: 50px;
  box-shadow: 6px 2px 6px;
  position: relative; /* 让tooltip相对于盒子定位 */
}

.tooltip {
  position: absolute;
  top: -30px; /* 显示在盒子上方 */
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  background: #333;
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap; /* 防止信息换行 */
  opacity: 0; /* 默认透明（隐藏） */
  visibility: hidden; /* 隐藏不占空间 */
  transition: all 0.2s; /* 过渡动画 */
}
/* 鼠标悬浮盒子时，显示tooltip */
.web:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -65px; /* 稍微上移一点，增加动画感 */
}
/* 可选：加个小三角 */
.tooltip::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent; /* 三角朝下 */
}

.web a {
  text-decoration: none;
  color: #333;
}
.web a:hover {
  color: #409eff;
}
.N {
  display: flex;
  flex-wrap: wrap;
}
</style>