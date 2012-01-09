Ext.define('ProductCatalog.Designer.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.DesignerMainPanel',
    requires: [
        'ProductCatalog.Designer.view.ToolBar',
        'ProductCatalog.Designer.view.ToolBox',
        'ProductCatalog.Designer.view.TabPanel'
    ],

    id:'DesignerMainPanel',

    activeItem: 0,
    layout: {
        type: 'border'
    },
//    title: 'Product Catalog',
    titleCollapse: true,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'ToolBar',
                    region: 'north'
                },
                {
                    xtype: 'ToolBox',
                    region: 'west'
                },
                {
                    xtype: 'TabPanel',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }
});
