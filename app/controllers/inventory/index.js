var InventoryController = Ember.Controller.extend({    
    actions: {
        saveInventory: function(inventoryObject) {
            console.log(inventoryObject);
            inventoryObject.save();
        }
    }
});

export default InventoryController;
