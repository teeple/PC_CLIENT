Ext.define('ProductCatalog.Designer.store.ToolBox_Product', {
    extend: 'Ext.data.Store',

    requires: [
               'ProductCatalog.Designer.model.ToolBox_Product',
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'ProductCatalog.Designer.store.ToolBox_Product',
            proxy: {
                type: 'rest',
                url: '/products.json',
                reader: {
                    type: 'json',
//                    read: function(response) {
//                        console.log(response);
//                    }
                }
            },
            model: 'ProductCatalog.Designer.model.ToolBox_Product'
        }, cfg)]);
    }
});