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
        cc.log(musicStatus)
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

        return true;
    },
    onEnterTransitionDidFinish:function(){
        this._super();
        cc.log("HomeMenuLayer onEnterTransitionDidFinish");
        if(musicStatus==BOOL.YES){
            cc.audioEngine.playMusic(res_platform.musicHome,true);
        }
    },
    onExit:function(){
        this._super();
    }
});

var HomeScene=cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer=new HomeMenuLayer();
        this.addChild(layer);
    }
})
