Ext.define('ProductCatalog.Designer.view.ToolBox_Relation', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ToolBox_Relation',
    id: 'ToolBox_Relation',

    collapsed: false,
    title: 'Relation',

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