Ext.define('ProductCatalog.Lifecycle.store.ToolBox', {
    extend: 'Ext.data.Store',

    requires: [
               'ProductCatalog.Lifecycle.model.ToolBox',
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	storeId: 'ProductCatalog.Lifecycle.store.ToolBox',
            model: 'ProductCatalog.Lifecycle.model.ToolBox',
//            sorters: ['cuisine','name'],
            groupField: 'order',
            data: [
                {
                    name: 'Product Example 1',
                    prd_type:'basic',
                    status: 'Editing',
                    order: 1,
                },
                {
                    name: 'Product Example 2',
                    prd_type:'basic',
                    status: 'Requested',
                    order: 2,
                },
                {
                    name: 'Product Example 3',
                    prd_type:'packaged',
                    status: 'Requested',
                    order: 2,
                },
                {
                    name: 'Product Example 4',
                    prd_type:'basic',
                    status: 'Rejected',
                    order: 3,
                },
                {
                    name: 'Product Example 5',
                    prd_type:'basic',
                    status: 'Approved',
                    order: 4,
                },
                {
                    name: 'Product Example 6',
                    prd_type:'bundle',
                    status: 'Approved',
                    order: 4,
                },
                {
                    name: 'Product Example 7',
                    prd_type:'basic',
                    status: 'Approved',
                    order: 4,
                },
                {
                    name: 'Product Example 8',
                    prd_type:'basic',
                    status: 'Activated',
                    order: 5,
                },
                {
                    name: 'Product Example 9',
                    prd_type:'basic',
                    status: 'Activated',
                    order: 5,
                },
                {
                    name: 'Product Example 10',
                    prd_type:'basic',
                    status: 'Activated',
                    order: 5,
                },
                {
                    name: 'Product Example 11',
                    prd_type:'packaged',
                    status: 'Activated',
                    order: 5,
                },
                {
                    name: 'Product Example 12',
                    prd_type:'bundle',
                    status: 'Deactivated',
                    order: 6,
                },
                {
                    name: 'Product Example 13',
                    prd_type:'basic',
                    status: 'Deprecated',
                    order: 7,
                },
                {
                    name: 'Product Example 14',
                    prd_type:'basic',
                    status: 'Closed',
                    order: 8,
                },
            ],
//            sortData : function(f, direction){
//            	console.log('sortData');
//                direction = direction || 'ASC';
//                var st = this.fields.get(f).sortType;
//                var fn = function(r1, r2){
//                    var v1 = st(r1.data[f], r1), v2 = st(r2.data[f], r2);
//                    return v1 > v2 ? 1 : (v1 < v2 ? -1 : 0);
//                };
//                this.data.sort(direction, fn);
//                if(this.snapshot && this.snapshot != this.data){
//                    this.snapshot.sort(direction, fn);
//                }
//            }
        }, cfg)]);
    }
});