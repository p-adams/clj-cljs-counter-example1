// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__10145 = e.target.readyState;
var fexpr__10144 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__10144.cljs$core$IFn$_invoke$arity$1 ? fexpr__10144.cljs$core$IFn$_invoke$arity$1(G__10145) : fexpr__10144.call(null,G__10145));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10147,handler){
var map__10148 = p__10147;
var map__10148__$1 = ((((!((map__10148 == null)))?(((((map__10148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10148):map__10148);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10148__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10148__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10148__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10148__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10148__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10148__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10148__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__10148,map__10148__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__10146_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__10146_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__10148,map__10148__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___10160 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___10160)){
var response_type_10161 = temp__5457__auto___10160;
this$__$1.responseType = cljs.core.name(response_type_10161);
} else {
}

var seq__10150_10162 = cljs.core.seq(headers);
var chunk__10151_10163 = null;
var count__10152_10164 = (0);
var i__10153_10165 = (0);
while(true){
if((i__10153_10165 < count__10152_10164)){
var vec__10154_10166 = chunk__10151_10163.cljs$core$IIndexed$_nth$arity$2(null,i__10153_10165);
var k_10167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154_10166,(0),null);
var v_10168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154_10166,(1),null);
this$__$1.setRequestHeader(k_10167,v_10168);


var G__10169 = seq__10150_10162;
var G__10170 = chunk__10151_10163;
var G__10171 = count__10152_10164;
var G__10172 = (i__10153_10165 + (1));
seq__10150_10162 = G__10169;
chunk__10151_10163 = G__10170;
count__10152_10164 = G__10171;
i__10153_10165 = G__10172;
continue;
} else {
var temp__5457__auto___10173 = cljs.core.seq(seq__10150_10162);
if(temp__5457__auto___10173){
var seq__10150_10174__$1 = temp__5457__auto___10173;
if(cljs.core.chunked_seq_QMARK_(seq__10150_10174__$1)){
var c__4351__auto___10175 = cljs.core.chunk_first(seq__10150_10174__$1);
var G__10176 = cljs.core.chunk_rest(seq__10150_10174__$1);
var G__10177 = c__4351__auto___10175;
var G__10178 = cljs.core.count(c__4351__auto___10175);
var G__10179 = (0);
seq__10150_10162 = G__10176;
chunk__10151_10163 = G__10177;
count__10152_10164 = G__10178;
i__10153_10165 = G__10179;
continue;
} else {
var vec__10157_10180 = cljs.core.first(seq__10150_10174__$1);
var k_10181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157_10180,(0),null);
var v_10182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157_10180,(1),null);
this$__$1.setRequestHeader(k_10181,v_10182);


var G__10183 = cljs.core.next(seq__10150_10174__$1);
var G__10184 = null;
var G__10185 = (0);
var G__10186 = (0);
seq__10150_10162 = G__10183;
chunk__10151_10163 = G__10184;
count__10152_10164 = G__10185;
i__10153_10165 = G__10186;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
