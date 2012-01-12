Ext.define('ProductCatalog.Member.store.TabPanel_User', {
    extend: 'Ext.data.Store',
    requires:[
              'ProductCatalog.Member.model.TabPanel_User',
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	proxy:'memory',
        	model:'ProductCatalog.Member.model.TabPanel_User',
            data: [
		        {
		            id: 'realjangsun',
		            name: 'Sun Jang',
		            email:'realjangsun@uangel.com',
		            phonenumber:'821000010001',
		            role:'administrator',
		        },
		        {
		            id: 'youngmin',
		            name: 'Youngmin Kim',
		            email:'youngmin@uangel.com',
		            phonenumber:'821000010002',
		            role:'operator',
		        },
		        {
		            id: 'james',
		            name: 'Jame lee',
		            email:'jameslee@yourock.com',
		            phonenumber:'821000010003',
		            role:'agent',
		        },
            ]
        }, cfg)]);
    }
});