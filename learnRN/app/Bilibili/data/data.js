// 模拟假数据
// 视频推荐
const Recommend = [
  ["【火影手书】暁众人的POKAPOKA之歌","https://i2.hdslb.com/bfs/archive/3e8dfca1d8242c519eafb9276d5f4c6f71f12355.png@160w_100h.webp", "01:45", "1.7万", "323", "短片·手书·配音"],
  ["【零守字幕组】【ULTRAMAN】【有声漫画】【第26话】【舞者】", "https://i2.hdslb.com/bfs/archive/de1b5af61e14410f059653951a56f15de15778b3.jpg@160w_100h.webp", "08:37", "846", "48", "短片·手书·配音"],
  ["【宅龄鉴别】声优也去KTV？知名动画角色K歌盘点。", "https://i0.hdslb.com/bfs/archive/0019c0c5a3ce083faaf8661e1c6a52d02c074e14.jpg@160w_100h.webp", "15:31", "4.1万", "1331", "综合"],
  ["手书", "https://i1.hdslb.com/bfs/archive/bdfdec2c14cb6699dc33f47cae98f136cc9e37a0.jpg@160w_100h.webp", "04:24", "635", "105", "短片·手书·配音"],
  ["外国漫迷评索隆2016最强十斩", "https://i1.hdslb.com/bfs/archive/959371608a9270930b89377c81dd3bca0c34fc77.jpg@160w_100h.webp", "08:18", "2.4万", "399", "综合"],
  ["柯南你怎么了，难道你忘记兰了吗？", "https://i2.hdslb.com/bfs/archive/b60ab291e5a104e8a84db5dfd8aaa10fcc9cbc2f.jpg@160w_100h.webp", "04:02", "1.8万", "241", "综合"],
  ["【投票向】二次元男神投票第二弹", "https://i2.hdslb.com/bfs/archive/5fde24f12ef4cbdb0fc0814891b6cbad012d6d6d.jpg@160w_100h.webp", "10:29", "3.3万", "1.4万", "综合"],
  ["我只是来送货的呀！（请带好耳机！）", "https://i2.hdslb.com/bfs/archive/3b7cd9429dcafa1857435ff0e13a5c00635b7845.jpg@160w_100h.webp", "20:08", "36.1万", "1.3万", "短片·手书·配音"],
  //[
  //  "【12月】国外污动画GIF/{TOP19}",
  //  "https://i2.hdslb.com/bfs/archive/8a385ae49a369b40002f6d9262e4ba624adf0f99.jpg@160w_100h.webp",
  //  "10:50",
  //  "40.4万",
  //  "1149",
  //  "综合"
  //],
  ["Stickman Vs Bendy and The Ink Machine, Chapter 3 in a nutshell Animation", "https://i1.hdslb.com/bfs/archive/4d3436b23a49aee9c4e41a3b741db88a764e800e.jpg@160w_100h.webp", "13:00", "16", "0", "综合"],
  ["【4月】月色真美 07【独家正版】", "https://i2.hdslb.com/bfs/archive/903dfeeb5722a9fa5f5dfd8454b5849f9d9670a5.jpg@160w_100h.webp", "24:21", "100.0万", "9.6万", "月色真美"],
  ["【10月】干物妹！小埋R 02【独家正版】", "https://i0.hdslb.com/bfs/archive/6c5f1c6203f69081fabc35ada7e37fc761808fdd.jpg@160w_100h.webp", "23:40", "224.6万", "4.9万", "干物妹！小埋R"],
  ["【7月】OVERLORD 09【独家正版】", "https://i2.hdslb.com/bfs/archive/e19c4e1d3cf9f4d57f9563afd24696a096b10bd2.jpg@160w_100h.webp", "23:40", "455.3万", "8.5万", "OVERLORD"],
  ["【4月】日常 23 【异域*****】", "https://i1.hdslb.com/bfs/archive/919d863c2776bfb54164edc0718bd7f7e0baadaf.jpg@160w_100h.webp", "31:45", "54.6万", "4.0万", "日常"],
  ["【7月】干物妹！小埋 04", "https://i1.hdslb.com/bfs/archive/ad5a1a9f79c19358153c09e2de33ab69ad2b7d04.jpg@160w_100h.webp", "24:04", "513.0万", "27.8万", "干物妹！小埋"],
  ["【10月】四月是你的谎言 17", "https://i0.hdslb.com/bfs/archive/cb57a8e7348a90f156da26ae129e08637d3c3850.jpg@160w_100h.webp", "22:57", "162.7万", "442", "四月是你的谎言"],
  ["【7月】斩·赤红之瞳  01", "https://i0.hdslb.com/bfs/archive/617bdfad6bfe40ddec72b6f747a34c62073e58d0.jpg@160w_100h.webp", "23:41", "505.1万", "14.8万", "斩·赤红之瞳"],
  ["【7月/完结】NEW GAME! 12", "https://i1.hdslb.com/bfs/archive/96406030547f705cec2b1b2be2d9159528447e53.jpg@160w_100h.webp", "23:25", "75.5万", "4.5万", "NEW GAME"],
  ["【7月】将国之天鹰星 15", "https://i2.hdslb.com/bfs/archive/0b451e2b66ebdece7777c94cf569fe350954d452.jpg@160w_100h.webp", "24:08", "1.3万", "387", "将国之天鹰星"],
  ["【4月】月色真美 09【独家正版】", "https://i0.hdslb.com/bfs/archive/5131c630c8023a03a196a07aada19be42e20ef59.jpg@160w_100h.webp", "24:21", "87.3万", "5.0万", "月色真美"]
].map(v=>(
  {
    // 标题
    title: v[0],
    videoUrl: '',
    imageUrl: v[1],
    videoTime: v[2],
    play: v[3],
    danmu: v[4],
    type: v[5],
  }
))

// 专栏图片轮播
const SpecialColumnSwipeImages = [
  'https://i0.hdslb.com/bfs/archive/2d3a993b1c5201526ad7ced72619916870a08dc3.jpg@680w_212h.webp',
  'https://i0.hdslb.com/bfs/archive/4290e8d939778a4bce79a662910ecfb3a3fefc99.jpg@680w_212h.webp',
  'https://i0.hdslb.com/bfs/archive/412988903400bb46145ac37c3440780c9d42ae5b.jpg@680w_212h.webp',
  'https://i0.hdslb.com/bfs/archive/61ee0a32a3b17c10b75ac0a32bb466e5f44b21ca.jpg@680w_212h.webp',
];

// 专栏推荐
var SpecialColumnRecommend = `[["这套路学不来的——十月新番扫雷（完）","作者：白鹅纪编辑部大家久等了，这里是本季新番扫雷第五期。本期新番扫雷将给大家带来的几部不太按套路出牌的作品，有话说一半就开始讲黄段子的，有花甲老人突然变身的，也有女主反过来撩男主的等等。和以前一样，本","http://i1.hdslb.com/bfs/face/2b5e3136625c3247c08ce8c4837c42ecce1351c9.jpg@24w_24h.webp","华语第三电波台","番剧","4389","40","17","https://i0.hdslb.com/bfs/article/652ee9a6aef7237c095e6ffdc4e10eef969419f0.jpg@860w_482h.webp"],["泰晤士河畔的“世外桃源”，身心放松的最佳场所！","欢迎光临DOCO热纪录一年365天陪你悦享真实世界‍现代生活的忙碌和繁琐，让人们开始向往田园牧歌式的生活，同时也期望能找到一个真正的“世外桃源”。对于中国人来说，最深刻的关于“世外桃源”的印象源于陶渊","http://i1.hdslb.com/bfs/face/a48d2262adfc6fb8920d18e55310c29fc6fdd55a.jpg@24w_24h.webp","DOCO热纪录","其他","573","6","0","https://i0.hdslb.com/bfs/article/6118d5533032b911604412a91454f79789a94a4f.jpg@860w_482h.webp"],["扯线漫谈：作为经典恐怖IP，《它》还网住了谁？","作者：锹甲TT导语：我在这里扯的是一种相当自由的互文性（intertextuality），它不仅跨艺术形式彼此映照和勾连（比如从小说到电影，到ACG），也不管那些作品之间或明或暗的关系是作者承认的还是","http://i0.hdslb.com/bfs/face/a3b09df441dc63ef5566b2d18ee3b0f63a188210.jpg@24w_24h.webp","机核网","影视","5051","58","11","https://i0.hdslb.com/bfs/article/c156d22387ad02dbe06106afc1adbb1ce7e60ccc.jpg@860w_482h.webp"],["TV动画《宝石之国》制作秘话04～写实质感的蜗牛篇～","市川春子的原作漫画《宝石之国》，在TV动画化过程中用到了全CG技术。本作由此前多次承担动画CG制作的橘子社（オレンジ）负责，第一次创作出带有宝石质感的头发。角色动作采用了众多新方法，注","http://i0.hdslb.com/bfs/face/5ea1a61e4eb5214e92893bf0c0397bc38a409124.jpg@24w_24h.webp","圆兔子12138","番剧","2731","43","11","https://i0.hdslb.com/bfs/article/072bb69cbca3a0d7942f463162556b86c9441a7b.jpg@860w_482h.webp"],["还在瞎吹乱婊？教你口胡动画票房的正确姿势","作者：捉鱼人@白鹅纪价格喜人的动画碟片越来越卖不出去已经是当下不争的事实，把作品做成剧场版，放在电影院上映俨然成了一种普遍现象。光今年下半年，就有《Free!》、《魔法科高校的劣等生》、《No Gam","http://i1.hdslb.com/bfs/face/2b5e3136625c3247c08ce8c4837c42ecce1351c9.jpg@24w_24h.webp","华语第三电波台","番剧","6.1万","743","260","https://i0.hdslb.com/bfs/article/d08c42ee1292b924259031852ecd1ed7d63a8249.jpg@860w_482h.webp"],["有朋自远方来——那些穿汉服的歪果仁","很多人以为，中国一直没有跟外国交流，最多也就唐成为过世界中心，才有外国人来中国。唐 胡人俑唐 黑人俑除此之后，特别是明清时期一直闭关锁国，与外国（特别是欧洲国家）不交流，导致国家落后。然而有一段特殊的","http://i1.hdslb.com/bfs/face/c3bf0ea026bac6ee19c129719b729e7c7c62b6e9.jpg@24w_24h.webp","楠朔","趣味科普","2426","55","7","https://i0.hdslb.com/bfs/article/29b59f879cb477e93477f9750ec343eadcff4d03.png@860w_482h.webp"],["日本最大在线游戏平台进军中国啦！","作者：白鹅君如果是玩过《舰队collection》，《刀剑乱舞Online》等网页游戏的话，那一定不会对DMM这个名称感到陌生。近日，DMM GAMES在国内开启了官方微博账号，引起了诸多游戏爱好者的","http://i1.hdslb.com/bfs/face/2b5e3136625c3247c08ce8c4837c42ecce1351c9.jpg@24w_24h.webp","华语第三电波台","手机游戏","5677","71","63","https://i0.hdslb.com/bfs/article/8f952d685ee42f31e65348819d8f12bdde8fbb79.jpg@860w_482h.webp"],["生活就要全力以赴——十月新番扫雷（四）","作者：白鹅纪编辑部大家好，这里是本季新番扫雷第四期。本期新番扫雷将给大家带来的六部比较积极向上的作品，它们的主人公们都有为生活和理想全力以赴着。和以前一样，本次扫雷对象不包括续作类动画以及泡面番。每部","http://i1.hdslb.com/bfs/face/2b5e3136625c3247c08ce8c4837c42ecce1351c9.jpg@24w_24h.webp","华语第三电波台","番剧","3789","28","17","https://i0.hdslb.com/bfs/article/12d2843c14f87c71b7018e36e5032b60a5c3a0f4.jpg@860w_482h.webp"],["喜欢女仆，就要了解女仆","①女仆的起源女仆是一种职业，主要职务是为雇主打理家务。因时代不同而有的称呼也不相同，然而基本的工作性质是一致的。鲇泽美咲 妹抖诞生于封建贵族社会 女仆最早可以追溯到古代罗马帝国时代，那时候的女仆还是属","http://i2.hdslb.com/bfs/face/3e149421b5fe7c479f74c46d11162ea6922999a9.jpg@24w_24h.webp","独步隐客","番剧","3.5万","622","186","https://i0.hdslb.com/bfs/article/943a0f731a6dd02fd300a8fc02c99dbf2f4d09fd.png@860w_482h.webp"],["透过《刺客信条：起源》 感受魅影之纱笼罩下的埃及","《刺客信条：起源》近日发售了，其游戏故事背景发生在古老的埃及，作为世界上历史最悠久的文明古国之一，它一直在人们的印象中扮演着神秘的角色，黄沙满地的荒漠中矗立起的宏伟金字塔和狮身人面像，横跨城市的尼","http://i0.hdslb.com/bfs/face/adf670fbdf21ba67078fb528acfef93d472213f3.jpg@24w_24h.webp","游民星空官方","单机游戏","4323","93","28","https://i0.hdslb.com/bfs/article/73fff1e03168fcb73b82cf6e213d4a514c044513.jpg@860w_482h.webp"],["任天堂的中国实验：一场持续15年的中文化运动","10 月 19 日，任天堂的新主机 Switch 更新了 4.0.0 系统。在新系统中，有一个连官方更新日志都没有提及的小更新：虽然系统界面还是以英文显示，但 Switch 游戏已经可以直接调用系统字","http://i1.hdslb.com/bfs/face/727cbf99eea3d72fc5797cec37e6765699bddc4f.jpg@24w_24h.webp","文巾志","单机游戏","5360","81","58","https://i0.hdslb.com/bfs/article/73b2dff1bb0a60bac92506d7cc471c9c8afaf170.png@860w_482h.webp"],["各种帅气的立绘姿势教程，一个也不能少！","想要让角色显得更加生动，为他配上动作是一个非常重要的要素。相比还是有很多人并不擅长动作方面的作画。例如：想要挑战具有跃动感的动作，但是却无法在脑海中完成动作的设想。因为没有自信所以一只画站立的样子。使","http://i2.hdslb.com/bfs/face/a21754c347a784bdd6c6aa89dcb299e90f97c2cb.jpg@24w_24h.webp","生活就是画画画","绘画","3万","567","75","https://i0.hdslb.com/bfs/article/203529f972b0426dc614fd35f5a6dca21eed15d0.jpg@860w_482h.webp"],["浅谈SNK镇社之宝——《饿狼传说》系列","公元1991年11月25日，一款全新的对战型格斗游戏发售，那就是《饿狼传说》。该作品问世后大获好评，以此为契机，SNK决定将这个游戏做成一个系列，于是后来被称为【SNK镇社之宝】的《饿狼传说》系列诞生","http://i0.hdslb.com/bfs/face/90b7b81a39e95b77f943932edba2b1811a182a2a.jpg@24w_24h.webp","斬空飛翔","单机游戏","1.2万","76","46","https://i0.hdslb.com/bfs/article/fdbd1f07cc048cdd41302c2625a07c657f57d2ad.jpg@860w_482h.webp"],["NHK imagine-nation《泥鲸之子们在沙丘上歌唱》专题节目","作者：钻石封面：NHK imagine-nation《泥鲸之子们在沙丘上歌唱》专题NHK WORLD TV面向海外观众介绍日本流行文化的英语节目《imagine-nation》最近为10月新番《泥鲸之","http://i2.hdslb.com/bfs/face/876bf5dfa8c583acb5f8689fc923077f6a2aba23.jpg@24w_24h.webp","AnimeTamashii","番剧","1254","31","8","https://i0.hdslb.com/bfs/article/578d5c8b371e8cd91b3c70033ee72af1844b53d0.jpg@860w_482h.webp"],["“人设确立”——声优养成之道","在当今的动画业界，声优无疑占据着举足轻重的位置；伴随着ACG逐渐走进大众文化的视野，有越来越多的小伙伴开始了解并关注这些幕后的“声音”工作者。一部动画的声优阵容，早已成为能够影响该动画关","http://i2.hdslb.com/bfs/face/daa1cddea96bfc8f1f2be713caa86bcca2a7f114.jpg@24w_24h.webp","RicoGarden","番剧","8866","184","75","https://i0.hdslb.com/bfs/article/69d0dffd09a12a9a562508fbbbdde8f094e0583b.jpg@860w_482h.webp"],["史上最难的游戏？——游戏业界都市传说系列","本文作者：水无月不知道各位玩家玩过的游戏当中，哪一款最难呢？是《黑暗之魂》？是《忍者龙剑传》？还是诸如《时空幻境》这样的高难解谜游戏？特别是在诸多独立游戏当中也有着许多难度设计变态的范例。不过，其实在","http://i1.hdslb.com/bfs/face/d0fab290836eb4bafdc8fb3d15a795706416fd2a.jpg@24w_24h.webp","游戏机实用技术视频","单机游戏","3.4万","155","75","https://i0.hdslb.com/bfs/article/325322d70f2048ca70b5e257e4ac443a0def5b59.jpg@860w_482h.webp"],["社会你猫哥，喵狠话不多！","你们家通常谁是老大？我猜已经结婚生子的家庭肯定是孩子最大，不是总说小祖宗小祖宗的吗？！如果没结婚也没生孩子却养了猫的话...喵星人总自诩为“朕”，可想而知在它们心里人类的地位是如何不值一提，微小到简直","http://i1.hdslb.com/bfs/face/64328e638ea4b832b86800cad8cf1e11c7d18e6a.jpg@24w_24h.webp","李喜喵","动物圈","3687","14","8","https://i0.hdslb.com/bfs/article/25c281723af62bff5e338220ba8b154a99124ac4.jpg@860w_482h.webp"],["美国人也拍抗日神剧，影后怒演中国农村妇女","抗战一直是国内影视剧市场经久不衰的题材，各种段子各种套路都翻来覆去的使用过。有徒手撕鬼子、裤裆藏雷这类创新的抗战方式。也有《红色》《战长沙》这类优质剧集。这些大家都看得多了，但是你们可能不知道73年前","http://i1.hdslb.com/bfs/face/df31d588cfec788417f0bb0e9aab364856edd26a.jpg@24w_24h.webp","影视怪蜀黍","影视","3万","508","97","https://i0.hdslb.com/bfs/article/30e8d08f8d0600e584752342b924aedfcfe57357.jpg@860w_482h.webp"],["一次征集美少女画作的活动，又被这些画师大佬们玩坏了","说实话，我已经被“折磨”得见怪不怪了。文 / 雨上由于绘画爱好者和各位专业画师的娱乐精神，现在时不时就会流行一些特色话题的绘画活动。这类活动由于参与门槛不高，主题轻松有趣，又对提升曝光度有很大的帮助，","http://i0.hdslb.com/bfs/face/203c33d00cc63ad2156754b8dae273e060c2e561.jpg@24w_24h.webp","游研社","绘画","9703","280","75","https://i0.hdslb.com/bfs/article/1ed0c2e81bf967ac8bbbc990d4ef3f49e3ba7335.jpg@860w_482h.webp"],["寓意纷飞。我们仍未知道那天所看见的花的名字","我们总是在注意错过太多，却不注意自己拥有多少。在我们走过的季节里，路旁盛开的花朵也在不断变化，那个季节盛开的花是叫什么来着？轻轻摇曳着，一碰会微微刺痛，靠近一闻，隐约有股青涩的阳光的气息。那气息渐渐地","http://i2.hdslb.com/bfs/face/df83b867c71475f84109d9c0666eabb11bd7a4fb.jpg@24w_24h.webp","_子夏","番剧","1671","78","8","https://i0.hdslb.com/bfs/article/6c4286dd07a429229f55e17759ac540d547fbf4d.jpg@860w_482h.webp"],["泰晤士河畔的“世外桃源”，身心放松的最佳场所！","欢迎光临DOCO热纪录一年365天陪你悦享真实世界‍现代生活的忙碌和繁琐，让人们开始向往田园牧歌式的生活，同时也期望能找到一个真正的“世外桃源”。对于中国人来说，最深刻的关于“世外桃源”的印象源于陶渊","http://i1.hdslb.com/bfs/face/a48d2262adfc6fb8920d18e55310c29fc6fdd55a.jpg@24w_24h.webp","DOCO热纪录","其他","573","6","0","https://i0.hdslb.com/bfs/article/6118d5533032b911604412a91454f79789a94a4f.jpg@860w_482h.webp"],["少女终末旅行第④话：3230年的世界还有多少故事？","严格来说，《少女终末旅行》其实是比较黑暗的，虽然这并不一定是作者的本意，但实际上确实如此，我们看这部漫画，自然主要目的也并不是看两个萝莉来回跑，而是在这一切背后隐藏的信息和嘲讽。不可否认，《少女终末旅","http://i2.hdslb.com/bfs/face/5d85b57a4979819061a040835c82e94e9f7a05b8.jpg@24w_24h.webp","桔梗花下","番剧","1633","50","8","https://i0.hdslb.com/bfs/article/fdff758e52339f9f41553599347ea4ce76ce23a2.jpg@860w_482h.webp"],["航空发动机原理不过如此！看完这几张图，你就能懂","航空发动机主要有三种类型：活塞式航空发动机，燃气涡轮发动机，冲压发动机。航空发动机的发展经历了活塞式发动机，喷气时代的活塞式发动机，燃气涡轮发动机，涡喷/涡扇发动机，涡桨/涡轴发动机的时代，本文主要用","http://i2.hdslb.com/bfs/face/d500ad7157f67cf585098ff6ff1679d835d2fb63.jpg@24w_24h.webp","庚号二","趣味科普","1597","45","20","https://i0.hdslb.com/bfs/article/3b6da0d335838425527c06900b0d9f72721d1f85.png@860w_482h.webp"],["小黑屋铁窗文选#7 一朝做流氓，十年挂南墙！","一朝做流氓，十年挂南墙————小黑屋https://www.bilibili.com/blackroom/#/ban/91028玩忽职守的黑屋典狱长一朝做流氓，二流地痞王 三妻不善待，四妾尽包养 五毒","http://i2.hdslb.com/bfs/face/9aacb5d03926f13ac7fafa2f7f725fbf1b6264cf.jpg@24w_24h.webp","哔哩哔哩社区小管家","其他","7954","218","175","https://i0.hdslb.com/bfs/article/567244bdf6a1cca11b8beb94d392bae553cda981.jpg@860w_482h.webp"],["红白机《功夫》，见证日本人讲外语的奇葩发音","文/长鼻君的怀古橱“红白机64合一”视频更新至第四期了，今天说的是一款老玩家们熟的不能再熟的游戏《功夫》。《功夫》很多人小时候都玩过，音乐魔性玩起来也搞笑。但估计很少有人知道，这个游戏的背景设定还和中","http://i0.hdslb.com/bfs/face/203c33d00cc63ad2156754b8dae273e060c2e561.jpg@24w_24h.webp","游研社","单机游戏","1.5万","97","37","https://i0.hdslb.com/bfs/article/3406e48ef50c4838ca57f0f5ea9fe3251b64806b.jpg@860w_482h.webp"],["为什么很多人对二次元有偏见？","（全文约6200字，阅读需16分钟）（本文不涉及重度剧透，不影响动漫观看效果）在很多人的印象中一直存在着这样一种偏见，那就是二次元只是小孩子才喜欢看的东西。如果孩子长大一点后被家长知道自己依然喜欢二次","http://i0.hdslb.com/bfs/face/c9e9e81f657623d8e3fff79f5c6ecd59fafe623f.jpg@24w_24h.webp","阿政说动漫","番剧","1.9万","879","659","https://i0.hdslb.com/bfs/article/6dd23d14abd45b83fdaf6df96e32b95d568efbd4.jpg@860w_482h.webp"],["那个曾象征未来与黑科技的Kinect，最终被微软自己杀死了","一款曾经掀起热潮的科技产品，如今孤独地走向终结。文 / 偶然轻狂先是孤独地在玩家们的心中死去，现在又将在组装工厂里死去了——微软已经宣布Kinect即将停止生产。 宣布这一消息的微软高管是Kinect","http://i0.hdslb.com/bfs/face/203c33d00cc63ad2156754b8dae273e060c2e561.jpg@24w_24h.webp","游研社","单机游戏","7360","53","36","https://i0.hdslb.com/bfs/article/648023a688532987baa1e4842b3ece87dd033d7d.jpg@860w_482h.webp"],["游戏中的广告价值：网络游戏已成新世代渠道媒体","2008年之前，没有人会想过轻松、娱乐的网络游戏与严肃、庄重的总统大选之间有什么关联，两者好似楚河汉界，互不“往来”。但是，2008年的美国总统大选让我们看到了网络游戏与总统选举的零距离接触，奥巴马让","http://i1.hdslb.com/bfs/face/18bb4c428735ec584f3bfd8e1fc8109f4dea4f92.jpg@24w_24h.webp","极地Gdgames","手机游戏","1306","9","4","https://i0.hdslb.com/bfs/article/ef1bf6d629ab6efe96f23f8e0f19e6d84199db1a.png@860w_482h.webp"],["如何选购彩铅全攻略","【市面上的彩铅种类好多...水性油性蜡性balabala....这个牌子那个牌子...如何选择喜欢并且适合自己的彩铅呢？看完这篇就能让喜欢彩铅的你不再迷茫啦~】在众多美术媒材之中，彩色铅笔在俺心里一直","http://i0.hdslb.com/bfs/face/e94eb760758856d2740a406063d40d5dbfb874b5.jpg@24w_24h.webp","人气画手","绘画","1228","39","4","https://i0.hdslb.com/bfs/article/26dbf56eef9e7f3e1badd653de7f127fd831e6e2.jpg@860w_482h.webp"],["《Just Because I Love You》","欢迎来到咸鱼工坊的专栏，我是鹰聿。 本来发个B博问问你们想在专栏里看到啥，结果清一色的又是女装又是鱼子酱的，不 存 在 的 好 吗 ！？本来打算鸽一鸽的。不，我是说听你们的，你们既然不选动画，那","http://i2.hdslb.com/bfs/face/a9a59279443ea100482249736185ca181ff7d13f.jpg@24w_24h.webp","机智的咸鱼","番剧","8389","161","64","https://i0.hdslb.com/bfs/article/c1838e158e3427712e77a14596f6ad50f0ff242f.jpg@860w_482h.webp"],["《茶杯头》里藏着多少怀旧游戏的彩蛋？","《茶杯头》不但有老动画的身影，还有众多向经典游戏致敬的元素。文 / 偶然轻狂很多人在第一眼看到《茶杯头》的时候，都有一种“似曾相识”的感觉。游戏不仅在动画形象借鉴了上世纪30年代经典的“橡皮管”动画风","http://i0.hdslb.com/bfs/face/203c33d00cc63ad2156754b8dae273e060c2e561.jpg@24w_24h.webp","游研社","单机游戏","2.9万","279","46","https://i0.hdslb.com/bfs/article/0b66592bb501540c4af0f535ffdeab12e35201a0.jpg@860w_482h.webp"],["他的中年,与90后共鸣 | 独家对话《寻找手艺》导演张景","欢迎光临DOCO热纪录一年365天陪你悦享真实世界 点击文章左下“阅读原文”观看全片在这样一个被二进制数码和网络主宰的时代，任何领域的流量在任何时间都在被不同的“网红”所吸引着。 纪录片领域，自然也","http://i1.hdslb.com/bfs/face/a48d2262adfc6fb8920d18e55310c29fc6fdd55a.jpg@24w_24h.webp","DOCO热纪录","影视","1.4万","119","35","https://i0.hdslb.com/bfs/article/8d301f0bce43ac8ab7eee485e485fb942b81e6ea.jpg@860w_482h.webp"],["【东方project】若幸觅得东方影，但愿长醉不愿醒（十）","\\\\(^o^)/~喔吼，我回来了。话说不知不觉都第十期了啊，这是当初的我完全没想到的。这次的前言，有些唐突，我想讲一件事：文章更新时间将从这期开始，从以前的三日左右一更改为每周末更新（照这节奏下去会不会","http://i1.hdslb.com/bfs/face/5247c22714c2ecdc52685495f4988d91ed86c98e.jpg@24w_24h.webp","夜刀神黑猫","番剧","1220","62","47","https://i0.hdslb.com/bfs/article/b0e18acf36a7e0aef15306ecfadf23485a310add.jpg@860w_482h.webp"],["万圣将至！这些动漫中的西方鬼怪都要出来咯！","时间转眼就要进入11月，而步入11月遇到的第一个节日就是万圣节，虽然对中国人来说这种外国的节日并没有什么实感，最多就是花点钱买买买（steam万圣节折扣啦！）不过万圣节的一些元素在这些年的传播中倒也为","http://i2.hdslb.com/bfs/face/f65bc9ef3fe70adafd9b3bba549a41141ca09734.jpg@24w_24h.webp","殇之七夜","番剧","1264","25","7","https://i0.hdslb.com/bfs/article/351aababc1a87074861b5c1da857be46c37e0af0.jpg@860w_482h.webp"],["《宝石之国》制作秘话（中）：手绘与3DCG相辅相成的动画","作者：年糕封面：《宝石之国》市川原子老师负责的原作漫画《宝石之国》在今年10月以全CG动画的方式出现在观众面前。本次动画请到多次参与制作CG动画的公司Orange负责制作，同时这也是Orange第一次","http://i2.hdslb.com/bfs/face/876bf5dfa8c583acb5f8689fc923077f6a2aba23.jpg@24w_24h.webp","AnimeTamashii","番剧","4615","168","33","https://i0.hdslb.com/bfs/article/31f3b1382a3dfd1148e00c4014c6ca0d5930b94f.jpg@860w_482h.webp"],["中国漫画家：水墨画师―丰子凯先生","观看须知： 这不会是个有趣的科普专栏，有的甚至很无聊，可我会一直做下去，我不想让别人忘了……忘了这们艺术！如果喜欢，欢迎关注，如果不喜，请文明用语……这是一个专门安利中国漫画和科普的系列，今","http://i2.hdslb.com/bfs/face/aecb22fb792b33bace517bec158960e301cab3d4.jpg@24w_24h.webp","Despair先生","国创","7679","234","57","https://i0.hdslb.com/bfs/article/e5aafcec8416f5bc1fc2c55840b3c6218b47db83.png@860w_482h.webp"],["一切从像素开始 — 浅谈FPS游戏的发展史(1)","哟，大家好，我是泽尼亚尔。其实在专栏系统推出我其实并没有申请资格，但是很奇怪的我后来看的时候我已经拥有了专栏作者的资格，在这个耐人寻味的事实发生之后一直没有一个合适的机会来撰写一篇像样的专栏文章。近日","http://i2.hdslb.com/bfs/face/c196a458183426f2d867fbf0e95680e51d5c1e37.jpg@24w_24h.webp","泽尼亚尔","单机游戏","2787","104","18","https://i0.hdslb.com/bfs/article/b23f70f97d3055d39ec4fcebb3d951a890fe1df4.png@860w_482h.webp"],["谈及校园欺凌和人生错位——电影《声之形》剧情略述及观影后感","わたし、耳が聞こえません。（我耳朵听不见。）我们在小学初中的时候，班级里一定有这样一个人，被全班排挤，能说话的人也只有一两个。淘气的男生也好，班上小团体的女生也好，总是看不惯这个人，用尽心思去找他麻烦","http://i1.hdslb.com/bfs/face/a5632ba70ace2563f4925914780513d1fd1f2b85.jpg@24w_24h.webp","KOKO鹿野凛乃","影视","1764","57","7","https://i0.hdslb.com/bfs/article/5869790a2a4190410b929fc5987a470ae73f5568.jpg@860w_482h.webp"],["专题向 | 《我的青春恋爱物语果然有问题》，谁的不是呢？","《我的青春恋爱物语果然有问题》是轻小说家渡航著作，该作品亦改编成TV动画和漫画。作品曾三年蝉联《这本轻小说真厉害！》榜首。作品主要讲述了放弃交朋友的比企谷八幡被老师带到全校第一美少女雪之下雪乃面前，加","http://i1.hdslb.com/bfs/face/a1395748c8265caecf0e7e15011dae1264fa93a8.jpg@24w_24h.webp","夜夜小生","番剧","36","3","1","https://i0.hdslb.com/bfs/article/1864f92a47b6851c5126e9f2f95ec379fe29843c.png@860w_482h.webp"],["白马的骑士（五）——偷袭","银河军已经发展拥有近万人了，林为了更好的管理将新加入的士兵改编为第二支军队——宇宙军。而最早跟随自己的士兵仍属于银河军。银河军属于精锐部队，为反抗军的核心力量，同时林也终于说服草原上的几个领主，为自己","http://i0.hdslb.com/bfs/face/aa59985584f7b4b5f09942fe2f5a78d254abfa58.jpg@24w_24h.webp","高琦大帅","原创","3","0","0","https://i0.hdslb.com/bfs/article/5532366c5adfc3fa7abb6486f4a5b1fb60fdeba4.png@860w_482h.webp"],["《守望先锋》公布被取消英雄 带喷气背包的猫","在今年的暴雪嘉年华上，《守望先锋》的制作团队公布了一名早期开发的英雄，后来这位英雄被取消了，英雄是一名带着喷气背包的猫。　　跟很多加入《守望先锋》的英雄一样，喷气背包的猫最早也是暴雪被取消的MMO游戏","http://i1.hdslb.com/bfs/face/9eec8cf5da85f3788883b6bc48c5d76d40092a57.jpg@24w_24h.webp","TGBUS电玩巴士","单机游戏","985","5","11","https://i0.hdslb.com/bfs/article/9e3b5eae76d6830ca32f8212fb8d3c6bf876d05d.jpg@860w_482h.webp"],["真正的爱/雪融之后","真正的爱 电视剧《平凡的世界》看完了，始终忘不了这一幕：少安在医院用板车拖着患了癌症的秀莲回家过年，快到家时，村里人都在桥头坡上迎接，而这时秀莲却因一路的颠簸晕睡了过去，当她醒过来时","http://i0.hdslb.com/bfs/face/98b25f996b46984151606b86fdfa8a576d50cc13.jpg@24w_24h.webp","Dm梦蓝","其他","8","0","0","https://i0.hdslb.com/bfs/article/fa15ca531ebc54fabba6d27d095a2e4eed9a5d76.jpg@860w_482h.webp"],["暴雪嘉年华Cos组冠军诞生 超逼真霍格大帝","Cosplay一直都是暴雪嘉年华上的重头戏，今年的Cos组比赛更是激动人心，最终由Laura Mercer扮演的《魔兽世界》“霍格”毫无争议的拿下冠军，霍格是很多联盟玩家心中的噩梦，暴雪曾经做过一个","http://i1.hdslb.com/bfs/face/9eec8cf5da85f3788883b6bc48c5d76d40092a57.jpg@24w_24h.webp","TGBUS电玩巴士","单机游戏","436","5","3","https://i0.hdslb.com/bfs/article/427092d88f449cf8d8154ee7988bafebed4813be.jpg@860w_482h.webp"],["第二十三章：封魂灵，显神威！","虽然之前的那位黑目大能欺骗了自己，但是封魂灵却还是不会骗人的，或许那封信是他生前写的，但死后却忘了里面的内容吧！虽然两方现在互不相让，但是谁都看得出来是鲜花门这边占尽了上风。当鲜花门掌门与昆仑派大掌门","http://i1.hdslb.com/bfs/face/941b8cddae0630430d6fed3b2bd72a4213d38eac.jpg@24w_24h.webp","泡妹子桑","原创","7","0","1","https://i0.hdslb.com/bfs/article/bff6171665ad3909f6709465f5aa5939a5bfbfb2.png@860w_482h.webp"],["不再","第一章续终于到了叔叔口中的我在日本的家，但是这里的一切都是莫名其妙的。人们说着莫名其妙的话，穿着莫名其妙的衣服，看我的眼神也是莫名其妙的。“这是你的二哥和姐姐。你的大哥和父亲一起去大阪了，但是很快就会","http://i1.hdslb.com/bfs/face/6fe52c536ced8711c0ba3f6c095efac096b371cc.jpg@24w_24h.webp","飒鹰12341","原创","5","0","0","https://i0.hdslb.com/bfs/article/b8c6e7d583d2600846176e606d65d4be62fed183.png@860w_482h.webp"],["GTX 1070 Ti 超频不超频？10秒","【国产原创】GTX 1070Ti 超频OC实录在双十一之前，NVIDIA的GTX 1070 Ti成为了最受关注的产品，各种造势，各种猜测，各种观望，最后在销售解禁日后，全部尘埃落定。两种声音目前占据最","http://static.hdslb.com/images/member/noface.gif","天尸在人间","数码","24","0","0","https://i0.hdslb.com/bfs/article/da9a4e9df5759bdd0e8dd0f86eae9d789ed3b443.jpg@860w_482h.webp"],["【来说说长板吧 - 基础技能 - dancing】","哈喽大家好这里是OMG摩羯的专栏这是【来说说长板吧】的第三篇【基础技能】之 Dancing建议先看看之前的两篇【来说说长板吧1】和【来说说长板吧-装备的选择与购买】 以及【基础技能之平花】 可以在这里","http://i1.hdslb.com/bfs/face/f63833fb4b824395212b051c21b1071a8c5a9739.jpg@24w_24h.webp","OMG摩羯","运动","31","2","0","https://i0.hdslb.com/bfs/article/8a75e6cc282623f90d920c5530848e3e52ad0eae.jpg@860w_482h.webp"],["原来WWE中的超级巨星们，手里竟然还有这么多不为人知的特权！","世界上摔角公司有非常多，但是WWE一直是行业中的龙头老大，力压群雄，这一点毋庸置疑，其他联盟加起来的总财力也不一定有WWE一家多。不过，无论WWE搞得有多大，它终究是一家私企而不是国企，公司内部的事情","http://i1.hdslb.com/bfs/face/d4a80c97489cde371fea8d5ad624f996090d0b08.jpg@24w_24h.webp","DiconAmbrose","其他","152","7","2","https://i0.hdslb.com/bfs/article/7aa5f41e6b61c899609b15ef0ead970868d89240.jpg@860w_482h.webp"],["路人已去，暨路人女主13卷读后感","今天早上终于有了路人13卷的全本翻译，迫不及待地去阅读了一下。看完之后，内心很有感触，没错，完结了，路人也完结了。结局和大家想的一样，惠的大胜利。但英梨梨和学姐的结局感觉有些悲凉。我忽然感觉丸户老贼的","http://i2.hdslb.com/bfs/face/6797cfa32fd6e727fba0724700e39f0d01555135.jpg@24w_24h.webp","Alameda丝","杂谈","32","0","1","https://i0.hdslb.com/bfs/article/b8f8a3c4b18ea370aa0d65487608bf08dba377c8.jpg@860w_482h.webp"],["谈恋爱需要成熟吗？","1成年人都要懂得“成熟”二字。漂泊在外记得给爸妈打个电话，这叫成熟；面对困难可以独立冷静解决，这叫成熟。成熟似乎就像身高、胡须、年龄，随着时间的推移，不断在我们身上占更大的比重。Y哥今天突然想到：谈恋","http://i0.hdslb.com/bfs/face/aec915490d667bc2e0644d82d63eaa9cd9d6fa88.jpg@24w_24h.webp","XY差异说","其他","525","25","18","https://i0.hdslb.com/bfs/article/cea2f21b34dcdce00e8ccdc134cb349a3f51f3c3.jpg@860w_482h.webp"],["《终结者2：审判日》八百万萝莉总教头游戏测评（惊现塞伯坦）","八百万萝莉总教头一听 终结者2 测试就立马下载了～由于总教头手机偏渣……所以游戏画质并不是最高画质，最高画质还是蛮好看的（反正我是来看风景的(๑˙ー˙๑)）素质海岛等待界面出生海岛做的蛮细致的风景也蛮","http://i2.hdslb.com/bfs/face/29ea33ba1074daa238d629cb3e20e0fa5f7978d9.jpg@24w_24h.webp","800万萝莉总教头","网络游戏","16","2","2","https://i0.hdslb.com/bfs/article/3864809e87ebed7595ba02aa4398f98638f80890.png@860w_482h.webp"],["灿烈喷掉一半财产买钢铁装！ 这次SM万圣节派对真的玩大了~","大家知道SM公司的艺人每年都要开万圣节派对，而且都打扮成不同造型人物，相当精彩！ 没想到今年的灿烈居然把自己变成钢铁人，整套装备帅爆了了！之前的SM万圣节经典造型有15年昌珉扮的艾斯，肌肉部分的还原度","http://i0.hdslb.com/bfs/face/d74311e458a05581439816c70a0a4c8b02530324.jpg@24w_24h.webp","1断水流大师兄","时尚","682","2","2","https://i0.hdslb.com/bfs/article/92accc79b7a8f1f1ffe010344215013fe5125e0a.jpg@860w_482h.webp"],["用一杯好茶倾心爱你","茶圣陆羽有云：“晴，采之。蒸之，捣之，拍之，焙之，穿之，封之，茶之干矣。”一盏好茶，得之不易 蒙顶甘露 柔嫩新鲜 采制极其不易 大自然赋予丰富的内含物质是基础，而做茶师傅的用心精制更","http://i0.hdslb.com/bfs/face/6286081b0b03032753260b5731d12e7d88051ffd.jpg@24w_24h.webp","茶娘子","美食","3","0","0","https://i0.hdslb.com/bfs/article/004f8f8aa16e8bb92477730c40af918dfac9fb51.png@860w_482h.webp"],["酩酊录【序章】","“江山无限好，山间枫叶红了多久了？虽行人未有几个匆匆，却总见这路上黄泥乱。若那当年一剑斩断万里山岳的剑者在此，定会叹一句黄昏静悄。”说书的老者饮罢手中一杯浊酒，缓了缓这胸中气。复又说道“诸君可知这崖山","http://i1.hdslb.com/bfs/face/36179ac9de0f73643c0981cdf2048737c6807857.jpg@24w_24h.webp","珈岚动漫社b站官方号","其他","16","1","4","https://i0.hdslb.com/bfs/article/a993e806cea489c1a9de70e70e7d26756384efdd.jpg@860w_482h.webp"],["《一番赏 Fate/Apocrypha》样品展示","预计于11月18日发售的《一番赏 Fate/Apocrypha》的奖品样本展示在Volks秋叶原爱好天国举办。‍‍‍‍‍《一番赏 Fate/Apocrypha》每次花费680日元（含税）可以进行一次抽","http://i0.hdslb.com/bfs/face/0b92b029026b6a14970fde61c7468bcdf03b9c23.jpg@24w_24h.webp","圣骑士·Saber","番剧","12","0","0","https://i0.hdslb.com/bfs/article/cec366ca3298c4bbe4563d28be872c493c60f66c.jpg@860w_482h.webp"],["论中国国民综艺制作人的评判标准 ――观奔跑吧第","今年是2017年，不但是综艺大年，更是娱乐圈近年来最波澜起伏的一个时光。 国民认同演技、国际有名的大花们大多因年纪或家庭原因慢慢需要退出历史舞台，而她们的衣钵由哪些小花来继承便成为了大众瞩目的焦点。","http://i1.hdslb.com/bfs/face/2be6bb0ce2c12b006473d4e62d8daea2da7590ee.jpg@24w_24h.webp","你好7号少年","影视","18","0","0","https://i0.hdslb.com/bfs/article/4b151967564c8297e99ae3152ed58576a7c8472b.png@860w_482h.webp"],["《镜像纷争》第一卷~~重启的征程~~第二章~~原来这东西不是打火机？~","独自走在傍晚的街上，恍惚的视线令人惋惜。有些悲伤，有些疲惫，是我的感受，也是这座城市的感受。似乎，所有的人都没有意识到发生的事，的确，在我刚刚知道这些之前，我也没有发现。或许这就是异变的力量。用双手拍","http://i2.hdslb.com/bfs/face/8316a44be7484c4d3c8177674eed3002f352008b.jpg@24w_24h.webp","珍珠泪-十万","原创","8","0","1","https://i0.hdslb.com/bfs/article/6b6f514589e27a910837f0454ead30f9ee34176f.png@860w_482h.webp"],["《两天一夜》郑俊英眼泪爆发：想快点去大哥身边","《两天一夜》郑俊英忆已故金柱赫，眼泪爆发。今日（11月5日）的KBS 2TV综艺节目《两天一夜》中，播出了\\"金柱赫特辑\\"。带着我们每一个人回忆了这位对所有成员来说踏实又愉快的大哥。而是在特辑的最后，还","http://i0.hdslb.com/bfs/face/d74311e458a05581439816c70a0a4c8b02530324.jpg@24w_24h.webp","1断水流大师兄","时尚","857","4","2","https://i0.hdslb.com/bfs/article/34a7d5a398868ef9b95a9536a7b448dde9fb31e5.jpg@860w_482h.webp"],["漂亮前台妹子兼职一周买了新iphone","我们公司有个漂亮的前台妹子iphone8出来之后咬牙分期买了得瑟了一个星期丢在地铁上了你以为结果就完了？她做了一周的兼职，居然又买了一部8plus我特别激动，我说：我也要去做兼职，你带带我呗她说你做不","http://i1.hdslb.com/bfs/face/b3402e847ba08c11f2a0c68f06ea746e1106beeb.jpg@24w_24h.webp","国产大狮子","原创","265","1","4","https://i0.hdslb.com/bfs/article/3efc4cd860fd6a42abd7ddea2c30c22683d767b0.jpg@860w_482h.webp"],["徐贤离开SM首发声：只要少时需要我 会跟姐姐们一起！","徐贤离开SM后首次公开心境，谈少女时代对于自己的意义。徐贤11月3日更新个人SNS写道：“不久前，我结束了和一起走过10年、像家庭般存在的SM之间的因缘。”通过文字，她感谢了社长李秀满把她从12岁平凡","http://i0.hdslb.com/bfs/face/d74311e458a05581439816c70a0a4c8b02530324.jpg@24w_24h.webp","1断水流大师兄","时尚","804","7","1","https://i0.hdslb.com/bfs/article/09422589cff5227313e7238e6a240f319eb147aa.jpg@860w_482h.webp"],["长夕长夕夜为安","《失乐歌》的最后一段乃千古绝唱，我看了他一眼，这种东西说转让了就转让了吗？　　在离开酒店之后，他看起来依旧闷闷不乐的样子。　　我只好带他游山玩水一番，借此引开这家伙的注意力，家里是反对这种无意义浪","http://i0.hdslb.com/bfs/face/1ee361292f28b5ffb9eb0760ceba8ae96069f3ff.jpg@24w_24h.webp","枫夕舞","原创","9","1","1","https://i0.hdslb.com/bfs/article/cf83d64630f5a3a1a68117f67e70d885cea135e5.png@860w_482h.webp"],["第七章 艾琳？大佬！","镜头切换回艾莉希雅所在的豪华宿舍中。　　“艾莉希雅？艾莉希雅！啊啦啊啦，真是调皮呢！”　　希琳的声音中带着一丝焦急，随后从腰间取出一根小小的魔杖，轻轻咏唱起咒语。　　“Explosion！！","http://i1.hdslb.com/bfs/face/14a83ee3378a9a6f091c5d14e631ea5a9744af80.jpg@24w_24h.webp","哟哟君的小胖次","原创","9","0","0","https://i0.hdslb.com/bfs/article/624a7ebe1a37d481efd4239a3069d32a1c9ec434.jpg@860w_482h.webp"],["钧天黑童话·第一回 降异象天玑得双子 寻仙山尊者结善缘","第一回 降异象天玑得双子 寻仙山尊者结善缘未至处暑，天气竟突然转了凉，百木凋落，乌云压顶了几日的天玑王城内开始簌簌下起了小雪。天降异兆，天官署上表陈情，天玑王一时难以定夺只吩咐发放粮草以及御寒之物，再","http://i1.hdslb.com/bfs/face/fe8de44566ee2091b46c59ccfe1526fcffd49bf0.jpg@24w_24h.webp","言瑾书","同人","47","3","1","https://i0.hdslb.com/bfs/article/5668ae2af9d233b81e5623d3ce6e01d2c88c785f.png@860w_482h.webp"],["闲小鸟女警觉醒动图一波！","闲小鸟女警觉醒动图一波！斗鱼最有情趣的直播间99438，你不关注一下吗？小闲的微信号：Mayuki小闲小闲的斗鱼直播间号码：99438 小闲的B站视频：Mayuki小闲闲闲 小闲的B站直播视频：小闲保","http://i0.hdslb.com/bfs/face/30984b36b8701a19e2e1e4af110791337c3c343a.jpg@24w_24h.webp","小闲保镖KG","网络游戏","376","16","14","https://i0.hdslb.com/bfs/article/5bccc5fb7236aa1a150ed7c71d131ae6346cc87e.jpg@860w_482h.webp"],["日本两种人不能当首相，一种是皇族，另外一种是什么？","今天来说的是日本一个任期最短的首相，东久迩宫稔彦。东久迩宫稔彦，皇族。其先祖是日本南北朝时期的崇光天皇（1334年生——1398卒）。在古代，日本人是没有姓氏的。他们不需要认祖归宗，就一个民族，和族；","http://i0.hdslb.com/bfs/face/6c53f3388a78c23ea992095af2eec6300fd656ed.jpg@24w_24h.webp","飞春读传","其他","25","0","0","https://i0.hdslb.com/bfs/article/5db24bfdd49c2e3c7c9ff359818c4c7561ab6419.jpg@860w_482h.webp"],["自信训练营 - Confidence Bootcamp!","我一年之前就开始做【打破平庸】的视频，初心就是帮助大家打破平庸，做更给力的自己。但我发现一个很奇怪的现实……就是我书看的越多，知识越丰富，但我生活并没有什么大的改变。因为……读万卷书不如行万里路！我们","http://i2.hdslb.com/bfs/face/cfab3fc5ef467c6425675eae4deeda7d07fa758e.jpg@24w_24h.webp","郝给力","其他","321","21","4","https://i0.hdslb.com/bfs/article/7e27df7903b4911a738cd877d1ac59190ee26498.jpg@860w_482h.webp"],["【不要后颈】《对不起，兵长，我养你1.0（崩坏版）》――第①话：艾伦，这是怎么肥四","作为一个死心塌地的利厨，我先把原文链接发上来。第①话：艾伦，这是怎么肥四？http://www.bilibili.com/read/CV43311 【以下为崩坏版，up不需要后颈系列】　当艾儿明告诉三","http://i2.hdslb.com/bfs/face/7ff510437b4ef0ea850abdfde01ba4a65c099757.jpg@24w_24h.webp","利威尔是绝世小受","同人","11","0","0","https://i0.hdslb.com/bfs/article/e1000793526c926157dc0bddb530896fef197242.png@860w_482h.webp"],["多重人格侦探 09","原作:大冢英志 漫画:田岛昭宇视频改编:魔污教主小说主笔:浮华半日生--------------------------------------精神控制，是达成完美犯罪不可缺少的一步。肉体上的残害，","http://i1.hdslb.com/bfs/face/43f86beccc4f24e397218f9ba23644913ca2d0c0.jpg@24w_24h.webp","腾云驾雾狮子头","同人","19","1","0","https://i0.hdslb.com/bfs/article/79043b602276dd209919161f5398777a5238b966.jpg@860w_482h.webp"],["“喂，你好，是麦当劳吗？”“你打错了，这是‘金拱门’”","最近看到了一篇超有趣的消息我们熟悉的麦当劳悄咪咪的改了名字，以后要叫它“金拱门”了工商信息显示，今年的8月24日起，麦当劳（中国）有限公司的投资者名称从“麦当劳中国管理有限公司”变更为“金拱门中国管理","http://i0.hdslb.com/bfs/face/0ab84a257ecb5aa703c9cdaff377cad68273fb6f.jpg@24w_24h.webp","ACG情报屋","美食","1258","1","0","https://i0.hdslb.com/bfs/article/e651b4fbe0f863178cc763142ccc63daf33336fa.jpg@860w_482h.webp"],["【植物大战僵尸奇幻时空之旅】第二十八章","(第一次进来的朋友这里是序章传送门序章) 夜色笼罩着大地。　　植物们有些和戴夫躺在了车内，有些躺在了车旁的草地上，睡得正香。　　我负责今晚值班，于是找了棵比较矮的树，用了半天爬到","http://i2.hdslb.com/bfs/face/1270482c7a8f49aec7c88e10fc824fe2186b427d.jpg@24w_24h.webp","八个雅鲁","同人","11","0","0","https://i0.hdslb.com/bfs/article/778372e316652acc35697cfd308e3ff634e664ce.jpg@860w_482h.webp"],["雜談《聖經》——066〈撒慕爾紀上〉第三十章","當達味軍與培肋舍特軍分道揚鑣之後，便打道回府，結果就發現阿瑪肋克人洗劫了他的根據地，並且還搶走了他的兩個押寨夫人。於是達味領兵追擊，立刻從阿瑪肋克人的手中搶回了一切。這場小衝突除了彰顯達味是如何用兵如","http://i0.hdslb.com/bfs/face/0b8fdda36ef74cd30dda383a978b5508435a3eaf.jpg@24w_24h.webp","LQY40","趣味科普","22","0","0","https://i0.hdslb.com/bfs/article/ffc517b593e3be675eaec7448f5f955fcffccbc2.jpg@860w_482h.webp"],["【APH全员向】温暖的黑暗 4 尝试","Partie Quatre 尝试8月22日上午，APH市E区。虽然自家赌场楼上有个酒店还是五星级的，更不用说酒店里的餐厅掌厨的那位据说还蛮有名的，莫娜也不喜欢在那种所谓的高格调下营造出的拘束环境中用餐","http://i2.hdslb.com/bfs/face/9ed94cb081b01d1f883749fb5a1059b07a2b6ee7.jpg@24w_24h.webp","灰条纹的灰猫君","同人","3","0","0","https://i0.hdslb.com/bfs/article/337e8680b78924922fba486b26d557c0e2dc27f5.jpg@860w_482h.webp"],["访谈屋[第一期]对话：赫萝老师","这是UP主新开的坑，不定期更新，专访B站的各个区的UP主，不过，有不会有人接受？就看我运气了……今天我们很有幸的请到了我特别喜欢的一位UP主：赫罗老师老师接受了我们专访在这里介绍下赫萝老师：赫萝老师，","http://i2.hdslb.com/bfs/face/aecb22fb792b33bace517bec158960e301cab3d4.jpg@24w_24h.webp","Despair先生","番剧","58","6","3","https://i0.hdslb.com/bfs/article/102015356cc36831c2e3990038a20fdfafe0c490.png@860w_482h.webp"],["《超能守恒》（背景介绍篇）亦安宁险","段家，曾经是牧川显赫一时的大族。祖辈早年生意起家，后辈商场、杀场、官场穿梭无数。但是担子到了段阡这个人身上，就变得格为沉重。因为当时正好赶上了超能时代的前沿，想要一举成名是非常困难的。就在这时，和他最","http://i2.hdslb.com/bfs/face/49fd3798d853ffe65f4a56c75b6cb4cb6484315a.jpg@24w_24h.webp","墨言雅羽","原创","5","1","1","https://i0.hdslb.com/bfs/article/3f8e9cfe1b0121b3f6327c3f58ce911fd913eab9.png@860w_482h.webp"],["制作爸爸去哪儿、奇葩说的人物头部放大特效","HELLO，大家好，我是爱生活的乐先生，欢迎来到乐先生的私塾，在综艺节目里经常会出现放大人物头部的效果，这种效果一般都会放大人物的某个表情，使这个表情变得更加生动、搞笑。今天呢就教大家利用Pr去实现这","http://i0.hdslb.com/bfs/face/5e7991a7960704d79e51067066c789048fd1c89b.jpg@24w_24h.webp","robyn1984","趣味科普","122","4","0","https://i0.hdslb.com/bfs/article/2fb15728f351a1367b0ccf53f176fd6ab8acf4ab.jpg@860w_482h.webp"],["活着／对话","#活着的思考凌晨00：32 登录QQ［我］有人吗？我刚看完了三十二，想聊聊天 。［天言紫］嗯！有的有的！我看的是二十二，不过是一个记录，你想聊什么？我想我们聊得起来的！［冷行风］恩，有。［花幽君］","http://i0.hdslb.com/bfs/face/ad08f116325fa300e32bbd13a9c44bd20c600118.jpg@24w_24h.webp","望阿七","原创","9","0","0","https://i0.hdslb.com/bfs/article/9e2030653c3cfdad607a8b495324f9a8fd22d2c9.png@860w_482h.webp"],["天气太冷冻死流浪猫","天气太冷冻死流浪猫看着好可怜，今天上班走小路发现的 某男如果我平时看到有猫咪朝我要吃的，我肯定会给的，如果很友善我会带回家我现在有土狗，但是没有猫做人要做猫狗双全的人不像有些人，表面上光鲜亮丽，背地里","http://i1.hdslb.com/bfs/face/b3402e847ba08c11f2a0c68f06ea746e1106beeb.jpg@24w_24h.webp","国产大狮子","动物圈","236","6","3","https://i0.hdslb.com/bfs/article/d1d24f030ab70689be8d7cbde215f0618db9f21e.jpg@860w_482h.webp"],["原创小说《双城》第十三章","水里不容易站稳，兰城只能扶着李竞择，然后李竞择让兰城先练习在水里憋气。兰城害怕得很，一憋气就心慌得不行，抓着李竞择不肯松手。　　李竞择:“没事，不用担心，大胆点儿，我不会松手的。”　　反复往水里沉","http://i2.hdslb.com/bfs/face/42db5d51c076eb7877585d04ab22c62c57682441.jpg@24w_24h.webp","睡在衣柜里的猫","原创","25","1","1","https://i0.hdslb.com/bfs/article/dd436ff865a38f8d19d6a79cf023f6376f997943.png@860w_482h.webp"],["这不被埋没的B站9.5分动漫，是难得一见的佳作！！","2011年注定是动漫大热的一年，1月有热门神作《魔法少女小圆》和名作之壁《IS》；4月有眼泪收割机《未闻花名》、反转神作《命运石之门》。在这样的环境下，《GOSICK》这样一部看名字不知所云的作品，注","http://i1.hdslb.com/bfs/face/373a666479ac16a2d052371a142b455f3a840c47.png@24w_24h.webp","一部收藏夹","番剧","181","6","4","https://i0.hdslb.com/bfs/article/2f4805c22836c5a8f01098cc64367905bf557be8.jpg@860w_482h.webp"],["融化你的温度 第三十节/和谐公告","因内容被河蟹于是第三十节是没有的（因为我写了肉进去但是没有敏感词，不知道为什么还是不给过审）请书友们谅解，今后的文可能会改成稍微清水的感觉，B站不给过审只能拉灯（等我开了新微博之后会写在微博里，大家不","http://i1.hdslb.com/bfs/face/67109a8d5e94796623f5c85720607f1aba5a1d1b.jpg@24w_24h.webp","二分之一王子sama","原创","84","4","7","https://i0.hdslb.com/bfs/article/61dd4d55a94941fa105723a4fee889acf4923874.jpg@860w_482h.webp"],["被称作是人生电视剧的韩剧TOP 10！ 有没有你心中那部经典呢？","最近韩国网友总结了经常被称为「人生电视剧」的十部韩剧，有没有你心目中的最佳。以下排名不分先后~1. 《咖啡王子一号店》播出时间：07.07.02~07.08.27这部算不算女扮男装的启蒙剧XDD扮成假","http://i0.hdslb.com/bfs/face/d74311e458a05581439816c70a0a4c8b02530324.jpg@24w_24h.webp","1断水流大师兄","影视","968","4","21","https://i0.hdslb.com/bfs/article/620854d665bf9b8d65f1a7c9cac0fa5cb493c154.jpg@860w_482h.webp"],["年华不过一场醉意，岁月也曾凝霜，谁拿流年，乱了浮生","独坐红尘一隅，工笔勾勒浮生，韵诗唯美古典，弹绝美箜篌，浸清茶余温，睹浮世飘零，谁染指一场镜花，独奏一曲伤魂的月牙。 潇湘暮雨，珠帘含羞，花弄影墙，馥香盈怀，清风舞垂柳，幽梦落花间，两眉间，却是相思尽染","http://i2.hdslb.com/bfs/face/e9963bd98d0856655c5854e5e640cedce3b0838c.jpg@24w_24h.webp","南宫三木","其他","7","0","0","https://i0.hdslb.com/bfs/article/10222898522112a83ed865fa00fc765653008c5a.png@860w_482h.webp"],["关于视频上传的","以后我每天晚上3点左右更新，至于什么时候上传完毕，我也不知道(๑•ั็ω•็ั๑)，还有就是本人正在上职高……可能有的时候不能更新，望大家谅解(๑•ั็ω•็ั๑)。关于我的口音的话呢，是因为我是一个","http://i0.hdslb.com/bfs/face/8ced6291414b6b5b10ce63929a9054a9b086c57d.jpg@24w_24h.webp","燚炽髟","其他","5","1","0","https://i0.hdslb.com/bfs/article/42446f0530112215925ad120490ca2cc2445caa3.png@860w_482h.webp"],["宇宙起源序章","地球之外是太阳系，太阳系之外是银河系……无数个银河系构成这广阔无垠的宇宙。而宇宙起源，则是大多数人所认可的大爆炸理论。但在爆炸前，那是什么物质呢？一种黑乎乎的物质，无法定义？人类的智慧是有限的，宇宙是","http://i2.hdslb.com/bfs/face/8f951cf084f842cec21f0a88848694968d59bd0e.jpg@24w_24h.webp","红颜如水更似祸","原创","25","0","0","https://i0.hdslb.com/bfs/article/52279479d0f8f40678c70d51afc68522728866e4.png@860w_482h.webp"],["总决赛比赛现场","分享一下没加水印什么，自己保存下去，发给朋友什么的，，然后我开始凑齐字数了，是时时刻刻的健身卡开口没多久杀宝贝你的就是你分享一下没加水印什么，自己保存下去，发给朋友什么的，，然后我开始凑齐字数了，是时","http://i0.hdslb.com/bfs/face/0ea71f8476d579a9c70680be62eb89297d395de2.jpg@24w_24h.webp","箫手哥哥","电子竞技","39","1","0","https://i0.hdslb.com/bfs/article/a23549502cb33374cfdaf18bca0105cff5ce920f.png@860w_482h.webp"],["【魔能纪元】第一章 师傅走进门，拜师在个人","虚灵镇的天空总是那么的蓝，万里无云，仿佛天地间只剩下这一片湛蓝的天空，让人看了之后有一种这片天包容着万物的感觉，就像只有这片天的底下存在着安宁。 “咚、咚、咚…”随着一阵不急不","http://i2.hdslb.com/bfs/face/e23d5c81249a9e37abda7777294bc13e18b9b952.jpg@24w_24h.webp","灼烨Gg","原创","10","0","0","https://i0.hdslb.com/bfs/article/f8153f7174209c11e96df98025ce56c423e977e7.jpg@860w_482h.webp"],["一个让人难以想象的标题","啥都没有，不用看，看了也白看，来了投个币再走呗，或者充个电也行啊，第一次，我也不清楚，麻烦有大佬给我介绍一下，这个的规则说明吗？那啥，我就先等你们的消息吧！为了，蒙混过关，此处省略一百零5字 。。。。","http://i2.hdslb.com/bfs/face/d2413a7e4069cbed60d376aad4afd0c48f0fc439.jpg@24w_24h.webp","acd88","手机游戏","14","0","0","https://i0.hdslb.com/bfs/article/23d44ea62b58e2ba69b0217d2f704afd51d37413.png@860w_482h.webp"],["＃公主吻醒了恶魔＃","公主吻醒了恶魔。公主还是一个小小的公主，奶声奶气的，天天在古堡里跑来跑去，搞的仆人们人仰马翻。“公主，您小心点啊，公主！”“没事的，我会小心。我想吃烤松饼，你快去做！”“是。”跑着跑着，小公主就跑到了","http://i2.hdslb.com/bfs/face/89e5f3cd67bc06553c7b19a0a8415d763ace90e4.jpg@24w_24h.webp","一条咸鱼顾焕焕","原创","21","2","0","https://i0.hdslb.com/bfs/article/446194a4049b8634328e83b275a4c3e74bf982f8.png@860w_482h.webp"],["“AMD杯”深渊联赛 - 决赛日回顾","深渊联赛决赛日开打前，我认为最让人难受的结局无非是另一个“3比0”。但是当VG在那场世纪大战中胜出的时候，我仿佛看到了那么一丝希望。到了决赛，当VG在BO5首局中暂居上风，剧情似乎开始朝着相反的方向发","http://i1.hdslb.com/bfs/face/ded09522f49898a1b1ed7a113cbf0bc5d779101a.jpg@24w_24h.webp","DogeGamer","电子竞技","25","0","1","https://i0.hdslb.com/bfs/article/fcffae47b0adcd9e8cf9a933670cd4d4d8c356e5.jpg@860w_482h.webp"],["《山水有相逢》执光同人文 第二章：名声起（祝吕鋆峰生日快乐！！）","天璇国　　新的一天，太阳照常升起，天璇的朝堂上的处处洋溢着不同于瑶光的朝气。各位大臣三五成群的聚在一起，窃窃私语地讨论着这个国家的江山社稷，和这世间的家长里短。　　“王上驾到！”朝堂外传来太监细长而又","http://i1.hdslb.com/bfs/face/657eda242503beeedef236618c2eb3caea1c6d22.jpg@24w_24h.webp","周七_","同人","14","1","0","https://i0.hdslb.com/bfs/article/1a50ff7d26dff861093be946622fc92da045f00a.png@860w_482h.webp"],["“AMD杯”深渊联赛 - 第三日回顾","深渊联赛第三日的主角毫无疑问是两支中国战队，以及压在他们头上的两座大山。在胜者组的BO3与败者组的BO1中，四支队伍为我们贡献出了三局让人连连叫绝的比赛。昨日被VG2：0打入败者组的VP在败者组首轮碰","http://i1.hdslb.com/bfs/face/ded09522f49898a1b1ed7a113cbf0bc5d779101a.jpg@24w_24h.webp","DogeGamer","电子竞技","9","0","0","https://i0.hdslb.com/bfs/article/5297f7730a619c61bccff1446c2264a9a26be6c9.jpg@860w_482h.webp"],["每天的纯爱小段子（第四十七天）","183.男人走后第五天，他把自己关在房里五天。每天对着男人的照片，听男人喜欢的音乐。男人磁性的声音回荡在耳边，“戒烟吧，对身体不好~”“一定要吃早饭！”他摸摸照片上的人，自言自语：“怎么办？我开始想你","http://i0.hdslb.com/bfs/face/9c774b3d2ed8067d530f80d542e1601ae0aedf4c.jpg@24w_24h.webp","萝卜上的小黑兔","杂谈","29","5","0","https://i0.hdslb.com/bfs/article/98cbb6cafb49cd5967f2e03edb3accb624660a9d.png@860w_482h.webp"],["写写。。。","2204年，丧尸病毒爆发，世界瘫痪，大多数人感染病毒死去，变成丧尸，少数却因祸得福，被感染后得到了特殊能力，他们被称为“能力者”。　　我，凌劫，一名普通的高中生，被牵扯到这场灾难之中，同时，我","http://i1.hdslb.com/bfs/face/8d445bbf6e4164fcd55e1ff9036491471569bc9e.jpg@24w_24h.webp","狂殿红","原创","34","0","0","https://i0.hdslb.com/bfs/article/d309a819d33e4ca9960e08f46a4e1bd6583469e8.jpg@860w_482h.webp"],["《我的青春恋爱物语果然有问题》——大老师经典语录(第六期)","【51】：孤高所以至高，所谓真正的英雄就是一个人。因为孤高所以强大。没有持有羁绊也就是说没有必须守护的东西。必需守护的东西换言之就是弱点。就是因为有弱点才会失败。因此没有弱点，没有必须守护的东西，","http://i1.hdslb.com/bfs/face/8b721b30025c719dfced445e3e57053620697f90.jpg@24w_24h.webp","JayceQWQ","番剧","53","3","0","https://i0.hdslb.com/bfs/article/5d2d497643ef10e23c11ce8beb2374ff52a985f1.jpg@860w_482h.webp"],["【盘点/音乐推荐】网易云精彩评论——纯音乐","【1】The Truth that You Leave212000赞【2】三葉のテーマ7907赞【3】谷雨11129赞【4】19675054赞【5】夏恋22934赞【6】花火が瞬く夜に63472赞【7","http://i1.hdslb.com/bfs/face/8b721b30025c719dfced445e3e57053620697f90.jpg@24w_24h.webp","JayceQWQ","其他","13","2","0","https://i0.hdslb.com/bfs/article/01d67e27491d25082270c2245843885548e2871c.png@860w_482h.webp"],["试作式小说-（杀手大学生的日常）-评论过5更第二章--第一章：杀手","这是一座大庄园，拥有者是本地区的五大毒贩之一的马斯兰，传闻马斯兰怕黑，所以不管任何地方，任何时候，都得有灯，要是没有灯，说什么他都不会去那个地方，所以尽管已经是深夜两点，这个庄园依然灯火通明，守卫也非","http://i2.hdslb.com/bfs/face/7f4079dc1e2e7c71bd6347ebe937649bb8562269.jpg@24w_24h.webp","尸雨零","原创","5","0","0","https://i0.hdslb.com/bfs/article/85a78b821cdaeeecd41f1c019e10bb8a6a8533fd.jpg@860w_482h.webp"],["15.莫名的感情","第二天中午。　　“哈，好久没有睡得这么熟了。”欣欣揉了揉松懈的眼睛，模模糊糊中，好像看到了一个人影。“喂，你终于醒了。”　　倚着门框，拿着手里的镜子不断的摆着pos，不是那个变态的苍雨俊会是谁？欣","http://i0.hdslb.com/bfs/face/b5ab3f961f6c028138ceaff63e7b5451c9fa2c6a.jpg@24w_24h.webp","R洛小可","原创","9","0","0","https://i0.hdslb.com/bfs/article/f0c5ef3d509560fa3b787e8c394196305a491216.png@860w_482h.webp"],["东方同人 东方续幻想 #7","(由于沉迷弹幕无法自拔拖更了，抱歉。)7败了。绿无法相信自己的眼睛，黄也是。她们最为尊敬的，那个八云橙大人，竟然败得那么彻底。连云外镜的第一张符都没击破。八云橙一节节，从建筑跳回到了鸟居顶上。而云外镜","http://i1.hdslb.com/bfs/face/521ca35b7f6ea8f4213ccf71e4d27c89fdb7904a.jpg@24w_24h.webp","typeBlade","同人","5","0","0","https://i0.hdslb.com/bfs/article/c4d7d332ea232b0443c9260f9846369ae3cb51a9.png@860w_482h.webp"]]`
SpecialColumnRecommend = JSON.parse(SpecialColumnRecommend).map((v)=>({
  title: v[0],
  info: v[1],
  faceImg: v[2],
  nikeName: v[3],
  type: v[4],
  view: v[5],
  like : v[6],
  reply : v[7],
  cover : v[8],
}));

export {
  Recommend,
  SpecialColumnSwipeImages,
  SpecialColumnRecommend
}
