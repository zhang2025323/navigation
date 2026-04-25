import aiyaaiyaLrc from '../assets/lyrics/BY2-爱丫爱丫.lrc'
import yfLrc from '../assets/lyrics/玉芬-你像风一样出现.lrc'
import jcxLrc from '../assets/lyrics/江辰-锈.lrc'

export const musicList = [
  {
    id: 5,
    title: '绣',
    artist: '江辰',
    cover: new URL('../assets/images/xiu.jpg', import.meta.url).href,
    audio: new URL('../assets/江辰-锈.mp3', import.meta.url).href,
    lyrics: jcxLrc
  },
  {
    id: 4,
    title: '你像风一样出现',
    artist: '玉芬',
    cover: new URL('../assets/images/yf.jpg', import.meta.url).href,
    audio: new URL('../assets/玉芬-你像风一样出现.mp3', import.meta.url).href,
    lyrics: yfLrc
  },
  {
    id: 3,
    title: '爱丫爱丫',
    artist: 'BY2',
    cover: new URL('../assets/images/aiyaiy.jpg', import.meta.url).href,
    audio: new URL('../assets/爱丫爱丫-BY2.mp3', import.meta.url).href,
    lyrics: aiyaaiyaLrc
  },
  {
    id: 2,
    title: '时光若易碎瓷(Time is Broken)',
    artist: 'ks泳',
    cover: new URL('../assets/images/time.jpg', import.meta.url).href,
    audio: new URL('../assets/Timeisbroken.mp3', import.meta.url).href,
    lyrics: '[00:00.00]歌名：时光若易碎瓷(Time is Broken)\n[00:02.00]歌手：ks泳\n[00:05.00]纯音乐，请欣赏\n'
  },
  {
    id: 1,
    title: 'Wasted',
    artist: 'huken&Murkish&harmony',
    cover: new URL('../assets/images/w.jpg', import.meta.url).href,
    audio: new URL('../assets/wasted.mp3', import.meta.url).href,
    lyrics: '[00:00.00]歌名：Wasted\n[00:02.00]歌手：huken&Murkish&harmony\n[00:05.00]纯音乐，请欣赏\n'
  },
]

/*
=====================================
🎵 如何添加新歌曲？（超简单！）
=====================================

直接在 musicList 数组中添加新歌即可！

```javascript
{
  id: 4,
  title: '歌曲标题',
  artist: '歌手名',
  cover: new URL('../assets/images/封面图片.jpg', import.meta.url).href,
  audio: new URL('../assets/音乐文件.mp3', import.meta.url).href,
  lyrics: 你的歌词变量 // 或者直接写歌词字符串
}
```

✅ **歌词支持两种方式：**
   方式一：导入 .lrc 文件（推荐）
   ```javascript
   import 歌词变量 from '../assets/lyrics/你的歌词.lrc?raw'
   ```

   方式二：直接在代码里写歌词（适合短歌词或测试）
   ```javascript
   lyrics: `[00:00.00]第一句歌词
[00:05.00]第二句歌词`
   ```

=====================================
📂 资源文件存放位置
=====================================
- 🎵 音乐文件：`src/assets/`
- 🖼️ 封面图片：`src/assets/images/`
- 📝 歌词文件：`src/assets/lyrics/`（存放你的 .lrc 文件）

=====================================
💡 歌词格式
=====================================
- [时间]歌词内容
- 时间格式：[mm:ss.xx]
- 例子：[00:01.23]第一句歌词

=====================================
*/
