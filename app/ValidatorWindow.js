Ext.define('ProductCatalog.ValidatorWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'ProductCatalog.Validator.view.MainPanel'
    ],

    id:'validator-win',

    init : function(){
        this.launcher = {
            text: 'Product Validator',
            iconCls:'validator',
            handler : this.createWindow,
            scope: this
        };
    },

    createWindow : function(){

        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('validator-win');

        if (!win) {

            win = desktop.createWindow({
                id: 'validator-win',
                title: 'Product Validator',
                width: 800,
                height: 600,
//                iconCls: 'accordion',
                animCollapse: false,
                constrainHeader: true,
                bodyBorder: true,
                layout:'fit',
                items: [
                        {
                        	xtype:'ValidatorMainPanel'
                        }
                ]
            });
        }

        win.show();
        return win;
    },
});

