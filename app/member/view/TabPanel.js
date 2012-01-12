Ext.define('ProductCatalog.Member.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.Member.TabPanel',
    id: 'Member.TabPanel',

    requires: [
        'ProductCatalog.Member.view.TabPanel_User',
        'ProductCatalog.Member.view.TabPanel_RolePermission',
    ],

    activeTab: 0,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                     xtype: 'Member.TabPanel_User'
                    //xtype: 'tabpanel',
                },
                {
                     xtype: 'Member.TabPanel_RolePermission'
                    //xtype: 'tabpanel',
                },
            ],
        });

        me.callParent(arguments);
    }
});
