Ext.define('ProductCatalog.Relation.view.ToolBox_Relation_Hierarchy', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Relation.ToolBox_Relation_Hierarchy',
    id: 'Relation_ToolBox_Relation_Hierarchy',

    collapsed: false,
    title: 'Relation_Hierarchy',

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
