Ext.define('ProductCatalog.Validator.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ValidatorMainPanel',
    requires: [
    ],

    id:'ValidatorMainPanel',

    title: 'Product Validator',

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