Ext.define('ProductCatalog.LifecycleWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'ProductCatalog.Lifecycle.view.MainPanel'
    ],

    id:'lifecycle-win',

    init : function(){
        this.launcher = {
            text: 'Lifecycle Manager',
            iconCls:'designer',
            handler : this.createWindow,
            scope: this
        };
    },

    createWindow : function(){

        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('lifecycle-win');

        if (!win) {

            win = desktop.createWindow({
                id: 'lifecycle-win',
                title: 'Product Lifecycle',
                width: 900,
                height: 600,
//                iconCls: 'accordion',
                animCollapse: false,
                constrainHeader: true,
                bodyBorder: true,
                layout:'fit',
                items: [
                        {
                        	xtype:'Lifecycle.MainPanel'
                        }
                ]
            });
        }

        win.show();
        return win;
    },
});

