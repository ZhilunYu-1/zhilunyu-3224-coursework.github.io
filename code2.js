gdjs.winSceneCode = {};
gdjs.winSceneCode.GDwinObjects1= [];
gdjs.winSceneCode.GDwinObjects2= [];
gdjs.winSceneCode.GDbackStartSceneObjects1= [];
gdjs.winSceneCode.GDbackStartSceneObjects2= [];
gdjs.winSceneCode.GDbackGroundObjects1= [];
gdjs.winSceneCode.GDbackGroundObjects2= [];

gdjs.winSceneCode.conditionTrue_0 = {val:false};
gdjs.winSceneCode.condition0IsTrue_0 = {val:false};
gdjs.winSceneCode.condition1IsTrue_0 = {val:false};
gdjs.winSceneCode.condition2IsTrue_0 = {val:false};


gdjs.winSceneCode.mapOfGDgdjs_46winSceneCode_46GDbackStartSceneObjects1Objects = Hashtable.newFrom({"backStartScene": gdjs.winSceneCode.GDbackStartSceneObjects1});gdjs.winSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("backStartScene"), gdjs.winSceneCode.GDbackStartSceneObjects1);

gdjs.winSceneCode.condition0IsTrue_0.val = false;
gdjs.winSceneCode.condition1IsTrue_0.val = false;
{
gdjs.winSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winSceneCode.mapOfGDgdjs_46winSceneCode_46GDbackStartSceneObjects1Objects, runtimeScene, true, false);
}if ( gdjs.winSceneCode.condition0IsTrue_0.val ) {
{
gdjs.winSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.winSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "starScene", false);
}}

}


{


gdjs.winSceneCode.condition0IsTrue_0.val = false;
{
gdjs.winSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.winSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "win.mp3", false, 100, 1);
}}

}


};

gdjs.winSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winSceneCode.GDwinObjects1.length = 0;
gdjs.winSceneCode.GDwinObjects2.length = 0;
gdjs.winSceneCode.GDbackStartSceneObjects1.length = 0;
gdjs.winSceneCode.GDbackStartSceneObjects2.length = 0;
gdjs.winSceneCode.GDbackGroundObjects1.length = 0;
gdjs.winSceneCode.GDbackGroundObjects2.length = 0;

gdjs.winSceneCode.eventsList0(runtimeScene);
return;

}

gdjs['winSceneCode'] = gdjs.winSceneCode;
