/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./util/MyRouter'],function(q,M){"use strict";var C=sap.ui.core.UIComponent.extend("sap.ui.demokit.explored.Component",{metadata:{includes:["css/style.css","css/titles.css"],routing:{config:{routerClass:M,viewType:"XML",viewPath:"sap.ui.demokit.explored.view",targetControl:"splitApp",clearTarget:false},routes:[{pattern:"entity/{id}/{part}",name:"entity",view:"entity",viewLevel:3,targetAggregation:"detailPages"},{pattern:"sample/{id}/preview",name:"sample",view:"sample",viewLevel:4,targetAggregation:"detailPages"},{pattern:"sample/{id}/code/{fileName}",name:"code_file",view:"code",viewLevel:6,targetAggregation:"detailPages",transition:"flip"},{pattern:"sample/{id}/code",name:"code",view:"code",viewLevel:5,targetAggregation:"detailPages",transition:"flip"},{pattern:"",name:"home",view:"master",viewLevel:1,targetAggregation:"masterPages",subroutes:[{pattern:"{all*}",name:"notFound",view:"notFound",viewLevel:2,targetAggregation:"detailPages"}]}]}},init:function(){q.sap.require("sap.ui.demokit.explored.util.ObjectSearch");q.sap.require("sap.ui.demokit.explored.util.ToggleFullScreenHandler");q.sap.require("sap.ui.core.routing.History");q.sap.require("sap.m.InstanceManager");q.sap.require("sap.m.routing.RouteMatchedHandler");sap.ui.core.UIComponent.prototype.init.apply(this,arguments);var r=this.getRouter();if(!sap.ui.Device.system.phone){r.myNavToWithoutHash("sap.ui.demokit.explored.view.master","XML",true);r.myNavToWithoutHash("sap.ui.demokit.explored.view.welcome","XML",false);}this.routeHandler=new sap.m.routing.RouteMatchedHandler(r);r.initialize();},destroy:function(){if(this.routeHandler){this.routeHandler.destroy();}sap.ui.demokit.explored.util.ToggleFullScreenHandler.cleanUp();sap.ui.core.UIComponent.prototype.destroy.apply(this,arguments);},createContent:function(){var v=sap.ui.view({id:"app",viewName:"sap.ui.demokit.explored.view.app",type:"JS",viewData:{component:this}});var p=q.sap.getModulePath("sap.ui.demokit.explored");var i=new sap.ui.model.resource.ResourceModel({bundleUrl:p+"/i18n/messageBundle.properties"});v.setModel(i,"i18n");var e={entityCount:sap.ui.demokit.explored.data.entityCount,entities:sap.ui.demokit.explored.data.entities};var E=new sap.ui.model.json.JSONModel(e);E.setSizeLimit(100000);v.setModel(E,"entity");var f=sap.ui.demokit.explored.data.filter;var F=new sap.ui.model.json.JSONModel(f);F.setSizeLimit(100000);v.setModel(F,"filter");var d=new sap.ui.model.json.JSONModel({isTouch:sap.ui.Device.support.touch,isNoTouch:!sap.ui.Device.support.touch,isPhone:sap.ui.Device.system.phone,isNoPhone:!sap.ui.Device.system.phone,listMode:(sap.ui.Device.system.phone)?"None":"SingleSelectMaster",listItemType:(sap.ui.Device.system.phone)?"Active":"Inactive"});d.setDefaultBindingMode("OneWay");v.setModel(d,"device");return v;}});return C;},true);