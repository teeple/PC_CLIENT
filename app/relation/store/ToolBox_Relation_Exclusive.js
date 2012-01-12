Ext.define('ProductCatalog.Relation.store.ToolBox_Relation_Exclusive', {
    extend: 'Ext.data.Store',

    requires: [
        'ProductCatalog.Relation.model.ToolBox_Relation_Exclusive',
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'ProductCatalog.Relation.store.ToolBox_Relation_Exclusive',
//            proxy: {
//                type: 'rest',
//                url: '/relations.json',
//                reader: {
//                    type: 'json',
//                }
//            },
            proxy:'memory',
            model: 'ProductCatalog.Relation.model.ToolBox_Relation_Exclusive'
        }, cfg)]);
    }
});
