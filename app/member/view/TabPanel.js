Ext.define('ProductCatalog.Member.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.Member.TabPanel',
    id: 'Member_TabPanel',

    requires: [
        'ProductCatalog.Member.view.TabPanel_User',
        'ProductCatalog.Member.view.TabPanel_Role',
        'ProductCatalog.Member.view.TabPanel_Permission',
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
                     xtype: 'Member.TabPanel_Role'
                    //xtype: 'tabpanel',
                },
                {
                     xtype: 'Member.TabPanel_Permission'
                   // xtype: 'tabpanel',
                },
            ],
        });

        me.callParent(arguments);
    }
});
