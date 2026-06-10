(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"1000_atlas_1", frames: [[0,0,1282,541]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["1000_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(0,0,641,270.5), null);


(lib.burbuja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEUAAQAAByhRBRQhRBRhyAAQhyAAhRhRQhQhRAAhyQAAhyBQhRQBRhQByAAQByAABRBQQBRBRAAByg");
	this.shape.setTransform(27.6,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_1.setTransform(32.95,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,57.2,57.2);


(lib.animburbuja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.burbuja("synched",0);
	this.instance.setTransform(27.6,27.6,0.2663,0.2663,0,0,0,27.6,27.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2665,scaleY:0.267,rotation:-0.1004,x:27.55,y:27.55,alpha:0.0067},0).wait(1).to({scaleX:0.2672,scaleY:0.269,rotation:-0.4031,y:27.4,alpha:0.0269},0).wait(1).to({scaleX:0.2683,scaleY:0.2723,rotation:-0.9102,y:27.3,alpha:0.0607},0).wait(1).to({scaleX:0.2699,scaleY:0.277,rotation:-1.6237,y:27.05,alpha:0.1083},0).wait(1).to({scaleX:0.2719,scaleY:0.283,rotation:-2.5457,x:27.6,y:26.7,alpha:0.1697},0).wait(1).to({scaleX:0.2743,scaleY:0.2905,rotation:-3.6781,y:26.35,alpha:0.2453},0).wait(1).to({scaleX:0.2773,scaleY:0.2993,rotation:-5.023,x:27.55,y:25.95,alpha:0.3349},0).wait(1).to({scaleX:0.2807,scaleY:0.3096,rotation:-6.5822,x:27.65,y:25.4,alpha:0.4389},0).wait(1).to({scaleX:0.2846,scaleY:0.3213,rotation:-8.3575,x:27.6,y:24.8,alpha:0.5573},0).wait(1).to({scaleX:0.2889,scaleY:0.3344,rotation:-10.3506,x:27.65,y:24.15,alpha:0.6902},0).wait(1).to({scaleX:0.2937,scaleY:0.3489,rotation:-12.5632,y:23.45,alpha:0.8377},0).wait(1).to({regX:27.9,regY:28.1,scaleX:0.2991,scaleY:0.3649,rotation:-14.9969,x:27.7,y:22.65,alpha:1},0).wait(1).to({regX:27.6,regY:27.6,scaleX:0.3049,scaleY:0.3686,rotation:-14.0285,x:27.55,y:21.55},0).wait(1).to({scaleX:0.3112,scaleY:0.3726,rotation:-12.9786,y:20.5},0).wait(1).to({scaleX:0.3179,scaleY:0.3769,rotation:-11.8467,x:27.6,y:19.5},0).wait(1).to({scaleX:0.3252,scaleY:0.3815,rotation:-10.6325,x:27.55,y:18.35},0).wait(1).to({scaleX:0.333,scaleY:0.3864,rotation:-9.3357,y:17.1},0).wait(1).to({scaleX:0.3412,scaleY:0.3916,rotation:-7.9559,x:27.6,y:15.85},0).wait(1).to({scaleX:0.35,scaleY:0.3972,rotation:-6.4933,x:27.55,y:14.45},0).wait(1).to({scaleX:0.3593,scaleY:0.4031,rotation:-4.9475,x:27.6,y:13},0).wait(1).to({scaleX:0.369,scaleY:0.4092,rotation:-3.3188,x:27.55,y:11.45},0).wait(1).to({scaleX:0.3793,scaleY:0.4157,rotation:-1.6074,y:9.85},0).wait(1).to({scaleX:0.39,scaleY:0.4226,rotation:0.1866,y:8.2},0).wait(1).to({scaleX:0.4013,scaleY:0.4297,rotation:2.0627,y:6.45},0).wait(1).to({scaleX:0.413,scaleY:0.4371,rotation:4.0203,y:4.6},0).wait(1).to({scaleX:0.4252,scaleY:0.4449,rotation:6.0587,y:2.65},0).wait(1).to({scaleX:0.4379,scaleY:0.4529,rotation:8.1769,y:0.65},0).wait(1).to({scaleX:0.4511,scaleY:0.4613,rotation:10.374,x:27.6,y:-1.4},0).wait(1).to({scaleX:0.4647,scaleY:0.4699,rotation:12.6485,y:-3.55},0).wait(1).to({regX:27.8,scaleX:0.4788,scaleY:0.4788,rotation:14.999,x:27.7,y:-5.5},0).wait(1).to({regX:27.6,scaleX:0.4934,scaleY:0.4985,rotation:13.4909,x:27.6,y:-7.7},0).wait(1).to({scaleX:0.5083,scaleY:0.5188,rotation:11.9378,y:-10.1},0).wait(1).to({scaleX:0.5237,scaleY:0.5397,rotation:10.3412,x:27.55,y:-12.5},0).wait(1).to({scaleX:0.5395,scaleY:0.5611,rotation:8.7026,x:27.5,y:-14.95},0).wait(1).to({scaleX:0.5557,scaleY:0.583,rotation:7.024,x:27.55,y:-17.45},0).wait(1).to({scaleX:0.5722,scaleY:0.6055,rotation:5.3073,y:-20.05},0).wait(1).to({scaleX:0.5891,scaleY:0.6284,rotation:3.5548,x:27.5,y:-22.7},0).wait(1).to({scaleX:0.6063,scaleY:0.6517,rotation:1.7688,x:27.55,y:-25.35},0).wait(1).to({scaleX:0.6238,scaleY:0.6755,rotation:-0.0478,x:27.45,y:-28.1},0).wait(1).to({scaleX:0.6416,scaleY:0.6996,rotation:-1.8921,x:27.5,y:-30.9},0).wait(1).to({scaleX:0.6596,scaleY:0.724,rotation:-3.761,x:27.45,y:-33.65},0).wait(1).to({scaleX:0.6778,scaleY:0.7487,rotation:-5.6507,y:-36.55},0).wait(1).to({scaleX:0.6962,scaleY:0.7736,rotation:-7.5577,y:-39.4},0).wait(1).to({regX:27.7,scaleX:0.7147,scaleY:0.7987,rotation:-9.4776,x:27.7,y:-42.3},0).wait(1).to({regX:27.6,scaleX:0.7112,scaleY:0.7892,rotation:-8.7925,x:27.6,y:-45.55,alpha:0.9277},0).wait(1).to({scaleX:0.7078,scaleY:0.7796,rotation:-8.1059,y:-48.75,alpha:0.8553},0).wait(1).to({scaleX:0.7043,scaleY:0.7701,rotation:-7.4198,y:-52,alpha:0.7829},0).wait(1).to({scaleX:0.7008,scaleY:0.7605,rotation:-6.7359,x:27.55,y:-55.15,alpha:0.7107},0).wait(1).to({scaleX:0.6974,scaleY:0.7511,rotation:-6.0563,x:27.6,y:-58.4,alpha:0.639},0).wait(1).to({scaleX:0.694,scaleY:0.7417,rotation:-5.3831,x:27.55,y:-61.55,alpha:0.568},0).wait(1).to({scaleX:0.6906,scaleY:0.7324,rotation:-4.7184,y:-64.65,alpha:0.4979},0).wait(1).to({scaleX:0.6873,scaleY:0.7233,rotation:-4.0647,y:-67.8,alpha:0.4289},0).wait(1).to({scaleX:0.684,scaleY:0.7144,rotation:-3.4242,x:27.6,y:-70.8,alpha:0.3613},0).wait(1).to({scaleX:0.6809,scaleY:0.7057,rotation:-2.7993,x:27.55,y:-73.7,alpha:0.2954},0).wait(1).to({scaleX:0.6778,scaleY:0.6972,rotation:-2.1927,x:27.6,y:-76.55,alpha:0.2314},0).wait(1).to({scaleX:0.6748,scaleY:0.6891,rotation:-1.6069,x:27.55,y:-79.3,alpha:0.1695},0).wait(1).to({scaleX:0.672,scaleY:0.6812,rotation:-1.0444,x:27.6,y:-82,alpha:0.1102},0).wait(1).to({scaleX:0.6693,scaleY:0.6738,rotation:-0.5079,x:27.55,y:-84.5,alpha:0.0536},0).wait(1).to({regX:27.7,scaleX:0.6667,scaleY:0.6667,rotation:0,x:27.65,y:-86.95,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,-106.3,41.7,142.3);


(lib.burbujas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// animburbuja
	this.instance = new lib.animburbuja();
	this.instance.setTransform(7.35,7.35,1,1,0,0,0,27.6,27.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},60).wait(16));

	// animburbuja
	this.instance_1 = new lib.animburbuja();
	this.instance_1.setTransform(77.55,72.6,1,1,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},60).wait(30));

	// animburbuja
	this.instance_2 = new lib.animburbuja();
	this.instance_2.setTransform(7.35,97.15,1,1,0,0,0,27.6,27.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).wait(60));

	// animburbuja
	this.instance_3 = new lib.animburbuja();
	this.instance_3.setTransform(50.05,105.75,1,1,0,0,0,27.6,27.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true},60).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,85.19999999999999,113.39999999999999);


// stage content:
(lib.desktop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [89];
	// timeline functions:
	this.frame_89 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// burbujas
	this.instance = new lib.burbujas();
	this.instance.setTransform(1538.9,408,1,1,0,0,0,42.5,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Read_Something
	this.instance_1 = new lib.txt();
	this.instance_1.setTransform(995.8,295.95,1,1,0,0,0,320.4,135.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:119},29,cjs.Ease.quartOut).wait(61));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1635.4,483.7,-53.90000000000009,-52.19999999999999);
// library properties:
lib.properties = {
	id: 'A9085FCE5E16284F86BA72A0BAAA114D',
	width: 1920,
	height: 1000,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/1000_atlas_1.png", id:"1000_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A9085FCE5E16284F86BA72A0BAAA114D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(lib, isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;