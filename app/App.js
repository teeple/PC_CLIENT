/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('ProductCatalog.App', {
    extend: 'Ext.ux.desktop.App',

    requires: [
        //'Ext.window.MessageBox',

        'Ext.ux.desktop.ShortcutModel',

        'ProductCatalog.AccordionWindow',
        'ProductCatalog.Notepad',

        'ProductCatalog.Login.controller.LoginWindow',

        'ProductCatalog.DesignerWindow',
        'ProductCatalog.PromotionWindow',
        'ProductCatalog.RelationWindow',
        'ProductCatalog.LifecycleWindow',

    ],

    init: function() {
        // custom logic before getXYZ methods get called...

        this.callParent();

        // now ready...
//        var login = new ProductCatalog.Login.controller.LoginWindow();
//
//        login.showLoginPrompt();
    },

    getModules : function(){
        return [
            new ProductCatalog.DesignerWindow(),
            new ProductCatalog.PromotionWindow(),
            new ProductCatalog.RelationWindow(),
            new ProductCatalog.LifecycleWindow(),

            new ProductCatalog.AccordionWindow(),
            new ProductCatalog.Notepad(),

        ];
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
//                { text: 'Change Settings', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [
                    { name: 'Product Designer', iconCls: 'designer-shortcut', module: 'designer-win'},
                    { name: 'Promotion Designer', iconCls: 'promotion-shortcut', module: 'promotion-win'},
                    { name: 'Relation Manager', iconCls: 'relation-shortcut', module: 'relation-win'},
                    { name: 'Lifecycle Manager', iconCls: 'lifecycle-shortcut', module: 'lifecycle-win'},
                    { name: 'Member Manager', iconCls: 'accordion-shortcut', module: 'acc-win' },
                    { name: 'Help', iconCls: 'notepad-shortcut', module: 'notepad' },
                ]
            }),

            wallpaper: 'resources/wallpapers/Blue-Sencha.jpg',
            wallpaperStretch: false
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Product Catalog',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
//                    {
//                        text:'Settings',
//                        iconCls:'settings',
//                        handler: me.onSettings,
//                        scope: me
//                    },
//                    '-',
                    {
                        text:'Logout',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [
				{ name: 'Product Designer', iconCls: 'designer', module: 'designer-win' },
                { name: 'Product Validator', iconCls: 'validator', module: 'validator-win' }
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    onLogout: function () {
        Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
    },

    onSettings: function () {
        var dlg = new ProductCatalog.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }

});

