//create by: 邓志锋 <280160522@qq.com> <https://www.diygw.com> DIYGW可视化设计一键生成源码
Page({
	data: {
		//用户全局信息
		userInfo: {},
		collapseDatas: [
			{ text: '柳河县', isShow: true },
			{ text: '柳河镇', isShow: false },
			{ text: '三源浦镇', isShow: false }
		],
		tmap1: {
			width: 30,
			height: 30,
			latitude: 42.28,
			longitude: 125.74,
			markers: [
				{
					id: 0,
					width: 30,
					height: 30,
					latitude: 42.28,
					longitude: 125.74,
					callout: {
						content: '柳河县',
						padding: 10,
						borderRadius: 2,
						display: 'ALWAYS'
					},
					iconPath: '/static/markers.png'
				}
			]
		},
		text: `<p style="text-align: center;">详细</p>`,
		text1: `<p style="text-align: center;">导航</p>`,
		tmap: {
			width: 30,
			height: 30,
			latitude: 42.29,
			longitude: 125.74,
			markers: [
				{
					id: 0,
					width: 30,
					height: 30,
					latitude: 42.29,
					longitude: 125.74,
					callout: {
						content: '中国吉林省通化市柳河县富民路',
						padding: 10,
						borderRadius: 2,
						display: 'ALWAYS'
					},
					iconPath: '/static/markers.png'
				}
			]
		},
		text2: `<p style="text-align: center;">详细</p>`,
		text3: `<p style="text-align: center;">导航</p>`,
		tmap2: {
			width: 30,
			height: 30,
			latitude: 42.05,
			longitude: 125.76,
			markers: [
				{
					id: 0,
					width: 30,
					height: 30,
					latitude: 42.05,
					longitude: 125.76,
					callout: {
						content: '三源浦镇',
						padding: 10,
						borderRadius: 2,
						display: 'ALWAYS'
					},
					iconPath: '/static/markers.png'
				}
			]
		},
		text4: `<p style="text-align: center;">详细</p>`,
		text5: `<p style="text-align: center;">导航</p>`
	},
	onLoad(option) {
		this.init();
	},
	onShareAppMessage() {},
	onShareTimeline() {},
	onShow() {},
	async init() {},
	changeCollapse(evt) {
		let { index } = evt.currentTarget.dataset;
		let collapseDatas = this.data.collapseDatas;

		for (let i = 0; i < collapseDatas.length; i++) {
			if (collapseDatas[i]['isShow'] && i == index) {
				collapseDatas[i]['isShow'] = false;
			} else {
				collapseDatas[i]['isShow'] = i == index;
			}
		}
		this.setData({ collapseDatas });
	},
	clickTmap1Marker(evt) {
		let marker = this.data.tmap1.markers[evt.detail.markerId];
		if (marker && marker.action) {
			this.navigateTo(marker.action);
		}
	},
	clickTmapMarker(evt) {
		let marker = this.data.tmap.markers[evt.detail.markerId];
		if (marker && marker.action) {
			this.navigateTo(marker.action);
		}
	},
	clickTmap2Marker(evt) {
		let marker = this.data.tmap2.markers[evt.detail.markerId];
		if (marker && marker.action) {
			this.navigateTo(marker.action);
		}
	}
});
