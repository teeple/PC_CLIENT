Ext.define('ProductCatalog.Lifecycle.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.LifecycleMainPanel',
    requires: [
    ],

    id:'LifecycleMainPanel',

//    title: 'Product LifecycleValidator',
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
