define([
	"dojo/_base/declare",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojox/mvc/WidgetList",
	"dojox/mvc/_InlineTemplateMixin",
	"todo/CssToggleWidget",
	"todo/ctrl/_HashCompletedMixin"
], function(declare, _TemplatedMixin, _WidgetsInTemplateMixin, WidgetList, _InlineTemplateMixin, CssToggleWidget, _HashCompletedMixin){
	return declare([WidgetList, _InlineTemplateMixin], {
		childClz: declare([CssToggleWidget,  _TemplatedMixin, _WidgetsInTemplateMixin, _HashCompletedMixin], {
			_setHiddenAttr: {type: "classExists", className: "hidden"},

			onRemoveClick: function(){
				this.parent.listCtrl.removeItem(this.uniqueId);
			},

			onEditBoxChange: function(){
				if(!this.editBox.value){
					this.parent.listCtrl.removeItem(this.uniqueId);
				}
			},

			_setCompletedAttr: function(/*Boolean*/ value){
				// summary:
				//		Handler for calls to set("completed", val), to update hidden state as well as CSS class given the new value and the hash.

				this.inherited(arguments);
				this._attrToDom("completed", value, {type: "classExists", className: "completed"});
			}
		})
	});
});
