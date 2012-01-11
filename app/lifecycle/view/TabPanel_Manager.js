Ext.define('ProductCatalog.Lifecycle.view.TabPanel_Manager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Lifecycle.TabPanel_Manager',
    id:'Lifecycle.TabPanel_Manager',
    title: 'Lifecycle Manager',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [

            ]
        });
        me.callParent(arguments);
    }

});
