Ext.define('ProductCatalog.Relation.controller.ToolBox', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'#ToolBox': {
				afterrender: this.initExpand
			}
		});
	},

	initExpand: function() {
		Ext.ComponentQuery.query('#ToolBox_Product')[0].expand();
		//Ext.getCmp('ToolBox_Product').expand();
	}

});
