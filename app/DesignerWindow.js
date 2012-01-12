Ext.define('ProductCatalog.DesignerWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'ProductCatalog.Designer.view.MainPanel'
    ],

    id:'designer-win',

    init : function(){
        this.launcher = {
            text: 'Product Designer',
            iconCls:'designer',
            handler : this.createWindow,
            scope: this
        };
    },

    createWindow : function(){

        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('designer-win');

        if (!win) {
//        	var productWindow = new ProductCatalog.Designer.view.ProductWindow();
//        	console.log(productWindow);
//        	win = new ProductCatalog.Designer.view.ProductWindow();

            win = desktop.createWindow({
                id: 'designer-win',
                title: 'Product Designer',
                width: 1024,
                height: 800,
//                iconCls: 'accordion',
//                maximized: true,
                animCollapse: false,
                constrainHeader: true,
                bodyBorder: true,
                layout:'fit',
                items: [
                        {
                        	xtype:'DesignerMainPanel'
                        }
                ],
                listeners: {
                    'activate': function() {
                    	Ext.getCmp('designer-win').maximize();
                    },
                    'afterrender': function() {
                    	Ext.getCmp('designer-win').maximize();
                    }
                }
            });
        }

        win.show();

        return win;
    },

    /*createProductWindow:function(){
    	return new ProductCatalog.Designer.view.ProductWindow();
    }*/
});

