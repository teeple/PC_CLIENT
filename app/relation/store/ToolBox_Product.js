Ext.define('ProductCatalog.Relation.store.ToolBox_Product', {
    extend: 'Ext.data.Store',

    requires: [
               'ProductCatalog.Relation.model.ToolBox_Product',
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'ProductCatalog.Relation.store.ToolBox_Product',
            proxy: {
                type: 'rest',
                url: '/products.json',
                reader: {
                    type: 'json',
                }
            },
            model: 'ProductCatalog.Relation.model.ToolBox_Product'
        }, cfg)]);
    }
});
