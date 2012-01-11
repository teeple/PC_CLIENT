Ext.define('ProductCatalog.Lifecycle.view.TabPanel_Manager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Lifecycle.TabPanel_Manager',
    id:'Lifecycle.TabPanel_Manager',
    title: 'Lifecycle Manager',
    requires: [
               'ProductCatalog.Lifecycle.store.TabPanel_Manager_History',
               'ProductCatalog.Lifecycle.store.Product_Status',
    ],
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	defaults:{
        		margin: 10
        	},
            items: [
               {
                   xtype: 'label',
                   text: 'Status Change History',
               },
               {
            	   xtype:'gridpanel',
            	   store: 'ProductCatalog.Lifecycle.store.TabPanel_Manager_History',
                   forceFit: true,
                   flex: 8,
                   columns: [
	                   {
	                       text: 'Name',
	                       dataIndex: 'name'
	                   },
	                   {
	                       text: 'before',
	                       dataIndex: 'before'
	                   },
	                   {
	                       text: 'after',
	                       dataIndex: 'after'
	                   },
	                   {
	                       text: 'user',
	                       dataIndex: 'user'
	                   },
	                   {
	                       text: 'date',
	                       dataIndex: 'date'
	                   },
                   ],
               },
               {
                   xtype: 'panel',
                   flex: 1,
                   layout: {
                       align: 'middle',
                       type: 'hbox'
                   },
                   titleCollapse: true,
                   frame:true,
                   flex: 1,
                   items: [
                       {
                           xtype: 'combobox',
                           labelWidth: 150,
                           fieldLabel: 'Change status to ',
                           store:'ProductCatalog.Lifecycle.store.Product_Status',
                           displayField: 'name',
                           valueField: 'value',
                           flex: 2
                       },
                       {
                           xtype: 'button',
                           text: 'Apply',
                           margin: '0 0 0 10'
                       }
                   ]
               }
            ]
        });
        me.callParent(arguments);
    }

});
