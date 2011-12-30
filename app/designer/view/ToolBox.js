Ext.define('ProductCatalog.Designer.view.ToolBox', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.ToolBox',
    requires: [
        'ProductCatalog.Designer.view.ToolBox_Relation',
        'ProductCatalog.Designer.view.ToolBox_Product',
        'ProductCatalog.Designer.view.ToolBox_Conditions',
        'ProductCatalog.Designer.view.ToolBox_Actions',
        'ProductCatalog.Designer.view.ToolBox_Balance',
        'ProductCatalog.Designer.view.ToolBox_VAS'
    ],

    id: 'ToolBox',
    width: 250,
    layout: {
        type: 'accordion'
    },

    title: 'ToolBox',

    collapsible: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'ToolBox_Relation'
                },
                {
                    xtype: 'ToolBox_Product'
                },
                {
                    xtype: 'ToolBox_Conditions'
                },
	            {
                    xtype: 'ToolBox_Actions'
                },
                {
                    xtype: 'ToolBox_Balance'
                },
                {
                    xtype: 'ToolBox_VAS'
                }
            ]
        });

        me.callParent(arguments);
    },
});