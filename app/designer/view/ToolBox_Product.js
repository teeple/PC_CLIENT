Ext.define('ProductCatalog.Designer.view.ToolBox_Product', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ToolBox_Product',
    id: 'ToolBox_Product',

    height: '100%',
    width: '100%',

    collapsed: false,
    title: 'Product',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
	                 // Grid view testing
	                {
	                	xtype: 'gridpanel',
	                    title: 'Product List',
	                    forceFit: true,
	                    store: 'ProductCatalog.Designer.store.ToolBox_Product',
	                    viewConfig: {
	                        plugins: {
	                            ddGroup: 'ddGroup',
	                            ptype: 'gridviewdragdrop',
	                            enableDrop: false
	                        }
	                    },

	                    columns: [
							{
							    xtype: 'gridcolumn',
							    text: 'Product Type',
							    dataIndex: 'prd_type',
							    //resizable: true,
							    renderer: function(value) {
							    	if(value == 'basic'){
							        	return '<img src=http://cdn1.iconfinder.com/data/icons/orb/16/5.png>&nbsp;&nbsp;' + value;
							    	}else if(value == 'packaged'){
							    		return '<img src=http://cdn3.iconfinder.com/data/icons/fatcow/16x16_0600/package.png>&nbsp;&nbsp;' + value;
							    	}else if(value == 'bundle'){
							    		return '<img src=http://cdn2.iconfinder.com/data/icons/basicset/present_16.png>&nbsp;&nbsp;' + value;
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
	                    ]
	                }

            ]
        });

        me.callParent(arguments);
    },
});