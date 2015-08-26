/**
 * Created by Shumake on 2015/8/26.
 */
var GameOverLayer=cc.Layer.extend({
    score:0,
    touchListener:null,
    ctor:function(score){
        cc.log("GameOverLayer ctor");
        this._super();
        this.score=score;
        //添加背景地圖
        var bg=new cc.TMXTiledMap(res.blug_bg_tmx);
        this.addChild(bg);

        //放置發光粒子背景
        var ps=new cc.ParticleSystem(res.light_plist);
        ps.x=winSize.width/2;
        ps.y=winSize.height/2-100;
        this.addChild(ps);

        var page=new cc.Sprite("#gameover.page.png");
        //設置位置
        page.x=winSize.width/2;
        page.y=winSize.height-300;
        this.addChild(page);

        var highScore=cc.sys.localStorage.getItem(HIGHSCORE_KEY);
        highScore=highScore==null?0:highScore;
        if(highScore<this.score){
            highScore=this.score;
            cc.sys.localStorage.setItem(HIGHSCORE_KEY,highScore);
        }

        var hscore=new cc.Sprite("#Score.png");
        hscore.x=223;
        hscore.y=winSize.height-690;
        this.addChild(hscore);

        var highScoreLabel=new cc.LabelBMFont(highScore,res.BMFont_fnt);
        highScoreLabel.x=hscore.x;
        highScoreLabel.y=hscore.y-80;
        this.addChild(highScoreLabel);

        var tap=new cc.Sprite("#Tap.png");
        tap.x=winSize.width/2;
        tap.y=winSize.height-860;
        this.addChild(tap);

        //創建觸摸事件監聽器
        this.touchListener=cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,    //設置是否吞沒事件
            onTouchBegan:function(touch,event){
                //播放音效
                if(effectStatus==BOOL.YES){
                    cc.audioEngine.playEffect(res_platform.effectBlip);
                }
                cc.director.popScene();
                return false;
            }
        });

        //註冊觸摸事件監聽器
        cc.eventManager.addListener(this.touchListener,this);
        this.touchListener.retain();
        return true;
    },
    onEnter:function(){
        this._super();
        cc.log("GameOverLayer onEnter");
    },
    onEnterTransitionDidFinish:function(){
        this._super();
        cc.log("GameOverLayer onEnterTransitionDidFinish");
        if(musicStatus==BOOL.YES){
            cc.audioEngine.playMusic(res_platform.musicGame,true);
        }
    },
    onExit:function(){
        this._super();
        cc.log("GameOverLayer onExit");
        //註銷事件監聽器
        if(this.touchListener!=null){
            cc.eventManager.removeListener(this.touchListener);
            this.touchListener.release();
            this.touchListener=null;
        }
    },
    onExitTransitionDidStart:function(){
        this._super();
        cc.log("GameOverLayer onExitTransitionDidStart");
        cc.audioEngine.stopMusic(res_platform.musicGame);
    }
});

var GameOverScene=cc.Scene.extend({
    onEnter:function(){
        this._super();
    }
});