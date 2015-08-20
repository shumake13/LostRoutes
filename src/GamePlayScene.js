var GamePlayLayer=cc.Layer.extend({
	ctor:function(){
		this._super();
	}
});

var GamePlayScene=cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer=new GamePlayLayer();
		this.addChild(layer);
	}
});