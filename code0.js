gdjs.starSceneCode = {};
gdjs.starSceneCode.GDstartBackgroundObjects1= [];
gdjs.starSceneCode.GDstartBackgroundObjects2= [];
gdjs.starSceneCode.GDstartButtonObjects1= [];
gdjs.starSceneCode.GDstartButtonObjects2= [];
gdjs.starSceneCode.GDinfoObjects1= [];
gdjs.starSceneCode.GDinfoObjects2= [];

gdjs.starSceneCode.conditionTrue_0 = {val:false};
gdjs.starSceneCode.condition0IsTrue_0 = {val:false};
gdjs.starSceneCode.condition1IsTrue_0 = {val:false};
gdjs.starSceneCode.condition2IsTrue_0 = {val:false};


gdjs.starSceneCode.mapOfGDgdjs_46starSceneCode_46GDstartButtonObjects1Objects = Hashtable.newFrom({"startButton": gdjs.starSceneCode.GDstartButtonObjects1});gdjs.starSceneCode.mapOfGDgdjs_46starSceneCode_46GDinfoObjects1Objects = Hashtable.newFrom({"info": gdjs.starSceneCode.GDinfoObjects1});gdjs.starSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.starSceneCode.condition0IsTrue_0.val = false;
{
gdjs.starSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.starSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "game_music4.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("startButton"), gdjs.starSceneCode.GDstartButtonObjects1);

gdjs.starSceneCode.condition0IsTrue_0.val = false;
gdjs.starSceneCode.condition1IsTrue_0.val = false;
{
gdjs.starSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.starSceneCode.mapOfGDgdjs_46starSceneCode_46GDstartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.starSceneCode.condition0IsTrue_0.val ) {
{
gdjs.starSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.starSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playingScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("info"), gdjs.starSceneCode.GDinfoObjects1);

gdjs.starSceneCode.condition0IsTrue_0.val = false;
gdjs.starSceneCode.condition1IsTrue_0.val = false;
{
gdjs.starSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.starSceneCode.mapOfGDgdjs_46starSceneCode_46GDinfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.starSceneCode.condition0IsTrue_0.val ) {
{
gdjs.starSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.starSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Info", true);
}}

}


};

gdjs.starSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.starSceneCode.GDstartBackgroundObjects1.length = 0;
gdjs.starSceneCode.GDstartBackgroundObjects2.length = 0;
gdjs.starSceneCode.GDstartButtonObjects1.length = 0;
gdjs.starSceneCode.GDstartButtonObjects2.length = 0;
gdjs.starSceneCode.GDinfoObjects1.length = 0;
gdjs.starSceneCode.GDinfoObjects2.length = 0;

gdjs.starSceneCode.eventsList0(runtimeScene);
return;

}

gdjs['starSceneCode'] = gdjs.starSceneCode;
