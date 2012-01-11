Ext.define('ProductCatalog.Relation.store.SubPanel_Product', {
    extend: 'Ext.data.TreeStore',

    requires: [
               'ProductCatalog.Relation.model.SubPanel_Product',
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            storeId: 'ProductCatalog.Relation.store.SubPanel_Product',
        }, cfg)]);
    }
});
