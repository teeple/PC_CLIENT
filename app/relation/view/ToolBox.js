Ext.define('ProductCatalog.Relation.view.ToolBox', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.Relation.ToolBox',
    requires: [
        'ProductCatalog.Relation.view.ToolBox_Relation_Hierarchy',
        'ProductCatalog.Relation.view.ToolBox_Relation_Exclusive',
        'ProductCatalog.Relation.view.ToolBox_Relation_Product_Promotion',
        'ProductCatalog.Relation.view.ToolBox_Product',
    ],

    id: 'RelationToolBox',
    width: 250,
    layout: {
        type: 'accordion'
    },

    title: 'ToolBox',
    collapsible: true,
    collapseDirection: 'left',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                },
                {
                    xtype: 'panel',
                }
                /*
                {
                    xtype: 'Relation.ToolBox_Product'
                },
                */
                /*
                {
                    xtype: 'Relation.ToolBox_Relation_Exclusive'
                },
                {
                    xtype: 'Relation.ToolBox_Relation_Hierarchy'
                },
                {
                    xtype: 'Relation.ToolBox_Relation_Product_Promotion'
                },
                */
            ]
        });

        me.callParent(arguments);
    },
});
