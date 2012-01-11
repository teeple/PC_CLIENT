Ext.define('ProductCatalog.Member.view.TabPanel_User', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Member.TabPanel_User',
    id:'TabPanel_User',
    title: 'User',

    initComponent: function() {
        var me = this;

        Ext.define('ProductCatalog.Member.User', {
            extend: 'Ext.data.Model',
            fields: [
				{name: 'id'},
				{name: 'name'},
				{name: 'email'},
				{name: 'phonenumber'},
				{name: 'role'},
            ]
        });

        var myStore = Ext.create('Ext.data.Store', {
        	proxy:'memory',
        	model:'ProductCatalog.Member.User',
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
        });

//        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
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
                            text: 'ID',
                            editor: {
                                allowBlank: false
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            text: 'Name',
                            editor: {
                                allowBlank: false
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'email',
                            text: 'Email',
                            editor: {
                                allowBlank: false
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'phonenumber',
                            text: 'Phone Number',
                            editor: {
                                allowBlank: false
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'role',
                            text: 'Role',
                            editor: {
                                allowBlank: false
                            }
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
	                                  handler: function(){
	                                      // empty record
	                                	  myStore.insert(0, {});
	                                      rowEditing.startEdit(0, 0);
	                                  }
	                              },'-',
	                              {
	                            	  itemId: 'removeUser',
	                                  xtype: 'button',
	                                  text: 'Delete',
	                                  iconCls:'icon-delete',
	                                  handler: function() {
	                                	  var sm = me.items.items[0].getSelectionModel();
	                                      rowEditing.cancelEdit();
	                                      myStore.remove(sm.getSelection());
	                                      if (myStore.getCount() > 0) {
	                                          sm.select(0);
	                                      }
	                                  }
	                              }
	                          ]
	                      }
	                  ],
	                  store:myStore,
	                  plugins: [rowEditing],

                }
            ],


        });

        me.callParent(arguments);
    }
});
