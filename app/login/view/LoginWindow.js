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
/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.define('ProductCatalog.Login.view.LoginWindow', {
    extend: 'Ext.form.Panel',

    id:'loginWindow',
    floating: true,
    centered: true,
    modal: true,
    draggable: false,

    height: 164,
    width: 298,
    layout: {
        type: 'fit'
    },
    bodyPadding: 10,
    title: 'Login',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 172,
                    width: 388,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    preventHeader: true,
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Id',
                            labelWidth: 80,
                            flex: 1
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            fieldLabel: 'Password',
                            labelWidth: 80,
                            flex: 1
                        },
                        {
                            xtype: 'panel',
                            border: '',
                            layout: {
                                align: 'stretch',
                                padding: 0,
                                type: 'hbox'
                            },
                            preventHeader: true,
                            title: 'My Panel',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'button',
                                    margin: '0 10 0 10',
                                    padding: '',
                                    iconAlign: 'top',
                                    text: 'OK',
                                    flex: 1,
                                },
                                {
                                    xtype: 'button',
                                    margin: '0 10 0 10',
                                    text: 'Clear',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});
