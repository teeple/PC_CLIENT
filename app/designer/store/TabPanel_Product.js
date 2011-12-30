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
//            proxy: {
//                type: 'rest',
//                url: '/product_catalog/app/designer/store/test.json',
//                reader: {
//                    type: 'json',
//                    read: function(response) {
//                        var responseText = response.responseText;
//                        var jsonData = Ext.JSON.decode(responseText);
//                        console.log(jsonData);
////                        http://www.sencha.com/forum/showthread.php?157976-TreeStore-load-from-custom-JSON
//
//                    },
//
//                }
//            },
//
//            model: 'ProductCatalog.Designer.model.TabPanel_Product',

        }, cfg)]);
    }
});