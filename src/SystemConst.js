/**
 * Created by Shumake on 2015/8/19.
 */
//Home菜單操作標籤
HomeMenuActionTypes={
    MenuItemStart:100,
    MenuItemSetting:101,
    MenuItemHelp:102
};

//定義敵人類型
EnemyTypes={
    Enemy_Stone:0,
    Enemy_1:1,
    Enemy_2:2,
    Enemy_Planet:3
};

//定義敵人名稱，也是敵人精靈影格的名字
EnemyName={
    Enemy_Stone:"gameplay.stone1.png",
    Enemy_1:"gameplay.enemy-1.png",
    Enemy_2:"gameplay.enemy-2.png",
    Enemy_Planet:"gameplay.enemy.planet.png"
};

//遊戲場景中使用的標籤常量
GameSceneNodeTag={
    StatusBarFighterNode:301,
    StatusBarLifeNode:302,
    StatusBarScore:303,
    BatchBackground:800,
    Fighter:900,
    ExplosionParticleSystem:901,
    Bullet:100,
    Enemy:700
};

//精靈速度常量
Sprite_Velocity={
    Enemy_Stone:cc.p(0,-300),
    Enemy_1:cc.p(0,-80),
    Enemy_2:cc.p(0,-100),
    Enemy_Planet:cc.p(0,-50),
    Bullet:cc.p(0,300)
};

//遊戲分數
EnemyScores={
    Enemy_Stone:5,
    Enemy_1:10,
    Enemy_2:15,
    Enemy_Planet:20
};

//敵人初始生命值
Enemy_initialHitPoints={
    Enemy_Stone:3,
    Enemy_1:5,
    Enemy_2:15,
    Enemy_Planet:20
};

//我方飛機生命數
Fighter_hitPoints=5;

//碰撞類型
Collision_Type={
    Enemy:1,
    Fighter:1,
    Bullet:1,
};

//保存音效狀態鍵
EFFECT_KEY="sound_key";
//保存聲音狀態建
MUSIC_KEY="music_key";
//保存最高分紀錄鍵
HIGHSCORE_KEY="highscore_key";

//自定義的布林常量
BOOL={
    NO:"0",
    YES:"1"
};

