Ext.define('ProductCatalog.DesignerWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'ProductCatalog.Designer.view.MainPanel'
    ],

    id:'designer-win',

    init : function(){
        this.launcher = {
            text: 'Product Designer',
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
                height: 500,
//                iconCls: 'accordion',
                animCollapse: false,
                constrainHeader: true,
                bodyBorder: true,
                layout:'fit',
                items: [
                        {
                        	xtype:'DesignerMainPanel'
                        }
                ]
            });
        }

        win.show();
        return win;
    },

    /*createProductWindow:function(){
    	return new ProductCatalog.Designer.view.ProductWindow();
    }*/
});

