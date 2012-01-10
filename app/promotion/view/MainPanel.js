Ext.define('ProductCatalog.Promotion.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.PromotionMainPanel',
    requires: [
    ],

    id:'PromotionMainPanel',

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
