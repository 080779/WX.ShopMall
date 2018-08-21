module.exports = function (t) {
	var app = getApp(), s = {}, tween = app.tween;
	return {
		//初始化
		init: function () {
			var ts = this;
			ts.vsStartAni();
		},
		/*匹配成功动画*/
		vsStartAni: function () {
			var leftani = wx.createAnimation(), rightani = wx.createAnimation();
			leftani.left("-40%").step({ timingFunction: "ease-in", duration: 300 });
			rightani.right("-40%").step({ timingFunction: "ease-in", duration: 300, delay: 300 });
			t.setData({
				"matchViewBox.loadEnd": true,
				"matchViewBox.matchViewLeftAni": leftani.export(),
				"matchViewBox.matchViewRightAni": rightani.export()
			});
		}
	}
}