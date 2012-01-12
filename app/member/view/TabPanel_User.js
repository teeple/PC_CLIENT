Ext.define('ProductCatalog.Member.view.TabPanel_User', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Member.TabPanel_User',
    id:'Member.TabPanel_User',
    title: 'User',

    requires:[
              'ProductCatalog.Member.model.TabPanel_User',
    ],

    initComponent: function() {
        var me = this;

//        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
        });

        Ext.applyIf(me, {
        	defaults:{
        		margin: 10
        	},
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
	                                	  var store = Ext.ComponentQuery.query('#Member.TabPanel_User > gridpanel')[0].store;
	                                	  store.insert(0, {});
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
	                                      var store = Ext.ComponentQuery.query('#Member.TabPanel_User > gridpanel')[0].store;
	                                      store.remove(sm.getSelection());
	                                      if (store.getCount() > 0) {
	                                          sm.select(0);
	                                      }
	                                  }
	                              }
	                          ]
	                      }
	                  ],
	                  store:'ProductCatalog.Member.store.TabPanel_User',
	                  plugins: [rowEditing],

                }
            ],


        });

        me.callParent(arguments);
    }
});
