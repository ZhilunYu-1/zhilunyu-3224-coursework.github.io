gdjs.failedSceneCode = {};
gdjs.failedSceneCode.GDbackGroundObjects1= [];
gdjs.failedSceneCode.GDbackGroundObjects2= [];
gdjs.failedSceneCode.GDrestartObjects1= [];
gdjs.failedSceneCode.GDrestartObjects2= [];
gdjs.failedSceneCode.GDoverObjects1= [];
gdjs.failedSceneCode.GDoverObjects2= [];

gdjs.failedSceneCode.conditionTrue_0 = {val:false};
gdjs.failedSceneCode.condition0IsTrue_0 = {val:false};
gdjs.failedSceneCode.condition1IsTrue_0 = {val:false};
gdjs.failedSceneCode.condition2IsTrue_0 = {val:false};


gdjs.failedSceneCode.mapOfGDgdjs_46failedSceneCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.failedSceneCode.GDrestartObjects1});gdjs.failedSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.failedSceneCode.GDrestartObjects1);

gdjs.failedSceneCode.condition0IsTrue_0.val = false;
gdjs.failedSceneCode.condition1IsTrue_0.val = false;
{
gdjs.failedSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.failedSceneCode.mapOfGDgdjs_46failedSceneCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.failedSceneCode.condition0IsTrue_0.val ) {
{
gdjs.failedSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.failedSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "starScene", false);
}}

}


{


gdjs.failedSceneCode.condition0IsTrue_0.val = false;
{
gdjs.failedSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.failedSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "lose.mp3", false, 100, 1);
}}

}


};

gdjs.failedSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.failedSceneCode.GDbackGroundObjects1.length = 0;
gdjs.failedSceneCode.GDbackGroundObjects2.length = 0;
gdjs.failedSceneCode.GDrestartObjects1.length = 0;
gdjs.failedSceneCode.GDrestartObjects2.length = 0;
gdjs.failedSceneCode.GDoverObjects1.length = 0;
gdjs.failedSceneCode.GDoverObjects2.length = 0;

gdjs.failedSceneCode.eventsList0(runtimeScene);
return;

}

gdjs['failedSceneCode'] = gdjs.failedSceneCode;
