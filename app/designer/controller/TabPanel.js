Ext.define('ProductCatalog.Designer.controller.TabPanel', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'#TabPanel': {
				afterrender: this.afterrender
			}
		});
	},

	afterrender: function(){
		//초기 활성 탭 설정..현재 Product로 설정 됨..
		//var button = Ext.getCmp('ToolBar_Product_Button');
		var button = Ext.ComponentQuery.query('#ToolBar_Product_Button')[0];
		button.fireEvent('click',button);
	}
});
