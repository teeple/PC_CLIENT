Ext.define('ProductCatalog.Designer.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.DesignerMainPanel',
    requires: [
        'ProductCatalog.Designer.view.ToolBar',
        'ProductCatalog.Designer.view.ToolBox',
        'ProductCatalog.Designer.view.TabPanel'
    ],

    id:'MainPanel',
    height: 836,
    width: 1396,
    activeItem: 0,
    layout: {
        type: 'border'
    },
    title: 'UANGEL Product Catalog',

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