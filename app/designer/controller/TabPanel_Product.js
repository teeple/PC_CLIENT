Ext.define('ProductCatalog.Designer.controller.TabPanel_Product', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'#TabPanel_Product > treepanel': {
				readproduct: this.readproduct
			}
		});
	},

	readproduct: function(product){
		//reset tree store
		var treeStore = Ext.ComponentQuery.query('#TabPanel_Product > treepanel')[0].store;
		if(treeStore.tree.root != null){
			treeStore.removeAll();
		}

		//masking main panel
		var mainPanel = Ext.ComponentQuery.query('#MainPanel')[0];
		mainPanel.mask.bindStore(treeStore);
		mainPanel.mask.show();

		//read product info
		Ext.Ajax.request({
			url : '/products/' + product.id + '.json',
			method : 'GET',
			params : null,
			success : function(response) {
				var jsonData = Ext.JSON.decode(response.responseText);
				console.log(jsonData);

				//set each sub information variable
				var prd_attribute 			= jsonData.prd_attribute;
				var prd_subscriptions 		= jsonData.prd_subscriptions;
				var prd_tariffs 			= jsonData.prd_tariffs;
				var prd_balances 			= jsonData.prd_balances;
				var prd_thresholds 			= jsonData.prd_thresholds;
				var prd_additional_services = jsonData.prd_additional_services;
				var prd_members				= jsonData.prd_members;
				var prd_promotions			= jsonData.prd_promotions;

				//set the root node which includes product name and prd_attribute
				treeStore.setRootNode({
				    text: product.name,
				    expanded: true,
				    //set prd_attribute
				    prd_attribute:prd_attribute
				});
				var root = treeStore.getRootNode();

				//set children for prd_subscriptions
				var folder_subscriptions = null;
				for(var i=0;i<prd_subscriptions.length;i++){
					var newItem = prd_subscriptions[i];
					if(newItem.parent_id == null || newItem.parent_id == '0'){
						folder_subscriptions = root.appendChild({
							text:'Subscriptions',
							expanded: true,
							leaf: false,
							id: newItem.id,
							prd_subscriptions: newItem
						});
					}else{
						var parent = null;
						if(folder_subscriptions.data.id == newItem.parent_id){
							parent = folder_subscriptions;
						}else{
							parent = folder_subscriptions.findChild('id',newItem.parent_id,true);
						}
						if(parent != null){
//							parent.leaf = false;
							parent.appendChild({
								text:(newItem.condition_type == null)?
										((newItem.balance_name == null?
												(newItem.action_name == null?
														'Not Defined'
														:newItem.action_name)
												:(newItem.balance_name)))
										:(newItem.condition_type + ': ' + newItem.condition_name),
//								leaf: true,
								expanded: true,
								id: newItem.id,
								prd_subscriptions: newItem,
							});
						}
					}
				}

				//set children for prd_tariffs
				var folder_tariffs = null;
				for(var i=0;i<prd_tariffs.length;i++){
					var newItem = prd_tariffs[i];
					if(newItem.parent_id == null || newItem.parent_id == '0'){
						folder_tariffs = root.appendChild({
							text:'Tariffs',
							expanded: true,
							leaf: false,
							id: newItem.id,
							prd_tariffs: newItem
						});
					}else{
						var parent = null;
						if(folder_tariffs.data.id == newItem.parent_id){
							parent = folder_tariffs;
						}else{
							parent = folder_tariffs.findChild('id',newItem.parent_id,true);
						}
						if(parent != null){
							parent.appendChild({
								text:(newItem.condition_type == null)?
										((newItem.balance_name == null?
												(newItem.action_name == null?
														'Not Defined'
														:newItem.action_name)
												:(newItem.balance_name)))
										:(newItem.condition_type + ': ' + newItem.condition_name),
								expanded: true,
								id: newItem.id,
								prd_tariffs: newItem,
							});
						}
					}
				}

				//set children for prd_balances
				var folder_balances = null;
				for(var i=0;i<prd_balances.length;i++){
					var newItem = prd_balances[i];
					if(newItem.parent_id == null || newItem.parent_id == '0'){
						folder_balances = root.appendChild({
							text:'Balances',
							expanded: true,
							leaf: false,
							id: newItem.id,
							prd_balances: newItem
						});
					}else{
						var parent = null;
						if(folder_balances.data.id == newItem.parent_id){
							parent = folder_balances;
						}else{
							parent = folder_balances.findChild('id',newItem.parent_id,true);
						}
						if(parent != null){
							parent.appendChild({
								text: newItem.name,
								expanded: true,
								id: newItem.id,
								prd_balances: newItem,
								//prd_balance_conditions 는 어떻게 처리???
							});
						}
					}
				}

				//set children for prd_thresholds
				var folder_thresholds = null;
				for(var i=0;i<prd_thresholds.length;i++){
					var newItem = prd_thresholds[i];
					if(newItem.parent_id == null || newItem.parent_id == '0'){
						folder_thresholds = root.appendChild({
							text:'Thresholds',
							expanded: true,
							leaf: false,
							id: newItem.id,
							prd_thresholds: newItem
						});
					}else{
						var parent = null;
						if(folder_thresholds.data.id == newItem.parent_id){
							parent = folder_thresholds;
						}else{
							parent = folder_thresholds.findChild('id',newItem.parent_id,true);
						}
						if(parent != null){
							parent.appendChild({
								text:(newItem.condition_type == null)?
										((newItem.balance_name == null?
												(newItem.action_name == null?
														'Not Defined'
														:newItem.action_name)
												:(newItem.balance_name)))
										:(newItem.condition_type + ': ' + newItem.condition_name),
								expanded: true,
								id: newItem.id,
								prd_thresholds: newItem,
							});
						}
					}
				}

				//set children for prd_additional_services
				var folder_additional_services = null;
				folder_additional_services = root.appendChild({
					text:'VAS',
					expanded: true,
					leaf: false,
				});
				for(var i=0;i<prd_additional_services.length;i++){
					var parent = folder_additional_services;
					var newItem = prd_additional_services[i];
					parent.appendChild({
						text:newItem.name,
						expanded: true,
						id: newItem.id,
						prd_additional_services: newItem,
					});
				}

				//todo: set children for prd_members and prd_promotions

			},
			failure:function(response){
				Ext.MessageBox.alert('Failed..');
				mainPanel.mask.hide();
			}
		});
	}
});