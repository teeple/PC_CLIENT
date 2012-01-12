Ext.define('ProductCatalog.Member.view.TabPanel_RolePermission', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Member.TabPanel_RolePermission',
    id:'Member.TabPanel_RolePermission',
    title: 'Role And Permission',
    layout:{
    	type:'hbox'
    },
    requires:[
              'ProductCatalog.Member.model.Role'
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
                    flex:1,
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
                            dataIndex: 'description',
                            text: 'Description',
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
	                                	  var store = Ext.ComponentQuery.query('#Member.TabPanel_RolePermission > gridpanel')[0].store;
	                                	  store.insert(0, {});
	                                      rowEditing.startEdit(0, 0);
	                                  }
	                              },'-',
	                              {
	                            	  xtype: 'button',
	                                  text: 'Delete',
	                                  iconCls:'icon-delete',
	                                  handler: function() {
	                                	  var sm = me.items.items[0].getSelectionModel();
	                                      rowEditing.cancelEdit();
	                                      var store = Ext.ComponentQuery.query('#Member.TabPanel_RolePermission > gridpanel')[0].store;
	                                      store.remove(sm.getSelection());
	                                      if (store.getCount() > 0) {
	                                          sm.select(0);
	                                      }
	                                  }
	                              }
	                          ]
	                      }
	                  ],
	                  store:'ProductCatalog.Member.store.Role',
	                  plugins: [rowEditing],

                },
                {
                	xtype: 'form',
                    flex:1,
                    frame:true,
                    defaults:{
                    	margin: 10,
                    	labelWidth: 200
                    },
                    items: [{
                                xtype: 'label',
                                text: 'Product Desginer',
                                anchor: '100%'
                            },

                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Editing',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Requested',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Activated',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Deprecated',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Closed',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Conditions',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Actions',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Balances',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Charging Items',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Promotion Designer',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Relation Manager',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Lifecycle Manager',
                                boxLabel: '',
                                anchor: '100%'
                            },
                            {
                                xtype: 'checkboxfield',
                                fieldLabel: 'Member Manager',
                                boxLabel: '',
                                anchor: '100%'
                            }
                        ]
                },
            ],
        });

        me.callParent(arguments);
    }
});
