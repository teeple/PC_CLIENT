Ext.define('ProductCatalog.Designer.controller.MainPanel', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'#MainPanel': {
				afterrender: this.afterrender
			}
		});
	},

	afterrender: function(){
		var mainPanel = Ext.ComponentQuery.query('#MainPanel')[0];
		mainPanel.mask = new Ext.LoadMask(mainPanel.getEl(),{msg:'Loading..'});
	}
});
