//create by: 邓志锋 <280160522@qq.com> <https://www.diygw.com> DIYGW可视化设计一键生成源码
Page({
	data: {
		//用户全局信息
		userInfo: {},
		text: `<p style="text-align: center;">土地资源</p>`,
		text1: `<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;"><strong>一、地质与地貌</strong></span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">柳河县地处长白山向松辽平原过渡地带。地层以太古界鞍山群为基底，其上发育震旦系、寒武系、奥陶系、宝石炭系中上统以及保罗系、白垩系、第四系。地表以沉积岩为主，变质岩较少，其余是岩浆侵入岩和岩浆喷出岩。分属东西向、华夏系、新华夏系<span lang="EN-US">3</span>个地质构造体系。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">地表由山地、丘陵、熔岩台地和河谷盆地<span lang="EN-US">4</span>种类型构成，中低山地占总面积<span lang="EN-US">70%</span>。丘陵地主要分布在一统河、三统河流域，占总面积<span lang="EN-US">10%</span>。熔岩台地占总面积<span lang="EN-US">5%</span>。河谷盆地主要有一统河、三统河、哈泥河、窝集河谷地，占总面积<span lang="EN-US">15%</span>。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">地势多在海拔<span lang="EN-US">400</span>&mdash;<span lang="EN-US">1000</span>米之间，东南和西南高，东北低，从东南和西南向东北倾斜。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;"><strong>二、各类土地数量及建设用地情况</strong></span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">全县土地总面积<span lang="EN-US">3348</span>平方公里，其中耕地<span lang="EN-US">120989.55</span>公顷；园地<span lang="EN-US">1239.6</span>公顷；林地<span lang="EN-US">196903</span>公顷；草地<span lang="EN-US">938.55</span>公顷；城镇村及工矿用地<span lang="EN-US">10467.36</span>公顷；交通运输用地<span lang="EN-US">4039.06</span>公顷；水域及水利设施用地<span lang="EN-US">6021.05</span>公顷；其他土地<span lang="EN-US">569.67</span>公顷。建设用地总面积为<span lang="EN-US">13255.78</span>公顷。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;"><strong>三、全县城乡及地区各类土地基准地价（含开发区）</strong></span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">依据柳河县人民政府《关于公布实施新一轮城镇基准地价更新与平衡结果的通知》（柳政函<span lang="EN-US">[2016]78</span>号），公布日期为<span lang="EN-US">2016</span>年<span lang="EN-US">12</span>月<span lang="EN-US">5</span>日，本次公布基准地价按照商业、住宅、工业等用途分别评估。商业用地、住宅用地、工业用地分别为三个级别。基准地价更新结果如下：</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">（一）柳河县城区基准地价确定宗地的土地级别以土地级别图为准。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">城区Ⅰ级商服用地基准地价为<span lang="EN-US">1357</span>元<span lang="EN-US">/</span>平方米，住宅用地为<span lang="EN-US">634</span>元<span lang="EN-US">/</span>平方米，工业用地为<span lang="EN-US">337</span>元<span lang="EN-US">/</span>平方米；</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">城区Ⅱ级商服用地基准地价为<span lang="EN-US">900</span>元<span lang="EN-US">/</span>平方米，住宅用地为<span lang="EN-US">476</span>元<span lang="EN-US">/</span>平方米，工业用地为<span lang="EN-US">207</span>元<span lang="EN-US">/</span>平方米；</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">城区Ⅲ级商服用地基准地价为<span lang="EN-US">609</span>元<span lang="EN-US">/</span>平方米，住宅用地为<span lang="EN-US">307</span>元<span lang="EN-US">/</span>平方米，工业用地为<span lang="EN-US">171</span>元<span lang="EN-US">/</span>平方米。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">（二）柳河县乡镇一等建制镇为三源浦镇、孤山子镇。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">乡镇Ⅰ级商服用地基准地价为<span lang="EN-US">592</span>元<span lang="EN-US">/</span>平方米，住宅用地为<span lang="EN-US">285</span>元<span lang="EN-US">/</span>平方米，工业用地为<span lang="EN-US">149</span>元<span lang="EN-US">/</span>平方米；</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">（三）柳河县乡镇二等建制镇为驼腰岭镇、圣水镇、凉水镇、安口镇、姜家店乡、五道沟镇。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">乡镇Ⅱ级商服用地基准地价为<span lang="EN-US">463</span>元<span lang="EN-US">/</span>平方米，住宅用地为<span lang="EN-US">255</span>元<span lang="EN-US">/</span>平方米，工业用地为<span lang="EN-US">132</span>元<span lang="EN-US">/</span>平方米；</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">（四）柳河县乡镇三等建制镇为亨通镇、向阳镇、罗通山镇、时家店乡、柳南乡、红石镇。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">乡镇Ⅲ级商服用地基准地价为<span lang="EN-US">398</span>元<span lang="EN-US">/</span>平方米，住宅用地为<span lang="EN-US">206</span>元<span lang="EN-US">/</span>平方米，工业用地为<span lang="EN-US">125</span>元<span lang="EN-US">/</span>平方米。</span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;"><strong>四、农民征地两费补偿标准</strong></span></p>
<p class="MsoNormal" style="text-indent: 24pt; line-height: 150%; text-align: justify;"><span style="font-size: 12.0pt; line-height: 150%; font-family: 宋体;">根据吉林省人民政府关于征地农用地区片综合地价标准的批复（吉政函【<span lang="EN-US">2020</span>】<span lang="EN-US">86</span>号），农民征地两费补偿标准为一级：<span lang="EN-US">60030</span>元<span lang="EN-US">/</span>亩；二级：<span lang="EN-US">41354</span>元<span lang="EN-US">/</span>亩；三级：<span lang="EN-US">33350</span>元<span lang="EN-US">/</span>亩。</span></p>`
	},
	onLoad(option) {
		this.init();
	},
	onShareAppMessage() {},
	onShareTimeline() {},
	onShow() {},
	async init() {}
});
