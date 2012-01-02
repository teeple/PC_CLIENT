Ext.define('ProductCatalog.Designer.view.TabPanel_Product_Attribute', {
    extend: 'Ext.form.Panel',
    alias: 'widget.TabPanel_Product_Attribute',
    id:'TabPanel_Product_Attribute',
    layout: {
        type: 'vbox',
        align:'stretch',
        pack:'start'
    },
    bodyPadding: 10,
    title: 'Detail',

    initComponent: function(record) {
        var me = this;

        console.log(record);

        Ext.applyIf(me, {
            items: [
                {
                	id:'name',
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    anchor: '100%',
                },
                {
                	id:'prd_type',
                    xtype: 'combobox',
                    fieldLabel: 'Product Type',
                    anchor: '100%'
                },
                {
                	id:'bill_type',
                    xtype: 'combobox',
                    fieldLabel: 'Bill Type',
                    anchor: '100%'
                },
                {
                	id:'code',
                    xtype: 'textfield',
                    fieldLabel: 'Code',
                    anchor: '100%'
                },
                {
                	id:'description',
                    xtype: 'textfield',
                    fieldLabel: 'Description',
                    anchor: '100%'
                },
                {
                	id:'start_date',
                    xtype: 'datefield',
                    fieldLabel: 'Start Date',
                    anchor: '100%'
                },
                {
                	id:'end_date',
                    xtype: 'datefield',
                    fieldLabel: 'End Date',
                    anchor: '100%'
                },
                {
                	id:'service_type',
                    xtype: 'combobox',
                    width: 509,
                    fieldLabel: 'Service Type',
                    anchor: '100%'
                },
                {
                	id:'status',
                    xtype: 'combobox',
                    fieldLabel: 'Status',
                    anchor: '100%'
                }
            ]
        });

        me.callParent(arguments);
    },

    mapper: function(record) {
    	var me = this;

    	for(var i=0; i < me.items.length; i++) {
    		element = me.items.items[i];
    		console.log(element);
    		element.setValue(record['data']['prd_attribute'][element.id]);
    	}
    }
});
