gdjs.JeuCode = {};
gdjs.JeuCode.localVariables = [];
gdjs.JeuCode.idToCallbackMap = new Map();
gdjs.JeuCode.GDScreenOrientationCheckerObjects1= [];
gdjs.JeuCode.GDScreenOrientationCheckerObjects2= [];


gdjs.JeuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.JeuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JeuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.JeuCode.GDScreenOrientationCheckerObjects2.length = 0;

gdjs.JeuCode.eventsList0(runtimeScene);
gdjs.JeuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.JeuCode.GDScreenOrientationCheckerObjects2.length = 0;


return;

}

gdjs['JeuCode'] = gdjs.JeuCode;
