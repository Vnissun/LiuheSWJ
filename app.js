//create by: 邓志锋 <280160522@qq.com> <http://www.diygw.com>
require('./page-extend');
App({
	globalData: {
		userInfo: null,
		tabBar: [],
		homePage: '/pages/index',
		pages: [
			'/pages/index',
			'/pages/index/resources/list',
			'/pages/index/industry/list',
			'/pages/index/enterprise/list',
			'/pages/index/about/list',
			'/pages/index/project/list',
			'/pages/index/policy/list',
			'/pages/index/video/list',
			'/pages/index/article/card',
			'/pages/index/article/kaifaqu',
			'/pages/index/resources/article/tudi',
			'/pages/index/resources/article/linye',
			'/pages/index/resources/article/shuili',
			'/pages/index/resources/article/kuangchan',
			'/pages/index/resources/article/laingshi',
			'/pages/index/industry/article/medicine',
			'/pages/index/industry/article/agricultural',
			'/pages/index/industry/article/service',
			'/pages/index/industry/article/tourism',
			'/pages/index/industry/article/strategic',
			'/pages/index/enterprise/article/zixin',
			'/pages/index/enterprise/article/changlong',
			'/pages/index/enterprise/article/longtai',
			'/pages/index/enterprise/article/zhengtong',
			'/pages/index/enterprise/article/xiuzheng',
			'/pages/index/enterprise/article/zhongsheng',
			'/pages/index/enterprise/article/tianqiang',
			'/pages/index/enterprise/article/renmin',
			'/pages/index/enterprise/article/siwei',
			'/pages/index/about/article/supply',
			'/pages/index/about/article/traffic',
			'/pages/index/about/article/education',
			'/pages/index/about/article/health',
			'/pages/index/about/article/human',
			'/pages/index/about/article/government',
			'/pages/index/about/article/service',
			'/pages/index/video/article/travel',
			'/pages/index/area/map',
			'/pages/index/area/article/liuhezhen',
			'/pages/index/area/article/sanyuanpu',
			'/pages/index/area/article/gushanzi',
			'/pages/index/area/article/shengshui',
			'/pages/index/area/article/ankou',
			'/pages/index/area/article/tuoyao',
			'/pages/index/area/article/shijia',
			'/pages/index/area/article/xiangyang',
			'/pages/index/area/article/jiangjia',
			'/pages/index/area/article/wudao',
			'/pages/index/area/article/hengtong',
			'/pages/index/area/article/liangshui',
			'/pages/index/area/article/luotong',
			'/pages/index/area/article/hongshi',
			'/pages/index/area/article/liunan',
			'/pages/index/area/article/caisheng',
			'/pages/index/area/article/daohang',
			'/pages/index/area/article/zhonggang',
			'/pages/index/policy/article/chanye',
			'/pages/index/policy/article/lvyou',
			'/pages/index/project/article/shimo',
			'/pages/index/project/article/lidian',
			'/pages/index/project/article/yuanqu'
		],
		userData: {}
	},
	onLaunch() {
		wx.getSystemInfo({
			success: (e) => {
				this.globalData.StatusBar = e.statusBarHeight;
				let capsule = wx.getMenuButtonBoundingClientRect();
				this.globalData.WindowWidth = e.windowWidth;
				this.globalData.PixelRatio = 750 / e.windowWidth;
				if (capsule) {
					this.globalData.Custom = capsule;
					this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
				} else {
					this.globalData.CustomBar = e.statusBarHeight + 50;
				}
			}
		});
	},
	onShow() {},
	onHide() {}
});
