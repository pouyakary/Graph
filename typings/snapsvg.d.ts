// Type definitions for Snap.svg Javascript SVG library 0.2.0
// Project: http://snapsvg.io/
// Definitions by: Kenneth M <https://github.com/rethinkflash>

// JavaScript Docs http://snapsvg.io/docs
// Version 0.2.0 (TypeScript 1.0)


interface Filter {
	blur(x:number,y?:number):string;
	shadow(dx:number,dy:number,blur?:number,color?:string):string;
	grayscale(amount:number):string;
	sepia(amount:number):string;
	saturate(amount:number):string;
	hueRotate(angle:number):string;
	invert(amount:number):string;
	brightness(amount:number):string;
	contrast(amount:number):string;
}

interface Path {
	getTotalLength(path:string):number;
	getPointAtLength(path:string,length:number):Object;
	getSubpath(path:string,from:number,to:number):string;
	findDotsAtSegment(p1x:number,p1y:number,c1x:number,
	                  c1y:number,c2x:number,c2y:number,
	                  p2x:number,p2y:number,t:number):Object;
	bezierBBox(...args:number[]):Object;
	bezierBBox(bez:Array<number>):Object;
	isPointInsideBBox(bbox:string,x:string,y:string):boolean;
	isBBoxIntersect(bbox1:string,bbox2:string):boolean;
	intersection(path1:string,path2:string):Array<any>;
	isPointInside(path:string,x:number,y:number):boolean;
	getBBox(path:string):Object;
	toRelative(path:string):Array<any>;
	toAbsolute(path:string):Array<any>;
	toCubic(pathString:string):Array<any>;
	toCubic(pathString:Array<string>):Array<any>;
	map(path:string,matrix:Matrix):string;
	map(path:string,matrix:Object):string;
}

interface Matrix {
	add(a:number,b:number,c:number,d:number,e:number,f:number):void;
	add(matrix:Matrix):void;
	add(matrix:Object):void;

	invert():Matrix;
	clone():Matrix;
	translate(x:number,y:number):void;
	scale(x:number,y?:number,cx?:number,cy?:number):void;
	rotate(a:number,x:number,y:number):void;
	x(x:number,y:number):number;
	y(x:number,y:number):number;

	split():Object;
	toTransformString():string;

}

interface Fragment {
	select():Snap.Element;
	selectAll():Snap.Element;
}

interface Paper extends Snap.Element {


	el(name:string, attr:Object):Snap.Element;
	rect(x:number,y:number,width:number,height:number,rx?:number,ry?:number):Object;
	circle(x:number,y:number,r:number):Object;
	image(src:string,x:number,y:number,width:number,height:number):Object;
	ellipse(x:number,y:number,rx:number,ry:number):Object;
	path(pathString?:string):void;
	g(varargs?:any):Object;
	group(varargs:any):Object;
	text(x:number,y:number,text:string):Object;
	text(x:number,y:number,text:Array<string>):Object;
	line(x1:number,y1:number,x2:number,y2:number):Object;
	polyline(varargs:any[]):Object;
	polygon(varargs:any[]):Object;
	gradient(gradient:string):Object;
	filter(filstr:string):Snap.Element;
	clear():void;
}

declare function mina(a:number, A:number, b:number, B:number, get:Function, set:Function, easing?:Function):Object;
declare module mina {

	export function time():number;
	export function getById(id:string):Object;
	export function linear(n:number):number;
	export function easeout(n:number):number;
	export function easein(n:number):number;
	export function easeinout(n:number):number;
	export function backin(n:number):number;
	export function backout(n:number):number;
	export function elastic(n:number):number;
	export function bounce(n:number):number;
	export function filter(filstr:string):Object;
}

declare function Snap(width:number,height:number):Paper;
declare function Snap(query:string):Paper;
declare function Snap(DOM:SVGElement):Paper;

declare module Snap {
	export var filter:Filter;
	export var path:Path;

	export function format(token:string,json:Object):string;
	export function rad(deg:number):number;
	export function deg(rad:number):number;
	export function angle(x1:number,y1:number,x2:number,y2:number,x3?:number,y3?:number):number;
	export function is(o:any,type:string):boolean;
	export function snapTo(values:Array<number>,value:number,tolerance?:number):number;

	export function Matrix(a:number,b:number,c:number,d:number,e:number,f:number):Matrix;
	export function Matrix(svgMatrix:SVGMatrix):Matrix;

	export function getRGB(color:string):Object;
	export function hsb(h:number,s:number,b:number):string;
	export function hsl(h:number,s:number,l:number):string;
	export function rgb(r:number,g:number,b:number):string;
	export function color(clr:string):Object;
	export function hsb2rgb(h:number,s:number,v:number):Object;
	export function hsl2rgb(h:number,s:number,l:number):Object;
	export function rgb2hsb(r:number,g:number,b:number):Object;
	export function rgb2hsl(r:number,g:number,b:number):Object;

	export function parsePathString(pathString:string):Array<any>;
	export function parsePathString(pathString:Array<string>):Array<any>;
	export function parseTransformString(TString:string):Array<any>;
	export function parseTransformString(TString:Array<string>):Array<any>;
	export function select(query:string):Snap.Element;
	export function selectAll(query:string):any;
	export function attr(params:string):any;
	export function attr(params:Object):any;
	export function animate(from:number,to:number,setter:Function,duration:number,easing:Function,callback:Function):Object;
	export function animate(from:Array<number>,to:Array<number>,setter:Function,duration:number,easing:Function,callback:Function):Object;
	export function animate(from:number,to:Array<number>,setter:Function,duration:number,easing:Function,callback:Function):Object;
	export function animate(from:Array<number>,to:number,setter:Function,duration:number,easing:Function,callback:Function):Object;
	export function parse(svg:string):Fragment;
	export function fragment(varargs:any):Fragment;
	export function ajax(url:string,postData:string,callback:Function,scope?:Object):XMLHttpRequest;
	export function ajax(url:string,postData:Object,callback:Function,scope?:Object):XMLHttpRequest;
	export function ajax(url:string,callback:Function,scope?:Object):XMLHttpRequest;
	export function load(url:string,callback:Function,scope?:Object):XMLHttpRequest;
	export function getElementByPoint(x:number,y:number):Object;
	export function plugin(f:Function):void;

	export interface Element {
		constructor();
		getBBox():Object;
		transform(tstr:string):Snap.Element;
		parent():Snap.Element;
		add():void;

		append(el:Snap.Element):Snap.Element;
		appendTo(el:Snap.Element):Snap.Element;
		prepend(el:Snap.Element):Snap.Element;
		prependTo(el:Snap.Element):Snap.Element;
		before(el:Snap.Element):Snap.Element;
		after(el:Snap.Element):Snap.Element;
		insertBefore(el:Snap.Element):Snap.Element;
		insertAfter(el:Snap.Element):Snap.Element;
		remove():Snap.Element;
		select(query:string):Snap.Element;
		selectAll(query:string):any;
		asPX(attr:string,value?:string):Snap.Element;
		use():Snap.Element;
		clone():Snap.Element;
		toDefs():Snap.Element;
		pattern(x:any,y:any,width:any,height:any):Snap.Element;
		marker(x:number,y:number,width:number,height:number,refX:number,refY:number):Snap.Element;
		animation(attr:Object,duration:number,easing?:Function,callback?:Function):Object;
		inAnim():Object;
		animate(attrs:Object,duration:number,easing?:Function,callback?:Function):Snap.Element;
//		animate(from:Array<number>,duration:number,easing:Function,callback:Function):Object;
//		animate(from:number,duration:number,easing:Function,callback:Function):Object;
		stop():Snap.Element;
		data(key:string,value?:any):any;
		removeData(key?:string):Object;
		outerSVG():string;
		innerSVG():string;

		click(handler:Function):Object;
		unclick(handler:Function):Object;
		dblclick(handler:Function):Object;
		undblclick(handler:Function):Object;
		mousedown(handler:Function):Object;
		unmousedown(handler:Function):Object;
		mousemove(handler:Function):Object;
		unmousemove(handler:Function):Object;
		mouseout(handler:Function):Object;
		unmouseout(handler:Function):Object;
		mouseover(handler:Function):Object;
		unmouseover(handler:Function):Object;
		mouseup(handler:Function):Object;
		unmouseup(handler:Function):Object;
		touchstart(handler:Function):Object;
		untouchstart(handler:Function):Object;
		touchmove(handler:Function):Object;
		untouchmove(handler:Function):Object;
		touchend(handler:Function):Object;
		untouchend(handler:Function):Object;
		touchcancel(handler:Function):Object;
		untouchcancel(handler:Function):Object;
		hover(f_in:Function,f_out:Function,icontext?:Object,ocontext?:Object):Object;
		unhover(f_in:Function,f_out:Function):Object;
		drag(onmove:Function,onstart:Function,onend:Function,mcontext?:Object,scontext?:Object,econtext?:Object):Object;
		undrag():void;

		getTotalLength():number;
		getPointAtLength(length:number):Object;
		getSubpath(from:number,to:number):string;
	}

	export interface Set {
		push(...args:any[]):Snap.Element;
		pop(...args:any[]):Snap.Element;
		forEach(callback:Function,thisArg:Object):Object;
		clear();
		splice(index:number,cont:number,insertion?:Object[]):Object;
		exclude(element:Snap.Element):boolean;
	}
}