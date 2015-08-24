/**
 * Created by Shumake on 2015/8/20.
 */
//是否播放背景音樂狀態
var musicStatus;
//是否播放音效狀態
var effectStatus;
//營幕大小
var winSize;

var HomeMenuLayer=cc.Layer.extend({
    ctor:function(){
        //////////////
        //1. super init first
        this._super();
        winSize=cc.director.getWinSize();
        //加載精靈影格緩存
        cc.spriteFrameCache.addSpriteFrames(res_platform.texture_plist,res_platform.texture_res);
        musicStatus=cc.sys.localStorage.getItem(MUSIC_KEY);
        effectStatus=cc.sys.localStorage.getItem(EFFECT_KEY);

        var bg=new cc.TMXTiledMap(res.red_bg_tmx);
        this.addChild(bg);

        var top=new cc.Sprite('#home-top.png');
        top.x=winSize.width/2;
        top.y=winSize.height-top.getContentSize().height/2;
        this.addChild(top);

        var end=new cc.Sprite("#home-end.png");
        end.x=winSize.width/2;
        end.y=end.getContentSize().height/2;
        this.addChild(end);
        
        //開始菜單
        var startSpriteNormal=new cc.Sprite("#button.start.png");
        var startSpriteSelected=new cc.Sprite("#button.start-on.png");
        var startMenuItem=new cc.MenuItemSprite(startSpriteNormal,startSpriteSelected,this.menuItemCallback,this);
        startMenuItem.setTag(HomeMenuActionTypes.MenuItemStart);
        
        //設置菜單
        var settingSpriteNormal=new cc.Sprite("#button.setting.png");
        var settingSpriteSelected=new cc.Sprite("#button.setting-on.png");
        var settingMenuItem=new cc.MenuItemSprite(settingSpriteNormal,
        		settingSpriteSelected,
        		this.menuItemCallback,this);
        settingMenuItem.setTag(HomeMenuActionTypes.MenuItemSetting);
        
        //幫助菜單
        var helpSpriteNormal=new cc.Sprite("#button.help.png");
        var helpSpriteSelected=new cc.Sprite("#button.help-on.png");
        var helpMenuItem=new cc.MenuItemSprite(
        		helpSpriteNormal,
        		helpSpriteSelected,
        		this.menuItemCallback,this);
        helpMenuItem.setTag(HomeMenuActionTypes.MenuItemHelp);
        
        var mu=new cc.Menu(startMenuItem,settingMenuItem,helpMenuItem);
        mu.x=winSize.width/2;
        mu.y=winSize.height/2;
        mu.alignItemsVerticallyWithPadding(10);
        
        this.addChild(mu);

        return true;
    },
    onEnterTransitionDidFinish:function(){
        this._super();
        cc.log("HomeMenuLayer onEnterTransitionDidFinish");
        if(musicStatus==BOOL.YES){
            if(!cc.audioEngine.isMusicPlaying()) cc.audioEngine.playMusic(res_platform.musicHome,true);
        }
    },
    onExit:function(){
        this._super();
    },
    menuItemCallback:function(sender){
    	//播放音效
    	if(effectStatus==BOOL.YES){
    		cc.audioEngine.playEffect(res_platform.effectBlip);
    	}
    	var tsc=null;
    	switch(sender.tag){
    	case HomeMenuActionTypes.MenuItemStart:
    		tsc=new cc.TransitionFade(1.0,new GamePlayScene());
    		cc.log("StartCallBack")
    		break;
    	case HomeMenuActionTypes.MenuItemHelp:
    		tsc=new cc.TransitionFade(1.0,new HelpScene());
    		cc.log("HelpCallback");
    		break;
    	case HomeMenuActionTypes.MenuItemSetting:
    		tsc=new cc.TransitionFade(1.0,new SettingScene());
    		cc.log("SettingCallback");
    		break;
    	}
    	if(tsc){
    		cc.director.pushScene(tsc);
    	}
    }
});

var HomeScene=cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer=new HomeMenuLayer();
        this.addChild(layer);
    }
})
