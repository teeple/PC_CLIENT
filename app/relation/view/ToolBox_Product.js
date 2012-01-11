Ext.define('ProductCatalog.Relation.view.ToolBox_Product', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Relation.ToolBox_Product',
    id: 'Relation_ToolBox_Product',

    height: '100%',
    width: '100%',

    requires:[
        'Ext.ux.LiveSearchGridPanel'
    ],

    collapsed: false,
    title: 'Product',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        var gridPanel = Ext.create('Ext.ux.LiveSearchGridPanel', {
            title: 'Product List',
            forceFit: true,
            store: 'ProductCatalog.Relation.store.ToolBox_Product',
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Product Type',
                    dataIndex: 'prd_type',
                    renderer: function(value) {

                        var icon_image;
                        switch(value) {
                            case 'basic':
                                icon_image = '<img src=http://cdn1.iconfinder.com/data/icons/orb/16/5.png> ' + value;
                            case 'packaged':
                                icon_image = '<img src=http://cdn1.iconfinder.com/data/icons/fatcow/16x16_0600/package.png> ' + value;
                            case 'bundle': 
                                icon_image = '<img src=http://cdn1.iconfinder.com/data/icons/basicset/present_16.png> ' + value;
                        }
                        return icon_image;
                    }
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Name',
                    dataIndex: 'name',
                    renderer: function(value) {
                        return value;
                    }
                }
            ],
            viewConfig: {
                stripeRows: true,
                plugins: {
                    ddGroup: 'ddGroup',
                    ptype: 'gridviewdragdrop',
                    enableDrop: false
                }
            }
        });

        Ext.applyIf(me, {
            items: [
                gridPanel
            ]
        });

        me.callParent(arguments);
    }
});

