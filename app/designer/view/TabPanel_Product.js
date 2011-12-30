Ext.define('ProductCatalog.Designer.view.TabPanel_Product', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.TabPanel_Product',
    id:'TabPanel_Product',
    title: 'Product',

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
                    flex: 2,
                    region: 'center',
                    storeId: 'ProductCatalog.Designer.store.TabPanel_Product',
                    viewConfig: {

                    },
                    margin: '3px'
                },
                {
                    xtype: 'fieldset',
                    height: 377,
                    title: 'Detail',
                    flex: 1,
                    margin: '3px'
                }
            ]
        });
        me.callParent(arguments);
    }

});