Ext.define('ProductCatalog.MemberWindow', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'ProductCatalog.Member.view.MainPanel'
    ],

    id:'member-win',

    init : function(){
        this.launcher = {
            text: 'Member Manager',
            iconCls:'designer',
            handler : this.createWindow,
            scope: this
        };
    },

    createWindow : function(){

        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('member-win');

        if (!win) {

            win = desktop.createWindow({
                id: 'member-win',
                title: 'Member Manager',
                width: 1024,
                height: 600,
//                iconCls: 'accordion',
                animCollapse: false,
                constrainHeader: true,
                bodyBorder: true,
                layout:'fit',
                items: [
                        {
                        	xtype:'Member.MainPanel'
                        }
                ]
            });
        }

        win.show();
        return win;
    },
});

