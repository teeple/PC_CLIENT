Ext.define('ProductCatalog.Relation.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Relation.MainPanel',

    requires: [
        'ProductCatalog.Relation.view.ToolBox',
        'ProductCatalog.Relation.view.SubPanel'
    ],
    id: 'RelationMainPanel',

    activeItem: 0,

    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    // title: '',
    titleCollapse: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'Relation.ToolBox',
                    flex: 1
                },
                {
                    // xtype: 'Relation.SubPanel',
                    xtype: 'panel',
                    flex: 2
                },
            ]
        });

        me.callParent(arguments);
    }
});
