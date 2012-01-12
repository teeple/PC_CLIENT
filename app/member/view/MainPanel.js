Ext.define('ProductCatalog.Member.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Member.MainPanel',
    requires: [
        'ProductCatalog.Member.view.TabPanel',
    ],

    id:'Member.MainPanel',

//    title: 'Product Validator',
    titleCollapse: true,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'Member.TabPanel',
                }
            ]
        });

        me.callParent(arguments);
    }
});

