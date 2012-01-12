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
//            groupHeaderTpl: '{name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
        	groupHeaderTpl: '{[values.rows[0].status]}',
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
	                       text: 'Name',
	                       flex: 2,
	                       dataIndex: 'name'
	                   },
	                   {
	                	   id:'status',
	                       dataIndex: 'status',
	                       hidden: true
	                   }
                   ],
               }
            ]
        });

        me.callParent(arguments);
    },
});