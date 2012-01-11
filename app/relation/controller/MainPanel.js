Ext.define('ProductCatalog.Relation.controller.MainPanel', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'#RelationMainPanel': {
				afterrender: this.afterrender
			}
		});
	},

	afterrender: function(){
		var mainPanel = Ext.ComponentQuery.query('#RelationMainPanel')[0];
		mainPanel.mask = new Ext.LoadMask(mainPanel.getEl(),{msg:'Loading..'});
	}
});
