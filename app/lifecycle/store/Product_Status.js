Ext.define('ProductCatalog.Lifecycle.store.Product_Status', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	storeId: 'ProductCatalog.Lifecycle.store.Product_Status',
        	fields: ['name', 'value'],
            data: [
                {
                    name: 'Editing',
                    value:'Editing',
                },
                {
                    name: 'Requested',
                    value:'Requested',
                },
                {
                    name: 'Rejected',
                    value:'Rejected',
                },
                {
                    name: 'Approved',
                    value:'Approved',
                },
                {
                    name: 'Activated',
                    value:'Activated',
                },
                {
                    name: 'Deactivated',
                    value:'Deactivated',
                },
                {
                    name: 'Deprecated',
                    value:'Deprecated',
                },
                {
                    name: 'Closed',
                    value:'Closed',
                },
            ]
        }, cfg)]);
    }
});