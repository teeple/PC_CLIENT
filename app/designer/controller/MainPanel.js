Ext.define('ProductCatalog.Designer.controller.MainPanel', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'#DesignerMainPanel': {
				afterrender: this.afterrender
			}
		});
	},

	afterrender: function(){
		var mainPanel = Ext.ComponentQuery.query('#DesignerMainPanel')[0];
		mainPanel.mask = new Ext.LoadMask(mainPanel.getEl(),{msg:'Loading..'});

		// Ext.ComponentQuery.query('#designer-win')[0].maximize();
	}
});
