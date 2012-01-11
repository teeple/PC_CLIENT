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
            groupField: 'status',
            data: [
                {
                    name: 'Product Example 1',
                    prd_type:'basic',
                    status: 'Editing'
                },
                {
                    name: 'Product Example 2',
                    prd_type:'basic',
                    status: 'Requested'
                },
                {
                    name: 'Product Example 3',
                    prd_type:'packaged',
                    status: 'Requested'
                },
                {
                    name: 'Product Example 4',
                    prd_type:'basic',
                    status: 'Rejected'
                },
                {
                    name: 'Product Example 5',
                    prd_type:'basic',
                    status: 'Approved'
                },
                {
                    name: 'Product Example 6',
                    prd_type:'bundle',
                    status: 'Approved'
                },
                {
                    name: 'Product Example 7',
                    prd_type:'basic',
                    status: 'Approved'
                },
                {
                    name: 'Product Example 8',
                    prd_type:'basic',
                    status: 'Activated'
                },
                {
                    name: 'Product Example 9',
                    prd_type:'basic',
                    status: 'Activated'
                },
                {
                    name: 'Product Example 10',
                    prd_type:'basic',
                    status: 'Activated'
                },
                {
                    name: 'Product Example 11',
                    prd_type:'packaged',
                    status: 'Activated'
                },
                {
                    name: 'Product Example 12',
                    prd_type:'bundle',
                    status: 'Deactivated'
                },
                {
                    name: 'Product Example 13',
                    prd_type:'basic',
                    status: 'Deprecated'
                },
                {
                    name: 'Product Example 14',
                    prd_type:'basic',
                    status: 'Closed'
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