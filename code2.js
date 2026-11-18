gdjs.Cr_233ditsCode = {};
gdjs.Cr_233ditsCode.localVariables = [];
gdjs.Cr_233ditsCode.idToCallbackMap = new Map();
gdjs.Cr_233ditsCode.GDtxtObjects1= [];
gdjs.Cr_233ditsCode.GDtxtObjects2= [];
gdjs.Cr_233ditsCode.GDDefault_9595Panel_959510Objects1= [];
gdjs.Cr_233ditsCode.GDDefault_9595Panel_959510Objects2= [];
gdjs.Cr_233ditsCode.GDPlusObjects1= [];
gdjs.Cr_233ditsCode.GDPlusObjects2= [];
gdjs.Cr_233ditsCode.GDNewPanelSpriteObjects1= [];
gdjs.Cr_233ditsCode.GDNewPanelSpriteObjects2= [];
gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1= [];
gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects2= [];


gdjs.Cr_233ditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Plus"), gdjs.Cr_233ditsCode.GDPlusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cr_233ditsCode.GDPlusObjects1.length;i<l;++i) {
    if ( gdjs.Cr_233ditsCode.GDPlusObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Cr_233ditsCode.GDPlusObjects1[k] = gdjs.Cr_233ditsCode.GDPlusObjects1[i];
        ++k;
    }
}
gdjs.Cr_233ditsCode.GDPlusObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScreenOrientationChecker"), gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1.length;i<l;++i) {
    if ( gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1[k] = gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1[i];
        ++k;
    }
}
gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plus"), gdjs.Cr_233ditsCode.GDPlusObjects1);
{for(var i = 0, len = gdjs.Cr_233ditsCode.GDPlusObjects1.length ;i < len;++i) {
    gdjs.Cr_233ditsCode.GDPlusObjects1[i].activateBehavior("ButtonFSM", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScreenOrientationChecker"), gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1.length;i<l;++i) {
    if ( !(gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1[k] = gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1[i];
        ++k;
    }
}
gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plus"), gdjs.Cr_233ditsCode.GDPlusObjects1);
{for(var i = 0, len = gdjs.Cr_233ditsCode.GDPlusObjects1.length ;i < len;++i) {
    gdjs.Cr_233ditsCode.GDPlusObjects1[i].activateBehavior("ButtonFSM", true);
}
}
}

}


};

gdjs.Cr_233ditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cr_233ditsCode.GDtxtObjects1.length = 0;
gdjs.Cr_233ditsCode.GDtxtObjects2.length = 0;
gdjs.Cr_233ditsCode.GDDefault_9595Panel_959510Objects1.length = 0;
gdjs.Cr_233ditsCode.GDDefault_9595Panel_959510Objects2.length = 0;
gdjs.Cr_233ditsCode.GDPlusObjects1.length = 0;
gdjs.Cr_233ditsCode.GDPlusObjects2.length = 0;
gdjs.Cr_233ditsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Cr_233ditsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects2.length = 0;

gdjs.Cr_233ditsCode.eventsList0(runtimeScene);
gdjs.Cr_233ditsCode.GDtxtObjects1.length = 0;
gdjs.Cr_233ditsCode.GDtxtObjects2.length = 0;
gdjs.Cr_233ditsCode.GDDefault_9595Panel_959510Objects1.length = 0;
gdjs.Cr_233ditsCode.GDDefault_9595Panel_959510Objects2.length = 0;
gdjs.Cr_233ditsCode.GDPlusObjects1.length = 0;
gdjs.Cr_233ditsCode.GDPlusObjects2.length = 0;
gdjs.Cr_233ditsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Cr_233ditsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.Cr_233ditsCode.GDScreenOrientationCheckerObjects2.length = 0;


return;

}

gdjs['Cr_233ditsCode'] = gdjs.Cr_233ditsCode;
