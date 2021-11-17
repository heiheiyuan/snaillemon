module.exports = {
  theme:"antdocs",
  title: "蜗牛柠檬",
  description: "慢悠悠的蜗牛也会酸你们疯狂内卷后的优秀~",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/lemon.png" }]
  ],
  markdown: {
    lineNumbers: false,
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3, 4, 5] }
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    // sidebar: require("./config/sidebar"),
    sidebar: {
		'/blog/': [
		{
			title: '介绍',
			children: [''],
		},
		{
			title: '数据结构',
			children: ['数据结构01——红黑树'],
		},
		{
			title: '算法',
			children: ['算法01——快速排序','算法02——找到奇数次的两个数','算法03——链表.md'],
		},
		{
			title: '多线程',
			children: ['多线程01——进程、线程、任务','多线程02——特性','多线程03——同步机制', '多线程04——玩转线程','多线程05——线程间协作'],
		},
		]
	},
	// sidebar: 'auto',
	sidebarDepth: 5,
    lastUpdated: "Last Updated",
    repo: "https://github.com/heiheiyuan",
    editLinks: false,
  },
};
