Ext.define('ProductCatalog.Relation.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.RelationMainPanel',
    requires: [
    ],

    id:'RelationMainPanel',

//    title: 'Product Validator',
    titleCollapse: true,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					html:'Product Validator items should be added'
				},
            ]
        });

        me.callParent(arguments);
    }
});
