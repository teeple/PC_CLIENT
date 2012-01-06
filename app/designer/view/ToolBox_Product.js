Ext.define('ProductCatalog.Designer.view.ToolBox_Product', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ToolBox_Product',
    id: 'ToolBox_Product',

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

        // create the Grid, see Ext.
        var gridPanel = Ext.create('Ext.ux.LiveSearchGridPanel', {
        	title: 'Product List',
            forceFit: true,
            store: 'ProductCatalog.Designer.store.ToolBox_Product',
            columnLines: true,
            columns: [
				{
				    xtype: 'gridcolumn',
				    text: 'Product Type',
				    dataIndex: 'prd_type',
				    //resizable: true,
				    renderer: function(value) {
				    	if(value == 'basic'){
				        	return '<img src=http://cdn1.iconfinder.com/data/icons/orb/16/5.png>  ' + value;
				    	}else if(value == 'packaged'){
				    		return '<img src=http://cdn3.iconfinder.com/data/icons/fatcow/16x16_0600/package.png>  ' + value;
				    	}else if(value == 'bundle'){
				    		return '<img src=http://cdn2.iconfinder.com/data/icons/basicset/present_16.png>  ' + value;
				    	}
				    }
				},
	            {
	                xtype: 'gridcolumn',
	                text: 'Name',
	                dataIndex: 'name',
	                //resizable: true,
	                renderer: function(value) {
	                    //return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
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
    },
});