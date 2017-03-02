(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAAAAIAIANIgPADg");
	this.shape.setTransform(7.2,216.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgcAVQgMgIAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgGgAgZAAQAAALAZAAQAaAAAAgLQAAgKgaAAQgZAAAAAKg");
	this.shape_1.setTransform(7.2,222.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2A").s().p("AgmgCIAAgOIBNAAIAAAQIg9AAIAAAAIAIAOIgPACg");
	this.shape_2.setTransform(7.2,228.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgLAGgSAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_3.setTransform(7.2,234.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAAAAIAIANIgPAEg");
	this.shape_4.setTransform(7.2,241.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2A").s().p("AgmgCIAAgOIBNAAIAAAQIg9AAIAAAAIAIAOIgPACg");
	this.shape_5.setTransform(7.2,247.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_6.setTransform(7.2,253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAIAOIgPADg");
	this.shape_7.setTransform(7.2,259.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_8.setTransform(7.2,265.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAIAOIgPACg");
	this.shape_9.setTransform(7.2,272);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAIAOIgPADg");
	this.shape_10.setTransform(7.2,278.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_11.setTransform(7.2,283.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAIAOIgPACg");
	this.shape_12.setTransform(7.2,290.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B4B3B3").s().p("AhAHJIAAuRICBAAIAAORg");
	this.shape_13.setTransform(6.5,251.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAAAAIAIANIgPADg");
	this.shape_14.setTransform(7.2,9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B2B2A").s().p("AgcAVQgMgIAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgGgAgZAAQAAALAZAAQAaAAAAgLQAAgKgaAAQgZAAAAAKg");
	this.shape_15.setTransform(7.2,15.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B2B2A").s().p("AgmgCIAAgOIBNAAIAAAQIg9AAIAAAAIAIAOIgPACg");
	this.shape_16.setTransform(7.2,21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgLAGgSAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_17.setTransform(7.2,27.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAAAAIAIANIgPAEg");
	this.shape_18.setTransform(7.2,34.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B2B2A").s().p("AgmgCIAAgOIBNAAIAAAQIg9AAIAAAAIAIAOIgPACg");
	this.shape_19.setTransform(7.2,40.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_20.setTransform(7.2,45.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAIAOIgPADg");
	this.shape_21.setTransform(7.2,52.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_22.setTransform(7.2,58.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAIAOIgPACg");
	this.shape_23.setTransform(7.2,64.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAIAOIgPADg");
	this.shape_24.setTransform(7.2,71);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_25.setTransform(7.2,76.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAIAOIgPACg");
	this.shape_26.setTransform(7.2,83.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B4B3B3").s().p("AhAHJIAAuRICBAAIAAORg");
	this.shape_27.setTransform(6.5,45.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAAAAIAIANIgPADg");
	this.shape_28.setTransform(7.2,114.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B2B2A").s().p("AgcAVQgMgIAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgGgAgZAAQAAALAZAAQAaAAAAgLQAAgKgaAAQgZAAAAAKg");
	this.shape_29.setTransform(7.2,119.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B2B2A").s().p("AgmgCIAAgOIBNAAIAAAQIg9AAIAAAAIAIAOIgPACg");
	this.shape_30.setTransform(7.2,126.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgLAGgSAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_31.setTransform(7.2,132);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAAAAIAIANIgPAEg");
	this.shape_32.setTransform(7.2,138.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B2B2A").s().p("AgmgCIAAgOIBNAAIAAAQIg9AAIAAAAIAIAOIgPACg");
	this.shape_33.setTransform(7.2,144.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_34.setTransform(7.2,150.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAIAOIgPADg");
	this.shape_35.setTransform(7.2,157.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_36.setTransform(7.2,162.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAIAOIgPACg");
	this.shape_37.setTransform(7.2,169.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B2B2A").s().p("AgmgBIAAgPIBNAAIAAAQIg9AAIAIAOIgPADg");
	this.shape_38.setTransform(7.2,175.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B2B2A").s().p("AgcAUQgMgHAAgNQAAgNAMgHQALgGARAAQAoAAABAaQAAANgMAIQgMAGgRAAQgRAAgLgHgAgZAAQAAAKAZAAQAaAAAAgKQAAgJgaAAQgZAAAAAJg");
	this.shape_39.setTransform(7.2,181.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B2B2A").s().p("AgmgCIAAgNIBNAAIAAAPIg9AAIAIAOIgPACg");
	this.shape_40.setTransform(7.2,187.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B4B3B3").s().p("AhAHJIAAuRICBAAIAAORg");
	this.shape_41.setTransform(6.5,150.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,13,297.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2A").s().p("AAADTIAPh0Ig6AAIgQB0Ig7AAIARh0Ig1AAIAAg8IBAAAIAKhIIg4AAIAAg8IBBAAIAQhxIA5AAIgPBxIA6AAIARhxIA6AAIgRBxIA0AAIAAA8Ig9AAIgLBIIA2AAIAAA8Ig/AAIgRB0gAghAjIA6AAIALhIIg6AAg");
	this.shape.setTransform(219.6,45.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AAADTIAPh0Ig6AAIgQB0Ig7AAIARh0Ig1AAIAAg8IBAAAIAKhIIg4AAIAAg8IBBAAIAQhxIA5AAIgPBxIA6AAIARhxIA6AAIgRBxIA0AAIAAA8Ig9AAIgLBIIA2AAIAAA8Ig/AAIgRB0gAghAjIA6AAIALhIIg6AAg");
	this.shape_1.setTransform(179.7,45.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2A").s().p("AAADTIAPh0Ig6AAIgQB0Ig7AAIARh0Ig1AAIAAg8IBAAAIAKhIIg4AAIAAg8IBBAAIAQhxIA5AAIgPBxIA6AAIARhxIA6AAIgRBxIA0AAIAAA8Ig9AAIgLBIIA2AAIAAA8Ig/AAIgRB0gAghAjIA6AAIALhIIg6AAg");
	this.shape_2.setTransform(139.7,45.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2A").s().p("AAADTIAPh0Ig6AAIgQB0Ig7AAIARh0Ig1AAIAAg8IBAAAIAKhIIg4AAIAAg8IBBAAIAQhxIA5AAIgPBxIA6AAIARhxIA6AAIgRBxIA0AAIAAA8Ig9AAIgLBIIA2AAIAAA8Ig/AAIgRB0gAghAjIA6AAIALhIIg6AAg");
	this.shape_3.setTransform(99.8,45.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2A").s().p("AAADTIAPh0Ig6AAIgQB0Ig7AAIARh0Ig1AAIAAg8IBAAAIAKhIIg4AAIAAg8IBBAAIAQhxIA5AAIgPBxIA6AAIARhxIA6AAIgRBxIA0AAIAAA8Ig9AAIgLBIIA2AAIAAA8Ig/AAIgRB0gAghAjIA6AAIALhIIg6AAg");
	this.shape_4.setTransform(59.8,45.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2A").s().p("AAADTIAPh0Ig6AAIgQB0Ig7AAIARh0Ig1AAIAAg8IBAAAIAKhIIg4AAIAAg8IBBAAIAQhxIA5AAIgPBxIA6AAIARhxIA6AAIgRBxIA0AAIAAA8Ig9AAIgLBIIA2AAIAAA8Ig/AAIgRB0gAghAjIA6AAIALhIIg6AAg");
	this.shape_5.setTransform(19.9,45.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,239.7,84.6), null);


(lib.Handle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7C7C4").s().p("AnaGXIN+tmIA4A5It/Nmg");
	this.shape.setTransform(59.1,63.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7C7C4").s().p("Ah5B7QgzgzAAhIQAAhHAzgyQAygzBHAAQBIAAAzAzQAyAyAABHQAABIgyAzQgzAyhIAAQhHAAgygyg");
	this.shape_1.setTransform(17.3,104.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C7C7C4").s().p("Ah6B7QgygzAAhIQAAhHAygyQAzgzBHAAQBIAAAzAzQAyAyAABHQAABIgyAzQgzAyhIAAQhHAAgzgyg");
	this.shape_2.setTransform(106.7,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Handle, new cjs.Rectangle(0,0,124,121.8), null);


(lib.Documents = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape.setTransform(37.3,71.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_1.setTransform(37.3,62.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_2.setTransform(37.3,53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_3.setTransform(37.3,44.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_4.setTransform(37.3,35.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_5.setTransform(37.3,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_6.setTransform(37.3,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2B2B2A").p("AjAADIGBgF");
	this.shape_7.setTransform(46.3,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2B2B2A").p("AjumSIh5BuIAAK3ILPAAIAAslg");
	this.shape_8.setTransform(36,40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlnGUIAAq5IB4huIJXAAIAAMng");
	this.shape_9.setTransform(36,40.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2B2B2A").p("AjumSIh5BuIAAK3ILPAAIAAslg");
	this.shape_10.setTransform(45,49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlnGUIAAq5IB4huIJXAAIAAMng");
	this.shape_11.setTransform(45,49.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_12.setTransform(37.3,71.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_13.setTransform(37.3,62.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_14.setTransform(37.3,53.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_15.setTransform(37.3,44.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_16.setTransform(37.3,35.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_17.setTransform(37.3,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2B2B2A").p("AkaADII1gF");
	this.shape_18.setTransform(37.3,18.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2B2B2A").p("AjAADIGBgF");
	this.shape_19.setTransform(46.3,8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2B2B2A").p("AjumSIh5BuIAAK3ILPAAIAAslg");
	this.shape_20.setTransform(36,40.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AlnGUIAAq5IB4huIJXAAIAAMng");
	this.shape_21.setTransform(36,40.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2B2B2A").p("AjumSIh5BuIAAK3ILPAAIAAslg");
	this.shape_22.setTransform(45,49.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AlnGUIAAq5IB4huIJXAAIAAMng");
	this.shape_23.setTransform(45,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Documents, new cjs.Rectangle(-1,-1,83,91.7), null);


(lib.Hashes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Documents();
	this.instance.parent = this;
	this.instance.setTransform(40.5,44.9,1,1,0,0,0,40.5,44.9);

	this.instance_1 = new lib.Documents();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.5,148.4,1,1,0,0,0,40.5,44.9);

	this.instance_2 = new lib.Documents();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.5,251,1,1,0,0,0,40.5,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hashes, new cjs.Rectangle(-0.5,-0.5,82,296.8), null);


// stage content:
(lib.SecureHashGrinderScripted = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Code to get the frame number of the current frame
		*/
		
		var frameNumber = this.currentFrame;
		
		console.log (frameNumber);
		root = this;
		
		if (initialised == false)
		{
			console.log("Init");
			createjs.Ticker.on("tick", animLoop);
			hashesText = this.HashesText;
			initialised = true;
		}
		
		console.log("Enter");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Handle
	this.instance = new lib.Handle();
	this.instance.parent = this;
	this.instance.setTransform(149.4,275.1,1,1,0,0,0,107.4,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:62,regY:60.9,rotation:6.2,x:99.6,y:313.3},0).wait(1).to({rotation:12.4,x:95.7,y:307.7},0).wait(1).to({rotation:18.6,x:92.5,y:301.7},0).wait(1).to({rotation:24.8,x:90,y:295.4},0).wait(1).to({rotation:31,x:88.1,y:288.9},0).wait(1).to({rotation:37.2,x:87,y:282.2},0).wait(1).to({rotation:43.4,x:86.5,y:275.4},0).wait(1).to({rotation:49.7,x:86.9,y:268.6},0).wait(1).to({rotation:55.9,x:88,y:261.9},0).wait(1).to({rotation:62.1,x:89.8,y:255.4},0).wait(1).to({rotation:68.3,x:92.3,y:249},0).wait(1).to({rotation:74.5,x:95.4,y:243},0).wait(1).to({rotation:80.7,x:99.2,y:237.3},0).wait(1).to({rotation:86.9,x:103.6,y:232.1},0).wait(1).to({rotation:93.1,x:108.5,y:227.4},0).wait(1).to({rotation:99.3,x:113.8,y:223.3},0).wait(1).to({rotation:105.5,x:119.6,y:219.7},0).wait(1).to({rotation:111.7,x:125.8,y:216.9},0).wait(1).to({rotation:117.9,x:132.2,y:214.7},0).wait(1).to({rotation:124.1,x:138.9,y:213.1},0).wait(1).to({rotation:130.3,x:145.6,y:212.4},0).wait(1).to({rotation:136.6,x:152.4},0).wait(1).to({rotation:142.8,x:159.2,y:213},0).wait(1).to({rotation:149,x:165.9,y:214.5},0).wait(1).to({rotation:155.2,x:172.3,y:216.7},0).wait(1).to({rotation:161.4,x:178.5,y:219.5},0).wait(1).to({rotation:167.6,x:184.3,y:222.9},0).wait(1).to({rotation:173.8,x:189.7,y:227},0).wait(1).to({rotation:180,x:194.7,y:231.7},0).wait(1).to({rotation:185.8,x:198.8,y:236.5},0).wait(1).to({rotation:191.6,x:202.5,y:241.7},0).wait(1).to({rotation:197.4,x:205.6,y:247.2},0).wait(1).to({rotation:203.2,x:208.1,y:253.1},0).wait(1).to({rotation:209,x:210,y:259.1},0).wait(1).to({rotation:214.8,x:211.4,y:265.3},0).wait(1).to({rotation:220.6,x:212.1,y:271.6},0).wait(1).to({rotation:226.4,y:278},0).wait(1).to({rotation:232.2,x:211.4,y:284.2},0).wait(1).to({rotation:238,x:210.2,y:290.5},0).wait(1).to({rotation:243.8,x:208.3,y:296.5},0).wait(1).to({rotation:249.6,x:205.9,y:302.4},0).wait(1).to({rotation:255.4,x:202.8,y:308},0).wait(1).to({rotation:261.2,x:199.2,y:313.3},0).wait(1).to({rotation:267,x:195,y:318.1},0).wait(1).to({rotation:272.8,x:190.5,y:322.4},0).wait(1).to({rotation:278.6,x:185.4,y:326.4},0).wait(1).to({rotation:284.4,x:180.1,y:329.8},0).wait(1).to({rotation:290.2,x:174.4,y:332.6},0).wait(1).to({rotation:296,x:168.5,y:334.9},0).wait(1).to({rotation:301.8,x:162.3,y:336.5},0).wait(1).to({rotation:307.6,x:156.1,y:337.5},0).wait(1).to({rotation:313.4,x:149.7,y:337.8},0).wait(1).to({rotation:319.2,x:143.4,y:337.5},0).wait(1).to({rotation:325,x:137.1,y:336.6},0).wait(1).to({rotation:330.8,x:130.9,y:335},0).wait(1).to({rotation:336.6,x:125,y:332.9},0).wait(1).to({rotation:342.4,x:119.2,y:330.1},0).wait(1).to({rotation:348.2,x:113.8,y:326.8},0).wait(1).to({rotation:354,x:108.8,y:322.9},0).wait(1));

	// Scripts
	this.HashesText = new cjs.Text("Text", "bold 12px 'Myriad Pro'", "#2B2B2A");
	this.HashesText.name = "HashesText";
	this.HashesText.lineHeight = 17;
	this.HashesText.lineWidth = 114;
	this.HashesText.parent = this;
	this.HashesText.setTransform(274,308.7);

	this.timeline.addTween(cjs.Tween.get(this.HashesText).wait(60));

	// Stage
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A794A").s().p("AmMGNQilikAAjpQAAjoClikQCkilDoAAQDpAACkClQClCkABDoQgBDpilCkQikCljpABQjogBikilg");
	this.shape.setTransform(149.3,274.6,1.244,1.244,0,0,0,-1.4,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("An/IHIkHwNIYNAAIlhQNg");
	this.shape_1.setTransform(151.2,188.4,1,1,0,0,0,-3.1,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2A").s().p("AmPEaIgEpJIMiiLIAEN1g");
	this.shape_2.setTransform(224.4,285.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Hahes
	this.Hashes = new lib.Symbol2();
	this.Hashes.parent = this;
	this.Hashes.setTransform(303.9,283.3,1,1,0,0,0,119.9,42.3);

	this.timeline.addTween(cjs.Tween.get(this.Hashes).wait(1).to({regX:119.8,regY:45.2,x:305.1,y:286.2},0).wait(1).to({x:306.5},0).wait(1).to({x:307.8},0).wait(1).to({x:309.2},0).wait(1).to({x:310.5},0).wait(1).to({x:311.9},0).wait(1).to({x:313.2},0).wait(1).to({x:314.6},0).wait(1).to({x:315.9},0).wait(1).to({x:317.2},0).wait(1).to({x:318.6},0).wait(1).to({x:319.9},0).wait(1).to({x:321.3},0).wait(1).to({x:322.6},0).wait(1).to({x:324},0).wait(1).to({x:325.3},0).wait(1).to({x:326.7},0).wait(1).to({x:328},0).wait(1).to({x:329.4},0).wait(1).to({x:330.7},0).wait(1).to({x:332},0).wait(1).to({x:333.4},0).wait(1).to({x:334.7},0).wait(1).to({x:336.1},0).wait(1).to({x:337.4},0).wait(1).to({x:338.8},0).wait(1).to({x:340.1},0).wait(1).to({x:341.5},0).wait(1).to({x:342.8},0).wait(1).to({x:344.1},0).wait(1).to({x:345.5},0).wait(1).to({x:346.8},0).wait(1).to({x:348.2},0).wait(1).to({x:349.5},0).wait(1).to({x:350.9},0).wait(1).to({x:352.2},0).wait(1).to({x:353.6},0).wait(1).to({x:354.9},0).wait(1).to({x:356.3},0).wait(1).to({x:357.6},0).wait(1).to({x:358.9},0).wait(1).to({x:360.3},0).wait(1).to({x:361.6},0).wait(1).to({x:363},0).wait(1).to({x:364.3},0).wait(1).to({x:365.7},0).wait(1).to({x:367},0).wait(1).to({x:368.4},0).wait(1).to({x:369.7},0).wait(1).to({x:371},0).wait(1).to({x:372.4},0).wait(1).to({x:373.7},0).wait(1).to({x:375.1},0).wait(1).to({x:376.4},0).wait(1).to({x:377.8},0).wait(1).to({x:379.1},0).wait(1).to({x:380.5},0).wait(1).to({x:381.8},0).wait(1).to({x:383.2},0).wait(1));

	// Documents
	this.instance_1 = new lib.Hashes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.3,12.8,1,1,0,0,0,40.5,147.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:147.9,y:14.6},0).wait(1).to({y:16.3},0).wait(1).to({y:18},0).wait(1).to({y:19.7},0).wait(1).to({y:21.4},0).wait(1).to({y:23},0).wait(1).to({y:24.7},0).wait(1).to({y:26.4},0).wait(1).to({y:28.1},0).wait(1).to({y:29.8},0).wait(1).to({y:31.5},0).wait(1).to({y:33.2},0).wait(1).to({y:34.9},0).wait(1).to({y:36.6},0).wait(1).to({y:38.3},0).wait(1).to({y:40},0).wait(1).to({y:41.6},0).wait(1).to({y:43.3},0).wait(1).to({y:45},0).wait(1).to({y:46.7},0).wait(1).to({y:48.4},0).wait(1).to({y:50.1},0).wait(1).to({y:51.8},0).wait(1).to({y:53.5},0).wait(1).to({y:55.2},0).wait(1).to({y:56.9},0).wait(1).to({y:58.5},0).wait(1).to({y:60.2},0).wait(1).to({y:61.9},0).wait(1).to({y:63.6},0).wait(1).to({y:65.3},0).wait(1).to({y:67},0).wait(1).to({y:68.7},0).wait(1).to({y:70.4},0).wait(1).to({y:72.1},0).wait(1).to({y:73.8},0).wait(1).to({y:75.5},0).wait(1).to({y:77.1},0).wait(1).to({y:78.8},0).wait(1).to({y:80.5},0).wait(1).to({y:82.2},0).wait(1).to({y:83.9},0).wait(1).to({y:85.6},0).wait(1).to({y:87.3},0).wait(1).to({y:89},0).wait(1).to({y:90.7},0).wait(1).to({y:92.4},0).wait(1).to({y:94.1},0).wait(1).to({y:95.7},0).wait(1).to({y:97.4},0).wait(1).to({y:99.1},0).wait(1).to({y:100.8},0).wait(1).to({y:102.5},0).wait(1).to({y:104.2},0).wait(1).to({y:105.9},0).wait(1).to({y:107.6},0).wait(1).to({y:109.3},0).wait(1).to({y:111},0).wait(1).to({y:112.6},0).wait(1));

	// Nonce
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(195.7,13,1,1,0,0,0,6.5,148.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:14.8},0).wait(1).to({y:16.6},0).wait(1).to({y:18.4},0).wait(1).to({y:20.1},0).wait(1).to({y:21.9},0).wait(1).to({y:23.7},0).wait(1).to({y:25.4},0).wait(1).to({y:27.2},0).wait(1).to({y:29},0).wait(1).to({y:30.7},0).wait(1).to({y:32.5},0).wait(1).to({y:34.3},0).wait(1).to({y:36},0).wait(1).to({y:37.8},0).wait(1).to({y:39.6},0).wait(1).to({y:41.3},0).wait(1).to({y:43.1},0).wait(1).to({y:44.9},0).wait(1).to({y:46.6},0).wait(1).to({y:48.4},0).wait(1).to({y:50.2},0).wait(1).to({y:51.9},0).wait(1).to({y:53.7},0).wait(1).to({y:55.5},0).wait(1).to({y:57.2},0).wait(1).to({y:59},0).wait(1).to({y:60.8},0).wait(1).to({y:62.5},0).wait(1).to({y:64.3},0).wait(1).to({y:66.1},0).wait(1).to({y:67.8},0).wait(1).to({y:69.6},0).wait(1).to({y:71.4},0).wait(1).to({y:73.1},0).wait(1).to({y:74.9},0).wait(1).to({y:76.7},0).wait(1).to({y:78.4},0).wait(1).to({y:80.2},0).wait(1).to({y:82},0).wait(1).to({y:83.7},0).wait(1).to({y:85.5},0).wait(1).to({y:87.3},0).wait(1).to({y:89},0).wait(1).to({y:90.8},0).wait(1).to({y:92.6},0).wait(1).to({y:94.3},0).wait(1).to({y:96.1},0).wait(1).to({y:97.9},0).wait(1).to({y:99.6},0).wait(1).to({y:101.4},0).wait(1).to({y:103.2},0).wait(1).to({y:104.9},0).wait(1).to({y:106.7},0).wait(1).to({y:108.5},0).wait(1).to({y:110.2},0).wait(1).to({y:112},0).wait(1).to({y:113.8},0).wait(1).to({y:115.5},0).wait(1).to({y:117.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(242,74.2,381.7,515.1);
// library properties:
lib.properties = {
	width: 400,
	height: 420,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;