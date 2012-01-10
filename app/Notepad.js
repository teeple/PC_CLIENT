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

Ext.define('ProductCatalog.Notepad', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        // 'Ext.form.field.HtmlEditor'
        // Ext.form.field.TextArea'
    ],

    id:'notepad',

    init : function(){
        this.launcher = {
            text: 'Guide',
            iconCls:'notepad',
            handler : this.createWindow,
            scope: this
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('notepad');
        if(!win){
            win = desktop.createWindow({
                id: 'notepad',
                title:'Notepad',
                width:600,
                height:400,
                iconCls: 'notepad',
                animCollapse:false,
                border: false,
                //defaultFocus: 'notepad-editor', EXTJSIV-1300

                // IE has a bug where it will keep the iframe's background visible when the window
                // is set to visibility:hidden. Hiding the window via position offsets instead gets
                // around this bug.
                hideMode: 'offsets',

                layout: 'fit',
                items: [
                {
                    xtype: 'panel',
                    height: 509,
                    width: 687,
                    layout: {
                    align: 'stretch',
                           type: 'hbox'
                    },
                    title: 'Guide',
                        items: [
                        {
                            xtype: 'treepanel',
                           title: 'My Tree Panel',
                           flex: 2,
                           viewConfig: {
                           }
                        },
                        {
                           xtype: 'panel',
                           layout: {
                                align: 'stretch',
                                type: 'hbox'
                           },
                           title: 'My Panel',
                           flex: 5,
                           items: [
                            {
                                xtype: 'dataview',
                                tpl: Ext.create('Ext.XTemplate', 
                                   '<tpl for="."><div>Template</div></tpl>'
                                   ),
                                itemSelector: 'div',
                                flex: 1
                            }
                           ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    title: 'API',
                    items: [
                    {
                        xtype: 'treepanel',
                        width: 269,
                        title: 'My Tree Panel',
                        flex: 2,
                        viewConfig: {
                        }
                        },
                        {
                        xtype: 'panel',
                        layout: {
                            align: 'stretch',
                            type: 'hbox'
                        },
                        title: 'My Panel',
                        flex: 5,
                        items: [
                            {
                            xtype: 'dataview',
                            tpl: Ext.create('Ext.XTemplate', 
                               '<tpl for="."><div>Template</div></tpl>'
                            ),
                            itemSelector: 'div',
                            flex: 1
                        }
                       ]
                       }
                    ]
                }
                ]
            });
        }
        win.show();
        return win;
    }
});

