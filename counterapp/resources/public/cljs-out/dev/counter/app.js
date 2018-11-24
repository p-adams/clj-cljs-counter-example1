// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('counter.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('ajax.core');
if((typeof counter !== 'undefined') && (typeof counter.app !== 'undefined') && (typeof counter.app.base_url !== 'undefined')){
} else {
counter.app.base_url = "http://localhost:3000/counter";
}
if((typeof counter !== 'undefined') && (typeof counter.app !== 'undefined') && (typeof counter.app.message !== 'undefined')){
} else {
counter.app.message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("loading...");
}
counter.app.set_message = (function counter$app$set_message(msg){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));

return cljs.core.reset_BANG_(counter.app.message,cljs.core.cst$kw$msg.cljs$core$IFn$_invoke$arity$1(msg));
});
counter.app.load_the_counter = (function counter$app$load_the_counter(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(counter.app.base_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$handler,counter.app.set_message,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true], null)], 0));
});
if((typeof counter !== 'undefined') && (typeof counter.app !== 'undefined') && (typeof counter.app.app_state !== 'undefined')){
} else {
counter.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Hello world!"], null));
}
counter.app.multiply = (function counter$app$multiply(x,y){
return (x * y);
});
counter.app.get_app_element = (function counter$app$get_app_element(){
return goog.dom.getElement("app");
});
counter.app.inc_it = (function counter$app$inc_it(c){
return cljs.core.reset_BANG_(counter.app.message,cljs.core.cst$kw$msg.cljs$core$IFn$_invoke$arity$1(c));
});
counter.app.dec_it = (function counter$app$dec_it(c){
return cljs.core.reset_BANG_(counter.app.message,cljs.core.cst$kw$msg.cljs$core$IFn$_invoke$arity$1(c));
});
counter.app.inc_handler = (function counter$app$inc_handler(){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter.app.base_url),"/inc"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,counter.app.inc_it], null)], 0));
});
counter.app.dec_handler = (function counter$app$dec_handler(){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter.app.base_url),"/dec"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,counter.app.dec_it], null)], 0));
});
counter.app.hello_world = (function counter$app$hello_world(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counter.app.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counter.app.message))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,counter.app.inc_handler], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,counter.app.dec_handler], null),"-"], null)], null);
});
counter.app.mount = (function counter$app$mount(el){
counter.app.load_the_counter();

var G__11405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.hello_world], null);
var G__11406 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11405,G__11406) : reagent.core.render_component.call(null,G__11405,G__11406));
});
counter.app.mount_app_element = (function counter$app$mount_app_element(){
var temp__5457__auto__ = counter.app.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return counter.app.mount(el);
} else {
return null;
}
});
counter.app.mount_app_element();
counter.app.on_reload = (function counter$app$on_reload(){
return counter.app.mount_app_element();
});
