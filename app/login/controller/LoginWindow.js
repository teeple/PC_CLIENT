/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.define('ProductCatalog.Login.controller.LoginWindow', {
	extend: 'Ext.app.Controller',

	requires:[
	     'ProductCatalog.Login.view.LoginWindow'
	],
//	views:[
//		     'ProductCatalog.Login.view.LoginWindow'
//	],
	init: function() {
		var me = this;

		this.control({
			'#loginWindow button': {
				click: this.menuClicked
			}
		});
	},

	menuClicked: function(button) {
		var me = this;
		console.log('HERE');
		Ext.getCmp('loginWindow').destroy();
	},

	showLoginPrompt:function(){
		var me = this;
		new ProductCatalog.Login.view.LoginWindow().show();
	}

});
