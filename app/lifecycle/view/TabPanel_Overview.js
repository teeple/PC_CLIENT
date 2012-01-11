Ext.define('ProductCatalog.Lifecycle.view.TabPanel_Overview', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Lifecycle.TabPanel_Overview',
    id:'Lifecycle.TabPanel_Overview',
    title: 'Status Overview',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
               {
                    html:'<img src="http://newbiz.uangel.com/pc/wp-content/uploads/2012/01/lifecycle.jpg"/>',
                    width:438,
                    height:287
               }
            ]
        });
        me.callParent(arguments);
    }

});
