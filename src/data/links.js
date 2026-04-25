// 重新组织的链接数据 - 更清晰的分类
// 每个分类包含：id, name, icon, links

const categories = [
  {
    id: 'speed',
    name: '便捷链接',
    icon: '⚡',
    links: [
      { id: 1001, title: "微信文件传输助手", link: "https://filehelper.weixin.qq.com/", desc: "使用文件传输助手，手机电脑轻松互传文件", icon: new URL('@/assets/icons/weixin.ico', import.meta.url).href },
      { id: 1002, title: "VS Code", link: "https://code.visualstudio.com/download", desc: "点击跳转下载链接", icon: new URL('@/assets/icons/vscode.ico', import.meta.url).href },
      { id: 1003, title: "Node.js", link: "https://nodejs.org/en/download", desc: "点击跳转下载链接", icon: new URL('@/assets/icons/node.png', import.meta.url).href },
      { id: 1004, title: "Navicat 17", link: "https://www.navicat.com.cn/download/navicat-premium-lite", desc: "点击跳转下载链接", icon: new URL('@/assets/icons/Navicat.ico', import.meta.url).href },
    ],
  },

  {
    id: 'music',
    name: '我喜欢的音乐',
    icon: '🎵',
    links: null,
  },

  {
    id: 'learning',
    name: '学习资源',
    icon: '📚',
    links: [
      { id: 1, title: "软考", link: "https://www.ruankao.org.cn/index.html", desc: "计算机技术与软件专业技术资格考试", icon: new URL('@/assets/icons/ruankao.webp', import.meta.url).href },
      { id: 2, title: "菜鸟学编程", link: "https://www.runoob.com/", desc: "菜鸟教程-学的不仅是技术，更是梦想！", icon: new URL('@/assets/icons/cainiao.ico', import.meta.url).href },
      { id: 3, title: "W3编程", link: "https://www.w3school.com.cn/", desc: "编程相关学习资料", icon: new URL('@/assets/icons/3.webp', import.meta.url).href },
      { id: 4, title: "鸿蒙MUI", link: "https://mui.dcloud.net.cn/", desc: "最接近原生APP体验的高性能前端框架模板", icon: new URL('@/assets/icons/MUI.webp', import.meta.url).href },
      { id: 5, title: "鸿蒙文档", link: "https://developer.huawei.com/consumer/cn/doc/", desc: "鸿蒙官网", icon: new URL('@/assets/icons/huawei.webp', import.meta.url).href },
      { id: 6, title: "SSM框架", link: "https://www.wolai.com/v5Kuct5ZtPeVBk4NBUGBWF", desc: "快速掌握：全新SSM+Spring Boot+MyBatis-Plus实战精讲", icon: new URL('@/assets/icons/spring.webp', import.meta.url).href },
      { id: 7, title: "ECharts", link: "https://echarts.apache.org/zh/index.html", desc: "ECharts数据可视化", icon: new URL('@/assets/icons/echarts.webp', import.meta.url).href },
      { id: 8, title: "MQTT", link: "https://www.mqtt.cn/", desc: "MQTT协议中文站", icon: new URL('@/assets/icons/mqtt.webp', import.meta.url).href },
      { id: 9, title: "Sa-Token", link: "https://sa-token.cc/index.html", desc: "权限认证框架", icon: new URL('@/assets/icons/Sa.webp', import.meta.url).href },
      { id: 10, title: "小黑题库", link: "http://124.221.48.166/DuiHuanMaWeb/admin/allsofts.php", desc: "提供各类考试题库资源", icon: new URL('@/assets/icons/xh.ico', import.meta.url).href },
      { id: 11, title: "科德迪克斯", link: "https://www.codedex.io/python", desc: "国外的游戏开发学习网站", icon: new URL('@/assets/icons/Learn.webp', import.meta.url).href },
      { id: 12, title: "Gitee", link: "https://gitee.com/", desc: "代码托管与协作平台", icon: new URL('@/assets/icons/G.ico', import.meta.url).href },
      { id: 13, title: "GitHub", link: "https://github.com/", desc: "全球最大的代码托管平台", icon: new URL('@/assets/icons/GitHub.webp', import.meta.url).href },
      { id: 14, title: "Netlify", link: "https://www.netlify.com/", desc: "一站式云开发与部署平台", icon: new URL('@/assets/icons/Push.svg', import.meta.url).href },
      { id: 15, title: "又拍云", link: "https://console.upyun.com", desc: "云存储、CDN加速服务", icon: new URL('@/assets/icons/upyun.webp', import.meta.url).href },
      { id: 16, title: "小皮面板", link: "https://www.xp.cn/", desc: "免费服务器管理面板", icon: new URL('@/assets/icons/xp.ico', import.meta.url).href },
      { id: 17, title: "智慧职教+", link: "https://www.icve.com.cn/index", desc: "智慧职教官网", icon: new URL('@/assets/icons/zhihui.webp', import.meta.url).href },
      { id: 18, title: "学习通", link: "https://passport2.chaoxing.com/login", desc: "学习通官网", icon: new URL('@/assets/icons/xuexitong.webp', import.meta.url).href },
      { id: 19, title: "云机电官网", link: "https://www.ynmec.edu.cn/", desc: "云南机电职业技术学院官网", icon: new URL('@/assets/icons/yunjidian.webp', import.meta.url).href },
      { id: 20, title: "全国职规赛", link: "https://zgs.chsi.com.cn/home", desc: "全国大学生职业规划大赛", icon: new URL('@/assets/icons/zhiye.webp', import.meta.url).href },
      { id: 21, title: "理工智慧", link: "https://ipraclass.com/index/home", desc: "理工智慧数字教材解决方案", icon: new URL('@/assets/icons/ligongzhihui.ico', import.meta.url).href },
      { id: 22, title: "Forvo", link: "https://forvo.com/", desc: "真人发音网站", icon: new URL('@/assets/icons/Forvo.ico', import.meta.url).href },
      { id: 23, title: "NEEA", link: "https://www.neea.edu.cn/", desc: "教育部教育考试院官方平台", icon: new URL('@/assets/icons/NEEA.webp', import.meta.url).href },
    ]
  },
  {
    id: 'ai',
    name: 'AI工具',
    icon: '🤖',
    links: [
      { id: 101, title: "小布助手", link: "https://xiaobu.coloros.com/chat/", desc: "OPPO推出的系统级AI智能助手", icon: new URL('@/assets/icons/xiaobu.webp', import.meta.url).href },
      { id: 102, title: "豆包", link: "https://www.doubao.com/chat/", desc: "为你答疑解惑，提供灵感", icon: new URL('@/assets/icons/豆包.webp', import.meta.url).href },
      { id: 103, title: "DeepSeek", link: "https://www.deepseek.com/zh/", desc: "国产大模型", icon: new URL('@/assets/icons/dpsk.svg', import.meta.url).href },
      { id: 104, title: "千问", link: "https://tongyi.aliyun.com/qianwen/", desc: "阿里巴巴推出的AI助手", icon: new URL('@/assets/icons/qianwen.webp', import.meta.url).href },
      { id: 105, title: "Kimi", link: "https://www.kimi.com/zh/", desc: "长文本AI智能助手", icon: new URL('@/assets/icons/kimi.ico', import.meta.url).href },
      { id: 106, title: "Jitter", link: "https://jitter.video/", desc: "将LOGO变成动态效果", icon: new URL('@/assets/icons/jttr.webp', import.meta.url).href },
      { id: 107, title: "飞书 AI", link: "https://www.feishu.cn/", desc: "字节跳动旗下工作平台", icon: new URL('@/assets/icons/feishu.image', import.meta.url).href },
      { id: 110, title: "Toolify", link: "https://www.toolify.ai/zh/", desc: "AI工具导航", icon: new URL('@/assets/icons/too.ico', import.meta.url).href },
    ]
  },
  {
    id: 'tools',
    name: '实用工具',
    icon: '🛠️',
    links: [
      { id: 201, title: "在线打字", link: "http://www.daziba.cn/default.aspx", desc: "练习打字的在线打字网站", icon: new URL('@/assets/icons/dazi.ico', import.meta.url).href },
      { id: 202, title: "打字星球", link: "https://www.type.fun/", desc: "从打字零基础到盲打大师", icon: new URL('@/assets/icons/dzxq.ico', import.meta.url).href },
      { id: 203, title: "素材资源", link: "https://www.sucaizy.com/", desc: "提供各类素材资源", icon: new URL('@/assets/icons/ziyuan.svg', import.meta.url).href },
      { id: 204, title: "彼岸图网", link: "https://pic.netbian.com/index_39.html", desc: "背景图和壁纸查找", icon: new URL('@/assets/icons/4k.webp', import.meta.url).href },
      { id: 205, title: "良工绘图", link: "https://www.lghuitu.com/", desc: "制作流程图、架构图、电路图等", icon: new URL('@/assets/icons/lianggong.webp', import.meta.url).href },
      { id: 206, title: "Diagrams", link: "https://app.diagrams.net/", desc: "面向团队的安全优先绘图工具", icon: new URL('@/assets/icons/er.webp', import.meta.url).href },
      { id: 207, title: "ProcessOn", link: "https://www.processon.com/", desc: "免费在线流程图思维导图", icon: new URL('@/assets/icons/on.webp', import.meta.url).href },
      { id: 208, title: "刘明野工具箱", link: "https://tools.liumingye.cn/", desc: "提供好用易用的工具", icon: new URL('@/assets/icons/T.webp', import.meta.url).href },
      { id: 209, title: "星辰工具箱", link: "https://tools.xcadmin.com/", desc: "回归现实，发现有趣", icon: new URL('@/assets/icons/xincheng.webp', import.meta.url).href },
      { id: 210, title: "软仓", link: "https://softs.wandhi.com/#/", desc: "资源分享平台", icon: new URL('@/assets/icons/R.webp', import.meta.url).href },
      { id: 211, title: "优优软件", link: "https://mp.weixin.qq.com/s/79MccblNTv8lTIvdDPJdLQ", desc: "官方原版软件下载", icon: new URL('@/assets/icons/NTI4MWU5.ico', import.meta.url).href },
      { id: 212, title: "精品软件", link: "https://funxm.top/", desc: "各类精品软件下载，无广告", icon: new URL('@/assets/icons/xiazai.webp', import.meta.url).href },
      { id: 213, title: "FC8软件库", link: "https://fc8.top/", desc: "免费软件下载站", icon: new URL('@/assets/icons/fc8.svg', import.meta.url).href },
      { id: 214, title: "阿里图标", link: "https://www.iconfont.cn", desc: "阿里巴巴矢量图标库", icon: new URL('@/assets/icons/albb.webp', import.meta.url).href },
      { id: 215, title: "矢量图标", link: "https://igoutu.cn/icons", desc: "超过1万个图标", icon: new URL('@/assets/icons/shiliang.svg', import.meta.url).href },
      { id: 216, title: "图片转换", link: "https://imageconverters.org/zh", desc: "免费的图片格式转换", icon: new URL('@/assets/icons/imag.svg', import.meta.url).href },
      { id: 217, title: "在线压缩", link: "https://www.youcompress.com/zh-cn/", desc: "文件在线压缩", icon: new URL('@/assets/icons/zxys.ico', import.meta.url).href },
      { id: 218, title: "在线转换", link: "https://www.aconvert.com/cn/", desc: "转换各类文档、图像等", icon: new URL('@/assets/icons/zaixian.ico', import.meta.url).href },
      { id: 219, title: "转换云", link: "https://www.zhuanhuanyun.cn/", desc: "在线转换音乐格式", icon: new URL('@/assets/icons/zhuanhuanyun.ico', import.meta.url).href },
      { id: 220, title: "语雀", link: "https://www.yuque.com/", desc: "文档类网站", icon: new URL('@/assets/icons/yvque.webp', import.meta.url).href },
      { id: 221, title: "在线抠图", link: "https://zh.bgsub.com/pages/#/", desc: "一键抠图工具", icon: new URL('@/assets/icons/kt.ico', import.meta.url).href },
      { id: 222, title: "TinyWow", link: "https://www.tinywowcn.com/", desc: "轻量型AI工具集合", icon: new URL('@/assets/icons/w.ico', import.meta.url).href },
    ]
  },
  {
    id: 'notes',
    name: '个人笔记',
    icon: '📝',
    links: [
      { id: 301, title: "Web 部署", link: "https://www.yuque.com/g/u54918272/pwefbc/bkzbwf6hz2fatg7g/collaborator/join?token=Ap5jxnkXDGxi4j97", desc: "Vue3 + Vite 项目部署至 GitHub Pages 全攻略", icon: new URL('@/assets/icons/wen.webp', import.meta.url).href },
    ]
  },
  {
    id: 'recommend',
    name: '推荐网站',
    icon: '⭐',
    links: [
      { id: 401, title: "硬核指南", link: "https://yinghezhinan.com/", desc: "够高清才是真硬核~~~", icon: new URL('@/assets/icons/yh.webp', import.meta.url).href },
      { id: 402, title: "图欧导航", link: "https://tuostudy.upnb.top/", desc: "各种资源，等你去发现", icon: new URL('@/assets/icons/tuou.webp', import.meta.url).href },
    ]
  },
  {
    id: 'personality',
    name: '人格测试',
    icon: '🔎',
    links: [
      { id: 501, title: "TRUMEE", link: "https://trumeelab.com/", desc: "真我实验室，做真实的自己", icon: new URL('@/assets/icons/zw.ico', import.meta.url).href },
    ],
  },
]

export default categories
