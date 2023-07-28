//create by: 邓志锋 <280160522@qq.com> <https://www.diygw.com> DIYGW可视化设计一键生成源码
Page({
	data: {
		//用户全局信息
		userInfo: {},
		text: `<p style="text-align: center;">导航街道</p>`,
		text1: `<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;"><strong>一、街道区划整体范围</strong></span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（一）四至范围：柳河县导航街道办事处成立于<span lang="EN-US">2019</span>年<span lang="EN-US">2</span>月，辖区面积<span lang="EN-US">10.79</span>平方公里，东起和兴路、英利路、东方红村与城南村村界，西至河北村与联合村村界，南起东方红村、河北村与联合村村界，北至北山。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（二）区域概况：街道下辖民主、振兴、河北、建设、导航、场站、靖安<span lang="EN-US">7</span>个社区居委会，河北村、城南村<span lang="EN-US">2</span>个行政村，城南屯、新立屯、王家屯、王船口屯、张油坊屯<span lang="EN-US">5</span>个自然屯，街道总人口<span lang="EN-US">24511</span>户<span lang="EN-US">57870</span>人，其中村民<span lang="EN-US">889</span>户，人口<span lang="EN-US">3059</span>人；城区居民<span lang="EN-US">23622</span>户，人口<span lang="EN-US">54811</span>人。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;"><strong>二、资源情况</strong></span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（一）人力方面：街道总人口<span lang="EN-US">24511</span>户<span lang="EN-US">57870</span>人，其中村民<span lang="EN-US">889</span>户，人口<span lang="EN-US">3059</span>人；城区居民<span lang="EN-US">23622</span>户，人口<span lang="EN-US">54811</span>人。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（二）水利方面：辖区境内有一统河及三道沟河</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（三）农业养殖方面：畜禽存栏量，猪约<span lang="EN-US">2000</span>头、牛约<span lang="EN-US">200</span>头、羊约<span lang="EN-US">40</span>头、家禽约<span lang="EN-US">4000</span>只左右。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（四）农业种植方面：有蔬菜大棚<span lang="EN-US">132</span>个，其中闲置<span lang="EN-US">56</span>个。农作物总播种面积<span lang="EN-US">3356</span>亩其中籽粒玉米<span lang="EN-US">3065</span>亩、水稻<span lang="EN-US">40</span>亩、瓜菜<span lang="EN-US">251</span>亩，还有<span lang="EN-US">160</span>亩农用地适合建蔬菜大棚，发展旅游采摘。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（五）我辖区内教育资源丰富，有三所小学、一所初中、一所重点高中及一所普高，和一所职业中学。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（六）我区域内医疗资源也非常丰富，有柳河县县医院及柳河县中心医院。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（七）我辖区内有多座广场，金达莱广场、领袖一方广场、柳染丹青广场和在建的衍庶街广场及体育馆等休闲健身等场所非常适宜居住。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（八）特色产业：城南村和河北村种植温室大棚，及辖区内有电商小镇。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">（九）原柳河镇工业园区坐落我街道，已实现全面&ldquo;五通一平&rdquo;现有工业用地约<span lang="EN-US">70</span>亩，和个别闲置厂房。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;"><strong>三、产业情况：</strong></span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">辖区内八大行业企业有<span lang="EN-US">13</span>家，城南村和河北有蔬菜大棚<span lang="EN-US">132</span>个，其中再用<span lang="EN-US">76</span>个，闲置<span lang="EN-US">56</span>个。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;"><strong>四、未来发展方向及合作意向：</strong></span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">发展方向：结合我辖区内的实际情况，未来发展方向主要趋向于对发展特色农业园区开展蔬菜大棚特色种植及旅游采摘和围绕电商小镇方面发展农业与电商相结合。结合实际情况盘活利用区域内闲置厂房及设备。同时围绕县域旅游发展项目，利用河北村动漫墙进行动漫村的改造，打造出一个动漫特色村争取成为网红村服务旅游。</span></p>
<p class="MsoNormal" style="text-indent: 24.0pt; mso-char-indent-count: 2.0; line-height: 150%;"><span style="font-size: 12.0pt; mso-bidi-font-size: 16.0pt; line-height: 150%; font-family: 宋体;">合作意向：引进农业企业相关项目进驻城南村和河北村开展特色种养殖项目结合实际情况因地制宜合理开发利用蔬菜大棚开展采摘旅游的项目，帮助村民进一步提高收入。找寻养殖方面有先进技术的企业或个人开展特色养殖以带动周边村民一起进行发展，起到引导的作用，帮助村民有更好的发展及方向性。引进工业企业进驻河北村工业园区，在不破坏环境的情况下开发利用可用资源，对一些闲置厂房进行改造利用，起到盘活闲置厂房的目的。</span></p>
<p>&nbsp;</p>`
	},
	onLoad(option) {
		this.init();
	},
	onShareAppMessage() {},
	onShareTimeline() {},
	onShow() {},
	async init() {}
});
