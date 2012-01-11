Ext.define('ProductCatalog.Lifecycle.view.ToolBox', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.Lifecycle.ToolBox',

	requires: [
               'ProductCatalog.Lifecycle.store.ToolBox',
    ],

    id: 'Lifecycle.ToolBox',
    width: 250,

    title: 'Product List',

    collapsible: true,
    layout:'fit',
    initComponent: function() {
        var me = this;

        var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
            groupHeaderTpl: 'Status: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
        });

        Ext.applyIf(me, {
            items: [
               {
            	   xtype:'gridpanel',
            	   store: 'ProductCatalog.Lifecycle.store.ToolBox',
                   features: [groupingFeature],
                   forceFit: true,
                   columns: [
						{
							text: 'Product Type',
						    dataIndex: 'prd_type',
						    flex: 1,
						    renderer: function(value) {
						    	if(value == 'basic'){
						        	return '<img src=http://cdn1.iconfinder.com/data/icons/orb/16/5.png>  ' + value;
						    	}else if(value == 'packaged'){
						    		return '<img src=http://cdn3.iconfinder.com/data/icons/fatcow/16x16_0600/package.png>  ' + value;
						    	}else if(value == 'bundle'){
						    		return '<img src=http://cdn2.iconfinder.com/data/icons/basicset/present_16.png>  ' + value;
						    	}
						    }
					   },
	                   {
	                       text: 'Name',
	                       flex: 2,
	                       dataIndex: 'name'
	                   },
//	                   {
//	                       text: 'status',
//	                       flex: 1,
//	                       dataIndex: 'status'
//	                   }
                   ],
               }
            ]
        });

        me.callParent(arguments);
    },
});