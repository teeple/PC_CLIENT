Ext.define('ProductCatalog.Member.view.TabPanel_Role', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Member.TabPanel_Role',
    id:'TabPanel_Role',
    title: 'Role',
    layout:{
    	type:'hbox'
    },
    initComponent: function() {
        var me = this;

        Ext.define('ProductCatalog.Member.Role', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'id'},
				{name: 'name'},
				{name: 'description'}
            ]
        });

        var myStore = Ext.create('Ext.data.Store', {
        	proxy:'memory',
        	model:'ProductCatalog.Member.Role',
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
	                                	  myStore.insert(0, {});
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

                },
                {
                	xtype: 'form',
                    flex:1,
//                    margin: '0px 0px 0px 10px',
                    padding: '0px 0px 0px 10px',
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
