Ext.define('ProductCatalog.Relation.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Relation.MainPanel',

    requires: [
        'ProductCatalog.Relation.view.ToolBox',
        'ProductCatalog.Relation.view.SubPanel'
    ],
    id: 'RelationMainPanel',

    // activeItem: 0,
    layout: {
        type: 'border'
    },
    // title: '',
    titleCollapse: true,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'Relation.ToolBox',
                    region: 'west'
                },
                {
                    xtype: 'panel',
                    region: 'center'
                },
            ]
        });

        me.callParent(arguments);
    }
});

