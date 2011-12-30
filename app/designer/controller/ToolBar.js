Ext.define('ProductCatalog.Designer.controller.ToolBar', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'#ToolBar > button': {
				click: this.menuClicked
			}
		});
	},

	menuClicked: function(button){
		var text = button.text;
		var pattern = 'TabPanel_' + text;

		//var TabPanel = Ext.getCmp('TabPanel');
		var TabPanel = Ext.ComponentQuery.query('#TabPanel')[0];

		// set hide and show depend on clicked button
		for(var i=0;i<TabPanel.items.items.length;i++){
			var item = TabPanel.items.items[i];
			var type = item.xtype;

			if(type.indexOf(pattern)==0){
				item.tab.show();
			}else{
				item.tab.hide();
			}
		}

		//set first related tab activated
		for(var i=0;i<TabPanel.items.items.length;i++){
			var item = TabPanel.items.items[i];
			if(item.tab.isHidden() == false){
				TabPanel.setActiveTab(item);
				break;
			}
		}

		//change button css
		var toolBar = Ext.getCmp('ToolBar');
		for(var i=0;i<toolBar.items.items.length;i++){
			if(toolBar.items.keys[i] == button.id){
				toolBar.items.items[i].addCls('selected');
			}else{
				toolBar.items.items[i].removeCls('selected');
			}
		}

	}
});
