Ext.define('ProductCatalog.Designer.view.TabPanel_Product', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.TabPanel_Product',
    id:'TabPanel_Product',
    title: 'Product',

    requires: [
        'ProductCatalog.Designer.view.TabPanel_Product_Attribute',
        'ProductCatalog.Designer.view.TabPanel_Product_ActionDeduct'
    ],

    layout: {
    	align: 'stretch',
    	type: 'hbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 6,
                    region: 'center',
                    margin: '3px',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'treepanel',
                            frameHeader: false,
                            useArrows: true,
                            title: '',
                            titleCollapse: true,

                            storeId: 'ProductCatalog.Designer.store.TabPanel_Product',
                            viewConfig: {

                            },
                        },
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                               dock: 'top',
                               items: [
                               {
                    	   			xtype: 'button',
                    	   			text: 'Validate It!',
                    	   			iconCls:'icon-validate'
                               }
                               ]
                        }
                   ]
                },
                {
                	xtype: 'panel',
                	flex: 4,
                    layout: {
                        type: 'fit',
                    },
                    margin: '3px'
                }
            ]
        });
        me.callParent(arguments);
    }

});
