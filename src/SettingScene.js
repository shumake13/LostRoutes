var SettingLayer=cc.Layer.extend({
	ctor:function(){
		//super init first
		this._super();
	}
});

var SettingScene=cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer=new SettingLayer();
		this.addChild(layer);
	}
});