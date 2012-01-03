Ext.define('ProductCatalog.Designer.store.TabPanel_Product_ActionDeduct', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            storeId: 'ProductCatalog.Designer.store.TabPanel_Product_ActionDeduct',
            proxy:{
            	type:'memory'
            }
        }, cfg)]);
    }
});