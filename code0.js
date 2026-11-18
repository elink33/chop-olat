gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDParamsObjects1= [];
gdjs.MenuCode.GDParamsObjects2= [];
gdjs.MenuCode.GDCr_95233ditsObjects1= [];
gdjs.MenuCode.GDCr_95233ditsObjects2= [];
gdjs.MenuCode.GDJouerObjects1= [];
gdjs.MenuCode.GDJouerObjects2= [];
gdjs.MenuCode.GDInfoObjects1= [];
gdjs.MenuCode.GDInfoObjects2= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects1= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Params"), gdjs.MenuCode.GDParamsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDParamsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDParamsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDParamsObjects1[k] = gdjs.MenuCode.GDParamsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDParamsObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.MenuCode.GDInfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDInfoObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDInfoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDInfoObjects1[k] = gdjs.MenuCode.GDInfoObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDInfoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.chocolats-solidaires.info/fr/campaign/30/", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crédits"), gdjs.MenuCode.GDCr_95233ditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCr_95233ditsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCr_95233ditsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCr_95233ditsObjects1[k] = gdjs.MenuCode.GDCr_95233ditsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCr_95233ditsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Crédits", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jouer"), gdjs.MenuCode.GDJouerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDJouerObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDJouerObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDJouerObjects1[k] = gdjs.MenuCode.GDJouerObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDJouerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jeu", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Jeu");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.MenuCode.GDInfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDInfoObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDInfoObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDInfoObjects1[k] = gdjs.MenuCode.GDInfoObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDInfoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDInfoObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDInfoObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.MenuCode.GDInfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDInfoObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDInfoObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDInfoObjects1[k] = gdjs.MenuCode.GDInfoObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDInfoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDInfoObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDInfoObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDParamsObjects1.length = 0;
gdjs.MenuCode.GDParamsObjects2.length = 0;
gdjs.MenuCode.GDCr_95233ditsObjects1.length = 0;
gdjs.MenuCode.GDCr_95233ditsObjects2.length = 0;
gdjs.MenuCode.GDJouerObjects1.length = 0;
gdjs.MenuCode.GDJouerObjects2.length = 0;
gdjs.MenuCode.GDInfoObjects1.length = 0;
gdjs.MenuCode.GDInfoObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDParamsObjects1.length = 0;
gdjs.MenuCode.GDParamsObjects2.length = 0;
gdjs.MenuCode.GDCr_95233ditsObjects1.length = 0;
gdjs.MenuCode.GDCr_95233ditsObjects2.length = 0;
gdjs.MenuCode.GDJouerObjects1.length = 0;
gdjs.MenuCode.GDJouerObjects2.length = 0;
gdjs.MenuCode.GDInfoObjects1.length = 0;
gdjs.MenuCode.GDInfoObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
