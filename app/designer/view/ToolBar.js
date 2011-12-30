Ext.define('ProductCatalog.Designer.view.ToolBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.ToolBar',

    id: 'ToolBar',
    height: 30,
    width: 411,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                	id:'ToolBar_Relation_Button',
                	xtype: 'button',
                    text: 'Relation'
                },
                {
                	id:'ToolBar_Product_Button',
                    xtype: 'button',
                    text: 'Product'
                },
                {
                	id:'ToolBar_Conditions_Button',
                    xtype: 'button',
                    text: 'Conditions'
                },
                {
                	id:'ToolBar_Actions_Button',
                    xtype: 'button',
                    text: 'Actions'
                },
                {
                	id:'ToolBar_Balance_Button',
                    xtype: 'button',
                    text: 'Balance'
                },
                {
                	id:'ToolBar_VAS_Button',
                    xtype: 'button',
                    text: 'VAS'
                },
                {
                	id:'ToolBar_ETC_Button',
                    xtype: 'button',
                    text: 'ETC'
                }
            ]
        });

        me.callParent(arguments);
    }
});