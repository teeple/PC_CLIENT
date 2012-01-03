Ext.define('ProductCatalog.Designer.view.TabPanel_Product_ActionDeduct', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.TabPanel_Product_ActionDeduct',
    id:'TabPanel_Product_ActionDeduct',

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Detail Info - ActionDeduct',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'My Fields',
                    items: [
                        {
                        	id:'code',
                            xtype: 'textfield',
                            fieldLabel: 'Code',
                            anchor: '100%'
                        },
                        {
                        	id:'name',
                            xtype: 'textfield',
                            fieldLabel: 'Name',
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    height: 250,
                    width: 400,
                    title: 'My Grid Panel',
//                    store: 'ProductCatalog.Designer.store.TabPanel_Product_ActionDeduct',
                    columns: [
//                        {
//                            xtype: 'gridcolumn',
//                            dataIndex: 'string',
//                            text: 'String'
//                        },
//                        {
//                            xtype: 'numbercolumn',
//                            dataIndex: 'number',
//                            text: 'Number'
//                        },
//                        {
//                            xtype: 'datecolumn',
//                            dataIndex: 'date',
//                            text: 'Date'
//                        },
//                        {
//                            xtype: 'booleancolumn',
//                            dataIndex: 'bool',
//                            text: 'Boolean'
//                        }
                    ],
                    viewConfig: {

                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    mapper: function(record) {
    	var me = this;

    	var codeComponent = Ext.ComponentQuery.query('#TabPanel_Product_ActionDeduct #code')[0];
    	codeComponent.setValue(record.code);
    	var nameComponent = Ext.ComponentQuery.query('#TabPanel_Product_ActionDeduct #name')[0];
    	nameComponent.setValue(record.name);

        var columns = [];

        var headers = Ext.Object.getValues(record.header_deducts);

        for(var i=0; i < headers.length; i++) {

    		console.log(headers[i]);

    		var element = {
    			xtype: 'gridcolumn',
    			dataIndex: headers[i].toLowerCase(),
    			text: headers[i]
    		};

    		columns[i] = element;
    	}

        var gridComponent = Ext.ComponentQuery.query('#TabPanel_Product_ActionDeduct gridpanel')[0];
//        gridComponent.columns = columns;

//    	for(var i=0; i < me.items.length; i++) {
//    		element = me.items.items[i];
//    		console.log(element);
//    		element.setValue(record['data']['prd_attribute'][element.id]);
//    	}
    }
});
