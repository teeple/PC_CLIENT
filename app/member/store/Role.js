Ext.define('ProductCatalog.Member.store.Role', {
    extend: 'Ext.data.Store',
    requires:[
              'ProductCatalog.Member.model.Role',
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	proxy:'memory',
        	model:'ProductCatalog.Member.model.Role',
            data: [
		        {
		            id: '1',
		            name: 'admin',
		            description:'administrator role',
		        },
		        {
		            id: '2',
		            name: 'operator',
		            description:'operator role',
		        },
		        {
		            id: '3',
		            name: 'agent',
		            description:'agent role',
		        }
            ]
        }, cfg)]);
    }
});