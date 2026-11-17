# 🐕 线条小狗 IP 乐园

一个以「线条小狗」为主角、聚合多个热门 IP 的主题互动网站。

> Maltese IP Paradise — an interactive multi-IP themed website built with pure front-end technologies (HTML5 / CSS3 / JavaScript / Vue 2).

源码仓库：[github.com/1856218/ip-word](https://github.com/1856218/ip-word)

## 主要功能

- 🌳 **大树果子拖拽收藏**：把左侧果子拖到大树上收藏，双击移除，数据保存在 localStorage
- 🎨 **多 IP 主题切换**：点击果子，全站配色随之切换（10 个 IP，CSS 变量实现）
- 🎰 **盲盒抽卡 + 卡片册**：随机抽取普通 / 稀有 / 传说卡面，可在卡片册中查看
- 🏆 **成就系统**：首次收藏、集齐多个果子等成就自动解锁
- 🔐 **用户系统**：注册 / 登录，带实时表单验证
- 📅 **活动日历**：按 IP 筛选、切换月份、活动倒计时
- 🎵 **背景音乐**：支持播放 / 暂停，跨页面连续播放
- 🌙 **暗夜模式** 与 📱 **响应式布局**

## 技术栈

- **HTML5**：语义化标签、`<audio>`、`<iframe>`、拖拽 API、localStorage
- **CSS3**：CSS 变量换肤、Flex 布局、媒体查询、动画
- **JavaScript (ES6+)**：表单验证、活动倒计时、抽卡算法、`postMessage` 通信
- **Vue 2**：数据驱动视图（`v-for` / `v-if` / `computed`），CDN 引入无需构建
- **LocalStorage**：持久化用户、收藏、成就等数据

## 目录结构

```
ip-word/
├── index.html          # 首页（大树果子 / 抽卡 / 卡片册 / 成就）
├── login.html          # 登录页
├── register.html       # 注册页
├── calendar.html       # 活动日历页
├── about.html          # 关于我们页
├── qrcode.html         # 手机访问二维码页
├── css/
│   └── global.css      # 全局样式
├── js/
│   ├── app.js          # 交互逻辑
│   └── data.js         # 10 个 IP 数据源
├── audio/
│   └── bgm.mp3         # 背景音乐
└── images/             # 图片资源
```

## 本地运行

```bash
python -m http.server 8081
```

然后浏览器访问 `http://localhost:8081`（也可直接双击 `index.html` 打开）。

## 说明

- 本项目为 Web 前端技术课程期末大作业，独立完成。
- 作者：程琪涵
- 演示账号：`admin123` / `123456`
- 站内 IP 名称与图片素材仅用于课程学习与演示，版权归原作者所有。
