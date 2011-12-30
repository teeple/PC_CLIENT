Ext.define('ProductCatalog.Designer.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.TabPanel',
    id: 'TabPanel',
    requires: [
        'ProductCatalog.Designer.view.TabPanel_Relation',
        'ProductCatalog.Designer.view.TabPanel_Product',
        'ProductCatalog.Designer.view.TabPanel_Conditions',
        'ProductCatalog.Designer.view.TabPanel_Actions',
        'ProductCatalog.Designer.view.TabPanel_Balances',
        'ProductCatalog.Designer.view.TabPanel_VAS',
        'ProductCatalog.Designer.view.TabPanel_ETC'
    ],

    activeTab: 0,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'TabPanel_Relation'
                },
                {
                    xtype: 'TabPanel_Product'
                },
                {
                    xtype: 'TabPanel_Conditions'
                },
                {
                    xtype: 'TabPanel_Actions'
                },
                {
                    xtype: 'TabPanel_Balances'
                },
                {
                    xtype: 'TabPanel_VAS'
                },
                {
                    xtype: 'TabPanel_ETC'
                }
            ]
        });

        me.callParent(arguments);
    }
});