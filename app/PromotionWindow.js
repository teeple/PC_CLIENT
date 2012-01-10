Ext.define('ProductCatalog.PromotionWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'ProductCatalog.Promotion.view.MainPanel'
    ],

    id:'promotion-win',

    init : function(){
        this.launcher = {
            text: 'Promotion Designer',
            iconCls:'designer',
            handler : this.createWindow,
            scope: this
        };
    },

    createWindow : function(){

        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('promotion-win');

        if (!win) {

            win = desktop.createWindow({
                id: 'promotion-win',
                title: 'Product Promotion',
                width: 800,
                height: 600,
//                iconCls: 'accordion',
                animCollapse: false,
                constrainHeader: true,
                bodyBorder: true,
                layout:'fit',
                items: [
                        {
                        	xtype:'PromotionMainPanel'
                        }
                ]
            });
        }

        win.show();
        return win;
    },
});

