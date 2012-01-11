Ext.define('ProductCatalog.RelationWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'ProductCatalog.Relation.view.MainPanel'
    ],

    id:'relation-win',

    init : function(){
        this.launcher = {
            text: 'Relation Manager',
            iconCls:'designer',
            handler : this.createWindow,
            scope: this
        };
    },

    createWindow : function(){

        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('relation-win');

        if (!win) {

            win = desktop.createWindow({
                id: 'relation-win',
                title: 'Relation Manager',
                width: 800,
                height: 600,
//                iconCls: 'accordion',
                animCollapse: false,
                constrainHeader: true,
                bodyBorder: true,
                layout:'fit',
                items: [
                        {
                        	xtype:'Relation.MainPanel'
                        }
                ]
            });
        }

        win.show();
        return win;
    },
});

