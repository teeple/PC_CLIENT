Ext.define('ProductCatalog.Relation.view.ToolBox_Relation_Exclusive', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Relation.ToolBox_Relation_Exclusive',
    id: 'Relation_ToolBox_Relation_Exclusive',

    collapsed: false,
    title: 'Relation_Exclusive',

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
