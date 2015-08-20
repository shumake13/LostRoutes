var HelpLayer=cc.Layer.extend({
	ctor:function(){
		this._super();
	}
})

var HelpScene=cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer=new HelpLayer();
		this.addChild(layer);
	}
});