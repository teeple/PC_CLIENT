Ext.define('ProductCatalog.Relation.view.ToolBox_Relation_Exclusive', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Relation.ToolBox_Relation_Exclusive',
    id: 'Relation_ToolBox_Relation_Exclusive',

    height: '100%',
    width: '100%',

    requires: [
        'Ext.ux.LiveSearchGridPanel'
    ],

    collapsed: false,
    title: 'Relation_Exclusive',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        var gridPanel = Ext.create('Ext.ux.LiveSearchGridPanel', {
            title: 'Relation List',
            forceFit: true,
            store: 'ProductCatalog.Relation.store.ToolBox_Relation_Exclusive',
            columnLines: true,
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'relation type',
                    dataIndex: 'relation_type',

                    renderer: function(value) {
                        return value;
                    }
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Name',
                    dataIndex: 'name',

                    renderer: function(value) {
                        return value;
                    }
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
    }
});
