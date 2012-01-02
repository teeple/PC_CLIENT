Ext.define('ProductCatalog.Designer.view.TabPanel_Product', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.TabPanel_Product',
    id:'TabPanel_Product',
    title: 'Product',

    requires: [
        'ProductCatalog.Designer.view.TabPanel_Product_Attribute'
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
                    xtype: 'treepanel',
                    frameHeader: false,
                    useArrows: true,
                    title: '',
                    titleCollapse: true,
                    flex: 6,
                    region: 'center',
                    storeId: 'ProductCatalog.Designer.store.TabPanel_Product',
                    viewConfig: {

                    },
                    margin: '3px'
                },
                {
                	xtype: 'panel',
                    height: 377,
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