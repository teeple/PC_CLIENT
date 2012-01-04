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
//            pageSize: 3,
            proxy: {
                type: 'rest',
                url: '/products.json',
//                url: '/realjangsun/app/designer/store/test.json',
                reader: {
                    type: 'json',
//                    totalProperty: 'total'
                }
            },
            model: 'ProductCatalog.Designer.model.ToolBox_Product'
        }, cfg)]);
    }
});