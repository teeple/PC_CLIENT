Ext.define('ProductCatalog.Lifecycle.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.Lifecycle.TabPanel',
    id: 'Lifecycle.TabPanel',
    requires: [
        'ProductCatalog.Lifecycle.view.TabPanel_Manager',
        'ProductCatalog.Lifecycle.view.TabPanel_Overview'
    ],

    activeTab: 0,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                    {
                    	xtype:'Lifecycle.TabPanel_Manager',
                    },
                    {
                    	xtype:'Lifecycle.TabPanel_Overview',
                    }
            ]
        });

        me.callParent(arguments);
    }
});