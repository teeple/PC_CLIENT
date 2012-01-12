Ext.define('ProductCatalog.Relation.view.SubPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Relation.SubPanel',
    id: 'RelationSubPanel',

    requires: [
        'ProductCatalog.Relation.view.SubPanel_Relation_Hierarchy',
        'ProductCatalog.Relation.view.SubPanel_Relation_Exclusive',
        'ProductCatalog.Relation.view.SubPanel_Relation_Product_Promotion',
    ],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                /*
                {
                    xtype: 'panel',
                }
                */
                {
                    xtype: 'Relation.SubPanel_Relation_Hierarchy'
                },
                {
                    xtype: 'Relation.SubPanel_Relation_Exclusive'
                },
                {
                    xtype: 'Relation.SubPanel_Relation_Product_Promotion'
                },
            ]
        });
        me.callParent(arguments);
    }
});
