Ext.define('ProductCatalog.Lifecycle.view.TabPanel_Overview', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Lifecycle.TabPanel_Overview',
    id:'Lifecycle.TabPanel_Overview',
    title: 'Status Overview',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [

            ]
        });
        me.callParent(arguments);
    }

});
