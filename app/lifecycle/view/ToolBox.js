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

     // create the Grid, see Ext.
        var gridPanel = Ext.create('Ext.ux.LiveSearchGridPanel', {
        	collapseTitle: true,
            forceFit: true,
            store: 'ProductCatalog.Lifecycle.store.ToolBox',
            features: [groupingFeature],
            columnLines: true,
            columns: [
	               {
	                   text: 'Product Name',
	                   flex: 2,
	                   dataIndex: 'name'
	               },
	               {
	            	   id:'status',
	                   dataIndex: 'status',
	                   hidden: true
	               }
	          ],
            viewConfig: {
                stripeRows: true,
                plugins: {
                    ddGroup: 'ddGroup',
                    ptype: 'gridviewdragdrop',
                    enableDrop: false
                }
            }
        });

        Ext.applyIf(me, {
            items: [
                    gridPanel
            ]
        });

        me.callParent(arguments);
    },
});