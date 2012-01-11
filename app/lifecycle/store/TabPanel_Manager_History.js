Ext.define('ProductCatalog.Lifecycle.store.TabPanel_Manager_History', {
    extend: 'Ext.data.Store',

    requires: [
               'ProductCatalog.Lifecycle.model.TabPanel_Manager_History',
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	storeId: 'ProductCatalog.Lifecycle.store.TabPanel_Manager_History',
            model: 'ProductCatalog.Lifecycle.model.TabPanel_Manager_History',
            data: [
                {
                    name: 'Product Example 1',
                    before:'Deactivated',
                    after:'Activated',
                    user:'james',
                    date:'2012-01-05 10:00:00'
                },
                {
                    name: 'Product Example 1',
                    before:'Activated',
                    after:'Deactivated',
                    user:'realjangsun',
                    date:'2012-01-04 10:00:00'
                },
                {
                    name: 'Product Example 1',
                    before:'Approved',
                    after:'Activated',
                    user:'youngmin',
                    date:'2012-01-03 10:00:00'
                },
                {
                    name: 'Product Example 1',
                    before:'Requested',
                    after:'Approved',
                    user:'james',
                    date:'2012-01-02 10:00:00'
                },
                {
                    name: 'Product Example 1',
                    before:'Editing',
                    after:'Requested',
                    user:'realjangsun',
                    date:'2012-01-01 10:00:00'
                },
            ]
        }, cfg)]);
    }
});