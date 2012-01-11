Ext.define('ProductCatalog.Lifecycle.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Lifecycle.MainPanel',
    requires: [
        'ProductCatalog.Lifecycle.view.ToolBox',
        'ProductCatalog.Lifecycle.view.TabPanel'
    ],

    id:'Lifecycle.MainPanel',
    layout: {
        type: 'border'
    },
//    title: 'Product LifecycleValidator',
    titleCollapse: true,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					xtype:'Lifecycle.ToolBox',
					region: 'west'
				},
				{
					xtype:'Lifecycle.TabPanel',
					region: 'center'
				},
            ]
        });

        me.callParent(arguments);
    }
});
