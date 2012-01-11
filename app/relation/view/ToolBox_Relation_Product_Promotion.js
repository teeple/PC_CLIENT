Ext.define('ProductCatalog.Relation.view.ToolBox_Relation_Product_Promotion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Relation.ToolBox_Relation_Product_Promotion',
    id: 'Relation_ToolBox_Relation_Product_Promotion',

    collapsed: false,
    title: 'Relation_Product_Promotion',

    initComponent: function() {
        var me = this;

        /*
        Ext.applyIf(me, {
            items: [
                {
                    html:'ToolBox_Relation'
                }
            ]
        });
        */


        me.callParent(arguments);
    }
});
