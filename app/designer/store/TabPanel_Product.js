Ext.define('ProductCatalog.Designer.store.TabPanel_Product', {
    extend: 'Ext.data.TreeStore',

    requires: [
               'ProductCatalog.Designer.model.TabPanel_Product',
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            storeId: 'ProductCatalog.Designer.store.TabPanel_Product',
        }, cfg)]);
    }
});