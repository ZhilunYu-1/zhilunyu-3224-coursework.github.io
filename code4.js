gdjs.InfoCode = {};
gdjs.InfoCode.GDinfoBgObjects1= [];
gdjs.InfoCode.GDinfoBgObjects2= [];
gdjs.InfoCode.GDGameDetialsObjects1= [];
gdjs.InfoCode.GDGameDetialsObjects2= [];
gdjs.InfoCode.GDNewObjectObjects1= [];
gdjs.InfoCode.GDNewObjectObjects2= [];

gdjs.InfoCode.conditionTrue_0 = {val:false};
gdjs.InfoCode.condition0IsTrue_0 = {val:false};
gdjs.InfoCode.condition1IsTrue_0 = {val:false};
gdjs.InfoCode.condition2IsTrue_0 = {val:false};


gdjs.InfoCode.mapOfGDgdjs_46InfoCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.InfoCode.GDNewObjectObjects1});gdjs.InfoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.InfoCode.GDNewObjectObjects1);

gdjs.InfoCode.condition0IsTrue_0.val = false;
gdjs.InfoCode.condition1IsTrue_0.val = false;
{
gdjs.InfoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InfoCode.mapOfGDgdjs_46InfoCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InfoCode.condition0IsTrue_0.val ) {
{
gdjs.InfoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.InfoCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "starScene", true);
}}

}


};

gdjs.InfoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InfoCode.GDinfoBgObjects1.length = 0;
gdjs.InfoCode.GDinfoBgObjects2.length = 0;
gdjs.InfoCode.GDGameDetialsObjects1.length = 0;
gdjs.InfoCode.GDGameDetialsObjects2.length = 0;
gdjs.InfoCode.GDNewObjectObjects1.length = 0;
gdjs.InfoCode.GDNewObjectObjects2.length = 0;

gdjs.InfoCode.eventsList0(runtimeScene);
return;

}

gdjs['InfoCode'] = gdjs.InfoCode;
