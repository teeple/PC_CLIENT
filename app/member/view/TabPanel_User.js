Ext.define('ProductCatalog.Member.view.TabPanel_User', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Member.TabPanel_User',
    id:'TabPanel_User',
    title: 'User',

    initComponent: function() {
        var me = this;

        var myStore = Ext.create('Ext.data.Store', {
        	proxy:'memory',
        	fields:[
	           {name: 'id'},
	           {name: 'name'},
	           {name: 'email'},
	           {name: 'phonenumber'},
	           {name: 'role'},
	        ],
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
		            phonenumber:'8200010002',
		            role:'operator',
		        },
		        {
		            id: 'james',
		            name: 'Jame lee',
		            email:'jameslee@yourock.com',
		            phonenumber:'8200010003',
		            role:'agent',
		        },
            ]
        });

        Ext.applyIf(me, {
            items: [
                {
                	xtype: 'gridpanel',
                    frameHeader: false,
                    forceFit:true,
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'id',
                            text: 'ID'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            text: 'Name'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'email',
                            text: 'Email'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'phonenumber',
                            text: 'Phone Number'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'role',
                            text: 'Role'
                        },
                    ],
                    viewConfig: {

                    },
                    dockedItems: [
	                      {
	                          xtype: 'toolbar',
	                          dock: 'top',
	                          items: [
	                              {
	                                  xtype: 'button',
	                                  text: 'Add',
	                                  iconCls:'icon-add',
	                              },
	                              {
	                                  xtype: 'button',
	                                  text: 'Delete',
	                                  iconCls:'icon-delete',
	                              }
	                          ]
	                      }
	                  ],
	                  store:myStore
                }
            ],


        });

        me.callParent(arguments);
    }
});
