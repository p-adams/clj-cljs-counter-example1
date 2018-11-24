// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17515){
var map__17516 = p__17515;
var map__17516__$1 = ((((!((map__17516 == null)))?(((((map__17516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17516):map__17516);
var m = map__17516__$1;
var n = cljs.core.get.call(null,map__17516__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17516__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17518_17540 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17519_17541 = null;
var count__17520_17542 = (0);
var i__17521_17543 = (0);
while(true){
if((i__17521_17543 < count__17520_17542)){
var f_17544 = cljs.core._nth.call(null,chunk__17519_17541,i__17521_17543);
cljs.core.println.call(null,"  ",f_17544);


var G__17545 = seq__17518_17540;
var G__17546 = chunk__17519_17541;
var G__17547 = count__17520_17542;
var G__17548 = (i__17521_17543 + (1));
seq__17518_17540 = G__17545;
chunk__17519_17541 = G__17546;
count__17520_17542 = G__17547;
i__17521_17543 = G__17548;
continue;
} else {
var temp__5457__auto___17549 = cljs.core.seq.call(null,seq__17518_17540);
if(temp__5457__auto___17549){
var seq__17518_17550__$1 = temp__5457__auto___17549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17518_17550__$1)){
var c__4351__auto___17551 = cljs.core.chunk_first.call(null,seq__17518_17550__$1);
var G__17552 = cljs.core.chunk_rest.call(null,seq__17518_17550__$1);
var G__17553 = c__4351__auto___17551;
var G__17554 = cljs.core.count.call(null,c__4351__auto___17551);
var G__17555 = (0);
seq__17518_17540 = G__17552;
chunk__17519_17541 = G__17553;
count__17520_17542 = G__17554;
i__17521_17543 = G__17555;
continue;
} else {
var f_17556 = cljs.core.first.call(null,seq__17518_17550__$1);
cljs.core.println.call(null,"  ",f_17556);


var G__17557 = cljs.core.next.call(null,seq__17518_17550__$1);
var G__17558 = null;
var G__17559 = (0);
var G__17560 = (0);
seq__17518_17540 = G__17557;
chunk__17519_17541 = G__17558;
count__17520_17542 = G__17559;
i__17521_17543 = G__17560;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17561 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17561);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17561)))?cljs.core.second.call(null,arglists_17561):arglists_17561));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17522_17562 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17523_17563 = null;
var count__17524_17564 = (0);
var i__17525_17565 = (0);
while(true){
if((i__17525_17565 < count__17524_17564)){
var vec__17526_17566 = cljs.core._nth.call(null,chunk__17523_17563,i__17525_17565);
var name_17567 = cljs.core.nth.call(null,vec__17526_17566,(0),null);
var map__17529_17568 = cljs.core.nth.call(null,vec__17526_17566,(1),null);
var map__17529_17569__$1 = ((((!((map__17529_17568 == null)))?(((((map__17529_17568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17529_17568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17529_17568):map__17529_17568);
var doc_17570 = cljs.core.get.call(null,map__17529_17569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17571 = cljs.core.get.call(null,map__17529_17569__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17567);

cljs.core.println.call(null," ",arglists_17571);

if(cljs.core.truth_(doc_17570)){
cljs.core.println.call(null," ",doc_17570);
} else {
}


var G__17572 = seq__17522_17562;
var G__17573 = chunk__17523_17563;
var G__17574 = count__17524_17564;
var G__17575 = (i__17525_17565 + (1));
seq__17522_17562 = G__17572;
chunk__17523_17563 = G__17573;
count__17524_17564 = G__17574;
i__17525_17565 = G__17575;
continue;
} else {
var temp__5457__auto___17576 = cljs.core.seq.call(null,seq__17522_17562);
if(temp__5457__auto___17576){
var seq__17522_17577__$1 = temp__5457__auto___17576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17522_17577__$1)){
var c__4351__auto___17578 = cljs.core.chunk_first.call(null,seq__17522_17577__$1);
var G__17579 = cljs.core.chunk_rest.call(null,seq__17522_17577__$1);
var G__17580 = c__4351__auto___17578;
var G__17581 = cljs.core.count.call(null,c__4351__auto___17578);
var G__17582 = (0);
seq__17522_17562 = G__17579;
chunk__17523_17563 = G__17580;
count__17524_17564 = G__17581;
i__17525_17565 = G__17582;
continue;
} else {
var vec__17531_17583 = cljs.core.first.call(null,seq__17522_17577__$1);
var name_17584 = cljs.core.nth.call(null,vec__17531_17583,(0),null);
var map__17534_17585 = cljs.core.nth.call(null,vec__17531_17583,(1),null);
var map__17534_17586__$1 = ((((!((map__17534_17585 == null)))?(((((map__17534_17585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17534_17585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17534_17585):map__17534_17585);
var doc_17587 = cljs.core.get.call(null,map__17534_17586__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17588 = cljs.core.get.call(null,map__17534_17586__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17584);

cljs.core.println.call(null," ",arglists_17588);

if(cljs.core.truth_(doc_17587)){
cljs.core.println.call(null," ",doc_17587);
} else {
}


var G__17589 = cljs.core.next.call(null,seq__17522_17577__$1);
var G__17590 = null;
var G__17591 = (0);
var G__17592 = (0);
seq__17522_17562 = G__17589;
chunk__17523_17563 = G__17590;
count__17524_17564 = G__17591;
i__17525_17565 = G__17592;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__17536 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17537 = null;
var count__17538 = (0);
var i__17539 = (0);
while(true){
if((i__17539 < count__17538)){
var role = cljs.core._nth.call(null,chunk__17537,i__17539);
var temp__5457__auto___17593__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17593__$1)){
var spec_17594 = temp__5457__auto___17593__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17594));
} else {
}


var G__17595 = seq__17536;
var G__17596 = chunk__17537;
var G__17597 = count__17538;
var G__17598 = (i__17539 + (1));
seq__17536 = G__17595;
chunk__17537 = G__17596;
count__17538 = G__17597;
i__17539 = G__17598;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__17536);
if(temp__5457__auto____$1){
var seq__17536__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17536__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__17536__$1);
var G__17599 = cljs.core.chunk_rest.call(null,seq__17536__$1);
var G__17600 = c__4351__auto__;
var G__17601 = cljs.core.count.call(null,c__4351__auto__);
var G__17602 = (0);
seq__17536 = G__17599;
chunk__17537 = G__17600;
count__17538 = G__17601;
i__17539 = G__17602;
continue;
} else {
var role = cljs.core.first.call(null,seq__17536__$1);
var temp__5457__auto___17603__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17603__$2)){
var spec_17604 = temp__5457__auto___17603__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17604));
} else {
}


var G__17605 = cljs.core.next.call(null,seq__17536__$1);
var G__17606 = null;
var G__17607 = (0);
var G__17608 = (0);
seq__17536 = G__17605;
chunk__17537 = G__17606;
count__17538 = G__17607;
i__17539 = G__17608;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
