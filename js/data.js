// ============================================
// 线条小狗IP主题网站 - 数据源 (data.js)
// 功能：统一管理所有IP数据，实现数据驱动渲染
// ============================================

const ipData = {
  // ---------- 线条小狗（默认IP）----------
  maltese: {
    name: "线条小狗",
    icon: "🐕",
    theme: "theme-maltese",
    description: "治愈系线条小狗，温暖你的每一天",
    banner: "images/maltese-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-maltese-normal.jpg",
      rare: "images/card-maltese-rare.jpg",
      legendary: "images/card-maltese-legendary.jpg"
    },
    eventDate: "2026-07-15T00:00:00",  // 专属活动倒计时目标
    articles: [
      {
        id: 1,
        title: "线条小狗 × 瑞幸咖啡 联名杯套全国上新",
        date: "2026-06-20",
        cover: "images/art1.jpg",
        views: 12580,
        tag: "联名",
        summary: "本次联名推出4款限定杯套和2款贴纸，购买指定套餐即可获赠。",
        content: `
          <h3>🐶 联名详情</h3>
          <p>超人气IP「线条小狗」与瑞幸咖啡惊喜联动！6月20日起，全国瑞幸门店同步上线限定联名杯套和贴纸，快来收集属于你的小狗杯套吧~</p>
          
          <h3>🎁 联名周边一览</h3>
          <h4>📎 4款限定杯套</h4>
          <ul>
            <li><strong>金毛款</strong> - 元气满满早餐主题，搭配拿铁超治愈</li>
            <li><strong>小白款</strong> - 迷糊犯困摸鱼主题，打工人必备</li>
            <li><strong>双人款</strong> - 两只小狗贴贴，甜度满分</li>
            <li><strong>隐藏款</strong> - 咖啡师小狗造型，随机掉落</li>
          </ul>
          
          <h4>🏷️ 2款贴纸包</h4>
          <ul>
            <li><strong>咖啡日常款</strong> - 8张不重复，记录每一杯咖啡时光</li>
            <li><strong>治愈贴贴款</strong> - 8张不重复，两只小狗的甜蜜日常</li>
          </ul>
          
          <h3>📍 获取方式</h3>
          <p><strong>方式一：</strong>购买「线条小狗联名套餐」（生椰拿铁 + 提拉米苏大福），随机获得1款杯套 + 1张贴纸</p>
          <p><strong>方式二：</strong>单笔消费满49元，赠送杯套1个（款式随机）</p>
          <p><strong>方式三：</strong>瑞幸APP/小程序下单，备注"要小狗"，有机会获得隐藏款杯套</p>
          
          <h3>📅 活动时间</h3>
          <p>2026年6月20日 - 2026年7月31日，数量有限，送完即止！</p>
          
          <blockquote>💡 小贴士：不同门店杯套款式可能不同，建议多跑几家收集齐全哦~</blockquote>
        `
      },
      {
        id: 2,
        title: "周末和小狗一起去泡温泉吧！限定表情包发布",
        date: "2026-06-18",
        cover: "images/art2.jpg",
        views: 9860,
        tag: "表情包",
        summary: "全新温泉主题表情包上线微信，16张动态表情免费下载。"
      },
      {
        id: 3,
        title: "线条小狗主题快闪店登陆成都太古里",
        date: "2026-06-15",
        cover: "images/art3.jpg",
        views: 15230,
        tag: "快闪",
        summary: "为期一个月的快闪活动，现场可体验AR互动和限定周边购买。"
      },
      {
        id: 4,
        title: "线条小狗2026夏季新品周边预售开启",
        date: "2026-06-12",
        cover: "images/art4.jpg",
        views: 8740,
        tag: "周边",
        summary: "包含遮阳伞、冰垫、风扇等夏季实用周边，预售享8折优惠。"
      },
      {
        id: 5,
        title: "线条小狗动画短片《早安小狗》播放量破亿",
        date: "2026-06-10",
        cover: "images/art5.jpg",
        views: 23100,
        tag: "动画",
        summary: "这部讲述小狗日常温馨的动画短片在各大平台引发热潮。"
      },
      {
        id: 6,
        title: "线条小狗与知名插画师联名推出限量版画",
        date: "2026-06-08",
        cover: "images/art6.jpg",
        views: 6780,
        tag: "艺术",
        summary: "全球限量500幅，每幅附带编号证书和艺术家签名。"
      }
    ]
  },

  // ---------- 原神 ----------
  genshin: {
    name: "原神",
    icon: "⚔️",
    theme: "theme-genshin",
    description: "跨越尘世的探索之旅，七国冒险等你开启",
    banner: "images/genshin-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-genshin-normal.jpg",
      rare: "images/card-genshin-rare.jpg",
      legendary: "images/card-genshin-legendary.jpg"
    },
    eventDate: "2026-07-20T18:00:00",
    articles: [
      {
        id: 7,
        title: "原神5.0版本前瞻：纳塔国度正式开放",
        date: "2026-06-21",
        cover: "images/genshin-art1.jpg",
        views: 45600,
        tag: "版本更新",
        summary: "全新火之国纳塔上线，新增3位五星角色和大量世界任务。"
      },
      {
        id: 8,
        title: "线条小狗 × 原神 2.0 联名周边正式发售",
        date: "2026-06-18",
        cover: "images/genshin-art2.jpg",
        views: 32100,
        tag: "联名",
        summary: "派蒙与小狗的梦幻联动，推出毛绒挂件、钥匙扣等12款周边。"
      },
      {
        id: 9,
        title: "原神交响音乐会2026全国巡演计划公布",
        date: "2026-06-15",
        cover: "images/genshin-art3.jpg",
        views: 28900,
        tag: "活动",
        summary: "首站上海梅赛德斯奔驰文化中心，后续将前往北京、广州、成都。"
      },
      {
        id: 10,
        title: "原神FES 2026参展确定，早鸟票开售",
        date: "2026-06-12",
        cover: "images/genshin-art4.jpg",
        views: 19800,
        tag: "展会",
        summary: "年度玩家盛会，现场可体验未公开版本内容和限定周边。"
      },
      {
        id: 11,
        title: "新角色「千织」角色PV发布，引发热议",
        date: "2026-06-10",
        cover: "images/genshin-art5.jpg",
        views: 36700,
        tag: "角色",
        summary: "岩系单手剑角色，独特的防御转攻击机制备受期待。"
      }
    ]
  },

  // ---------- 恋与深空 ----------
  loving: {
    name: "恋与深空",
    icon: "💕",
    theme: "theme-loving",
    description: "心动不止，与他的浪漫故事永不落幕",
    banner: "images/loving-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-loving-normal.jpg",
      rare: "images/card-loving-rare.jpg",
      legendary: "images/card-loving-legendary.jpg"
    },
    eventDate: "2026-07-10T12:00:00",
    articles: [
      {
        id: 12,
        title: "恋与深空周年庆典活动盛大开启",
        date: "2026-06-22",
        cover: "images/loving-art1.jpg",
        views: 21300,
        tag: "周年庆",
        summary: "登录即可领取限定SSR「星光誓约」，还有多重福利活动。"
      },
      {
        id: 13,
        title: "线条小狗联名礼盒「心动一夏」限量发售",
        date: "2026-06-19",
        cover: "images/loving-art2.jpg",
        views: 18700,
        tag: "联名",
        summary: "包含四位男主的Q版立牌、徽章和专属语音卡。"
      },
      {
        id: 14,
        title: "全新主线剧情「深空之章」更新",
        date: "2026-06-16",
        cover: "images/loving-art3.jpg",
        views: 15400,
        tag: "剧情",
        summary: "揭开深空猎人组织的秘密，与男主们共同面对新的危机。"
      },
      {
        id: 15,
        title: "沈星回生日庆典活动预告",
        date: "2026-06-14",
        cover: "images/loving-art4.jpg",
        views: 22100,
        tag: "生日",
        summary: "专属生日剧情、限定卡面和生日礼包即将上线。"
      },
      {
        id: 16,
        title: "恋与深空 × 线条小狗 联动PV公开",
        date: "2026-06-11",
        cover: "images/loving-art5.jpg",
        views: 29800,
        tag: "联动",
        summary: "超治愈的联动动画，小狗与男主们的温馨日常。"
      }
    ]
  },

  // ---------- 王者荣耀 ----------
  honor: {
    name: "王者荣耀",
    icon: "👑",
    theme: "theme-honor",
    description: "王者峡谷，五杀超神，巅峰对决一触即发",
    banner: "images/honor-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-honor-normal.jpg",
      rare: "images/card-honor-rare.jpg",
      legendary: "images/card-honor-legendary.jpg"
    },
    eventDate: "2026-07-25T20:00:00",
    articles: [
      {
        id: 17,
        title: "S38赛季开启，新英雄「大司命」正式上线",
        date: "2026-06-23",
        cover: "images/honor-art1.jpg",
        views: 38900,
        tag: "赛季",
        summary: "云梦泽新英雄大司命登场，独特复活机制改变战局。"
      },
      {
        id: 18,
        title: "KPL春季赛总决赛：狼队 vs eStarPro",
        date: "2026-06-20",
        cover: "images/honor-art2.jpg",
        views: 26700,
        tag: "赛事",
        summary: "巅峰对决一触即发，冠军将代表KPL出征世界冠军杯。"
      },
      {
        id: 19,
        title: "线条小狗限定皮肤「萌犬守护」上架",
        date: "2026-06-17",
        cover: "images/honor-art3.jpg",
        views: 31200,
        tag: "皮肤",
        summary: "鲁班七号全新史诗皮肤，技能特效融入小狗元素。"
      },
      {
        id: 20,
        title: "王者荣耀国际服全球同步上线",
        date: "2026-06-14",
        cover: "images/honor-art4.jpg",
        views: 19800,
        tag: "国际服",
        summary: "支持多语言，全球玩家同服竞技，开启国际化新篇章。"
      },
      {
        id: 21,
        title: "五五朋友节返场皮肤投票结果公布",
        date: "2026-06-11",
        cover: "images/honor-art5.jpg",
        views: 24500,
        tag: "返场",
        summary: "凤求凰、白虎志等5款皮肤获得返场资格，限时上架。"
      }
    ]
  },

  // ---------- 水豚噜噜 ----------
  capybara: {
    name: "水豚噜噜",
    icon: "🦫",
    theme: "theme-capybara",
    description: "佛系呆萌水豚，治愈你的emo时刻",
    banner: "images/capybara-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-capybara-normal.jpg",
      rare: "images/card-capybara-rare.jpg",
      legendary: "images/card-capybara-legendary.jpg"
    },
    eventDate: "2026-08-01T10:00:00",
    articles: [
      {
        id: 22,
        title: "水豚噜噜 × 咖啡品牌联名推出限定杯套",
        date: "2026-06-25",
        cover: "images/capybara-art1.jpg",
        views: 18500,
        tag: "联名",
        summary: "佛系水豚主题杯套，购买咖啡套餐即可获得，还有隐藏款等你发现。"
      },
      {
        id: 23,
        title: "水豚噜噜表情包「躺平的一天」上线",
        date: "2026-06-22",
        cover: "images/capybara-art2.jpg",
        views: 12600,
        tag: "表情包",
        summary: "20款躺平主题表情，完美表达你的佛系心态。"
      },
      {
        id: 24,
        title: "水豚噜噜毛绒公仔限量发售",
        date: "2026-06-18",
        cover: "images/capybara-art3.jpg",
        views: 22100,
        tag: "周边",
        summary: "超柔软亲肤材质，三种尺寸可选，小号/中号/大号满足不同需求。"
      },
      {
        id: 25,
        title: "水豚噜噜主题咖啡厅即将开业",
        date: "2026-06-15",
        cover: "images/capybara-art4.jpg",
        views: 16800,
        tag: "线下",
        summary: "上海首家水豚主题咖啡厅，沉浸式体验佛系生活。"
      },
      {
        id: 26,
        title: "水豚噜噜年度人气IP评选获奖",
        date: "2026-06-10",
        cover: "images/capybara-art5.jpg",
        views: 14300,
        tag: "荣誉",
        summary: "荣获2026年度最具治愈力IP奖项，感谢粉丝们的支持。"
      }
    ]
  },

  // ---------- 黄油小熊 ----------
  butterbear: {
    name: "黄油小熊",
    icon: "🧈",
    theme: "theme-butterbear",
    description: "软萌黄油小熊，甜进你的心里",
    banner: "images/butterbear-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-butterbear-normal.jpg",
      rare: "images/card-butterbear-rare.jpg",
      legendary: "images/card-butterbear-legendary.jpg"
    },
    eventDate: "2026-08-05T14:00:00",
    articles: [
      {
        id: 27,
        title: "黄油小熊 × 烘焙品牌联名蛋糕上新",
        date: "2026-06-26",
        cover: "images/butterbear-art1.jpg",
        views: 19800,
        tag: "联名",
        summary: "黄油小熊造型蛋糕，限定款下午茶套餐，颜值与美味并存。"
      },
      {
        id: 28,
        title: "黄油小熊夏季新品「冰淇淋小熊」发布",
        date: "2026-06-23",
        cover: "images/butterbear-art2.jpg",
        views: 15600,
        tag: "新品",
        summary: "冰淇淋造型的黄油小熊周边，夏天必备的清凉萌物。"
      },
      {
        id: 29,
        title: "黄油小熊周边大促销，全场满减",
        date: "2026-06-20",
        cover: "images/butterbear-art3.jpg",
        views: 28400,
        tag: "促销",
        summary: "夏季大促开启，全场满200减50，限量周边秒杀价。"
      },
      {
        id: 30,
        title: "黄油小熊官方社群粉丝突破百万",
        date: "2026-06-16",
        cover: "images/butterbear-art4.jpg",
        views: 35200,
        tag: "里程碑",
        summary: "感谢百万粉丝的陪伴，专属福利礼包发放中。"
      },
      {
        id: 31,
        title: "黄油小熊限定钥匙扣系列发售",
        date: "2026-06-12",
        cover: "images/butterbear-art5.jpg",
        views: 11200,
        tag: "周边",
        summary: "8款不同造型钥匙扣，收集全套有隐藏款赠送。"
      }
    ]
  },

  // ---------- 草莓熊 ----------
  strawberrybear: {
    name: "草莓熊",
    icon: "🍓",
    theme: "theme-strawberrybear",
    description: "甜甜草莓熊，可爱满分的小熊",
    banner: "images/strawberrybear-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-strawberrybear-normal.jpg",
      rare: "images/card-strawberrybear-rare.jpg",
      legendary: "images/card-strawberrybear-legendary.jpg"
    },
    eventDate: "2026-08-10T12:00:00",
    articles: [
      {
        id: 32,
        title: "草莓熊 × 茶饮品牌联名杯套上线",
        date: "2026-06-27",
        cover: "images/strawberrybear-art1.jpg",
        views: 21300,
        tag: "联名",
        summary: "草莓熊限定杯套+贴纸组合，购买草莓系列饮品即可获得。"
      },
      {
        id: 33,
        title: "草莓熊夏日限定「草莓冰淇淋」主题周边",
        date: "2026-06-24",
        cover: "images/strawberrybear-art2.jpg",
        views: 17900,
        tag: "新品",
        summary: "冰淇淋造型的草莓熊，软萌可爱的夏季好物。"
      },
      {
        id: 34,
        title: "草莓熊主题快闪店登陆北京三里屯",
        date: "2026-06-21",
        cover: "images/strawberrybear-art3.jpg",
        views: 25600,
        tag: "快闪",
        summary: "为期两周的草莓熊快闪活动，限定周边和拍照打卡区等你来。"
      },
      {
        id: 35,
        title: "草莓熊毛绒抱枕大号款补货上架",
        date: "2026-06-17",
        cover: "images/strawberrybear-art4.jpg",
        views: 13800,
        tag: "补货",
        summary: "超受欢迎的大号草莓熊抱枕终于补货啦，手慢无哦。"
      },
      {
        id: 36,
        title: "草莓熊与甜品店联名推出限定蛋糕",
        date: "2026-06-13",
        cover: "images/strawberrybear-art5.jpg",
        views: 20100,
        tag: "联名",
        summary: "草莓熊造型慕斯蛋糕，颜值超高的下午茶必备。"
      }
    ]
  },

  // ---------- 拉布布 ----------
  labubu: {
    name: "拉布布",
    icon: "👾",
    theme: "theme-labubu",
    description: "搞怪精灵拉布布，潮流玩偶顶流",
    banner: "images/labubu-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-labubu-normal.jpg",
      rare: "images/card-labubu-rare.jpg",
      legendary: "images/card-labubu-legendary.jpg"
    },
    eventDate: "2026-08-15T16:00:00",
    articles: [
      {
        id: 37,
        title: "拉布布新品系列「精灵派对」正式发售",
        date: "2026-06-28",
        cover: "images/labubu-art1.jpg",
        views: 48200,
        tag: "新品",
        summary: "全新精灵派对系列，6款不同造型，盲盒发售惊喜不断。"
      },
      {
        id: 38,
        title: "拉布布 × 潮流品牌联名服饰上线",
        date: "2026-06-25",
        cover: "images/labubu-art2.jpg",
        views: 36800,
        tag: "联名",
        summary: "拉布布印花T恤、卫衣等潮流服饰，限量发售。"
      },
      {
        id: 39,
        title: "拉布布收藏级大娃限定预售开启",
        date: "2026-06-22",
        cover: "images/labubu-art3.jpg",
        views: 52100,
        tag: "限定",
        summary: "100cm超大号拉布布收藏级公仔，全球限量500体。"
      },
      {
        id: 40,
        title: "拉布布艺术家联名款发布",
        date: "2026-06-18",
        cover: "images/labubu-art4.jpg",
        views: 29500,
        tag: "联名",
        summary: "与知名艺术家合作推出的特别款，收藏价值满满。"
      },
      {
        id: 41,
        title: "拉布布主题展览即将开幕",
        date: "2026-06-14",
        cover: "images/labubu-art5.jpg",
        views: 42300,
        tag: "展览",
        summary: "拉布布大型主题展览，沉浸式体验精灵世界。"
      }
    ]
  },

  // ---------- 皮卡丘 ----------
  pikachu: {
    name: "皮卡丘",
    icon: "⚡",
    theme: "theme-pikachu",
    description: "电系宝可梦皮卡丘，永远的人气王",
    banner: "images/pikachu-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-pikachu-normal.jpg",
      rare: "images/card-pikachu-rare.jpg",
      legendary: "images/card-pikachu-legendary.jpg"
    },
    eventDate: "2026-08-20T10:00:00",
    articles: [
      {
        id: 42,
        title: "皮卡丘 × 运动品牌联名系列发售",
        date: "2026-06-29",
        cover: "images/pikachu-art1.jpg",
        views: 58900,
        tag: "联名",
        summary: "皮卡丘主题运动鞋、运动服等，活力满满的潮流单品。"
      },
      {
        id: 43,
        title: "皮卡丘限定款电动公仔新品上架",
        date: "2026-06-26",
        cover: "images/pikachu-art2.jpg",
        views: 42500,
        tag: "新品",
        summary: "会动的皮卡丘公仔，按压尾巴就能发出皮卡皮卡的声音。"
      },
      {
        id: 44,
        title: "宝可梦中心皮卡丘专区全新升级",
        date: "2026-06-23",
        cover: "images/pikachu-art3.jpg",
        views: 35600,
        tag: "线下",
        summary: "上海宝可梦中心皮卡丘专区焕新开业，限定周边等你来。"
      },
      {
        id: 45,
        title: "皮卡丘25周年纪念款周边发布",
        date: "2026-06-19",
        cover: "images/pikachu-art4.jpg",
        views: 67800,
        tag: "纪念",
        summary: "25周年限定纪念款，收藏级别的精美周边。"
      },
      {
        id: 46,
        title: "皮卡丘主题电玩展参展预告",
        date: "2026-06-15",
        cover: "images/pikachu-art5.jpg",
        views: 51200,
        tag: "展会",
        summary: "即将参展电玩展，现场互动体验和限定周边领取。"
      }
    ]
  },

  // ---------- 凯蒂猫 ----------
  hellokitty: {
    name: "凯蒂猫",
    icon: "🎀",
    theme: "theme-hellokitty",
    description: "甜美凯蒂猫，永远的少女心",
    banner: "images/hellokitty-banner.jpg",
    // 抽卡专属图（按稀有度区分）
    cardImages: {
      normal: "images/card-hellokitty-normal.jpg",
      rare: "images/card-hellokitty-rare.jpg",
      legendary: "images/card-hellokitty-legendary.jpg"
    },
    eventDate: "2026-08-25T14:00:00",
    articles: [
      {
        id: 47,
        title: "凯蒂猫50周年纪念系列正式发布",
        date: "2026-06-30",
        cover: "images/hellokitty-art1.jpg",
        views: 78200,
        tag: "纪念",
        summary: "50周年限定纪念系列，全球同步发售，收藏意义非凡。"
      },
      {
        id: 48,
        title: "凯蒂猫 × 美妆品牌联名彩妆上线",
        date: "2026-06-27",
        cover: "images/hellokitty-art2.jpg",
        views: 45300,
        tag: "联名",
        summary: "凯蒂猫主题口红、眼影等彩妆系列，少女心满满。"
      },
      {
        id: 49,
        title: "凯蒂猫限定款首饰系列发售",
        date: "2026-06-24",
        cover: "images/hellokitty-art3.jpg",
        views: 38600,
        tag: "新品",
        summary: "项链、耳环、戒指等精致首饰，日常搭配的甜美点缀。"
      },
      {
        id: 50,
        title: "凯蒂猫主题甜品店限定款蛋糕",
        date: "2026-06-20",
        cover: "images/hellokitty-art4.jpg",
        views: 29800,
        tag: "联名",
        summary: "与知名甜品店联名，推出限定款凯蒂猫造型蛋糕。"
      },
      {
        id: 51,
        title: "凯蒂猫官方旗舰店夏季大促开启",
        date: "2026-06-16",
        cover: "images/hellokitty-art5.jpg",
        views: 56400,
        tag: "促销",
        summary: "夏季大促全场满减，还有限定款秒杀等你来抢。"
      }
    ]
  }
};

// ============================================
// 活动日历数据 - 全站统一数据源
// ============================================
const calendarEvents = [
  { ipKey: 'maltese', date: '2026-06-30', title: '夏日限定周边', description: '线条小狗夏季新品周边预售开启，包含遮阳伞、冰垫等夏日好物。' },
  { ipKey: 'maltese', date: '2026-07-05', title: '快闪店开幕', description: '成都太古里线条小狗主题快闪店正式开幕，现场体验AR互动。' },
  { ipKey: 'maltese', date: '2026-07-15', title: '联名咖啡上线', description: '与瑞幸咖啡联名杯套全国上新，4款限定杯套等你收集。' },
  { ipKey: 'genshin', date: '2026-07-01', title: '5.0版本前瞻', description: '纳塔国度版本前瞻直播，兑换码福利送不停。' },
  { ipKey: 'genshin', date: '2026-07-10', title: '新角色UP', description: '火神角色正式上线，限定祈愿开启。' },
  { ipKey: 'genshin', date: '2026-07-20', title: '5.0版本上线', description: '纳塔国度正式开放，全新冒险启程。' },
  { ipKey: 'loving', date: '2026-07-07', title: '七夕活动', description: '七夕限定剧情上线，与他共度浪漫节日。' },
  { ipKey: 'loving', date: '2026-07-10', title: '周年庆典', description: '恋与深空一周年庆典盛大开启，登录领限定SSR。' },
  { ipKey: 'loving', date: '2026-07-25', title: '沈星回生日', description: '沈星回生日专属活动，限定卡面限时获取。' },
  { ipKey: 'honor', date: '2026-07-01', title: 'S38赛季开启', description: '新赛季新征程，全新英雄大司命上线。' },
  { ipKey: 'honor', date: '2026-07-15', title: '夏日盛典', description: '王者荣耀夏日盛典活动开启，限定皮肤返场。' },
  { ipKey: 'honor', date: '2026-07-25', title: '世界冠军杯', description: 'KPL世界冠军杯总决赛，见证王者诞生。' },
  { ipKey: 'capybara', date: '2026-08-01', title: '水豚噜噜主题日', description: '佛系水豚专属活动日，躺平周边限时发售。' },
  { ipKey: 'capybara', date: '2026-08-05', title: '咖啡厅开业', description: '上海首家水豚主题咖啡厅正式开业。' },
  { ipKey: 'butterbear', date: '2026-08-05', title: '黄油小熊联名蛋糕', description: '与烘焙品牌联名推出限定款蛋糕。' },
  { ipKey: 'butterbear', date: '2026-08-10', title: '冰淇淋小熊', description: '夏季新品冰淇淋造型周边正式发售。' },
  { ipKey: 'strawberrybear', date: '2026-08-10', title: '草莓熊快闪店', description: '北京三里屯草莓熊主题快闪店开幕。' },
  { ipKey: 'strawberrybear', date: '2026-08-15', title: '草莓冰淇淋', description: '草莓熊夏日限定周边上线。' },
  { ipKey: 'labubu', date: '2026-08-15', title: '精灵派对发售', description: '拉布布新品系列「精灵派对」正式发售。' },
  { ipKey: 'labubu', date: '2026-08-20', title: '主题展览', description: '拉布布大型主题展览开幕。' },
  { ipKey: 'pikachu', date: '2026-08-20', title: '皮卡丘专区升级', description: '宝可梦中心皮卡丘专区焕新开业。' },
  { ipKey: 'pikachu', date: '2026-08-22', title: '运动联名', description: '皮卡丘运动品牌联名系列发售。' },
  { ipKey: 'hellokitty', date: '2026-08-25', title: '50周年纪念', description: '凯蒂猫50周年限定纪念系列全球发售。' },
  { ipKey: 'hellokitty', date: '2026-08-28', title: '美妆联名', description: '凯蒂猫美妆品牌联名彩妆系列上线。' }
];

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ipData, calendarEvents };
}