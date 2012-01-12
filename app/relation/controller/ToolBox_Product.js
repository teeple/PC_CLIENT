Ext.define('ProductCatalog.Relation.controller.ToolBox_Product', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'#ToolBox_Product > gridpanel':{
				itemdblclick: this.readProduct
			}
		});
	},

	readProduct: function(dataview, record, item, index, e){

        /*
		var button = Ext.ComponentQuery.query('#ToolBar_Product_Button')[0];
		button.fireEvent('click',button);

		var treePanel = Ext.ComponentQuery.query('#SubPanel_Product treepanel')[0];
		treePanel.fireEvent('readproduct',{id:record.data.id,name:record.data.name});
        */
	}
});

