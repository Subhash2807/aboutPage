// Budget contoller

var budgetController = (function()
{
  	var Expense = function(id, description, value)
    {
        this.id=id;
        this.description= description;
        this.value = value;
    }					
	var Income = function(id, description, value)
    {
        this.id=id;
        this.description= description;
        this.value = value;
    }	
    
   
    var data = {
        allItems : {
              exp : [],
              inc: []
        },
        totals: 
        {
            exp: 0,
            inc: 0;    
        }
};
    return 
    {
        addItem : function(type,des,val)
        {
            var newItem,ID;
            if(data.allItems[type].lenth>0)
            {
                 ID=data.allItems[type][data.allItems[type].length-1]id+1;
            }
            else ID=0;
            
            if(type==='exp'){
            newItem new Expense(ID,des, val);
           }
        else if(type==='inc')
        {
       newItem new Expense(ID,des, val);
        }
        }
        data.allItems[type].push(newItem);
        return newItem;
    }
})();

// UI Controller
var UIController = (function()
{
	    var DOMstrings = 
		{
			inputType : '.add__type',
			inputDescription : '.add__description',
			inputValue : '.add__valu',
			inputBtn: '.add__btn'
		};
	return 
	{
	   getinput: function()
		{
			return 
			{
			   type : document.querySelector(DOMstrings.inputType).value,
			   description : document.querySelector(DOMstrings.inputDescription).value,			
		       value : document.querySelector(DOMstrings.inputValue).value;
			} 
		},
		
		getDOMstrings : function()
		{
			return DOMstrings
		}
	};
})();

// Global APP
var controller = (function(budgetCtrl, UICtrl)
{
    var DOM =UICtrl.getDOMstrings();
    var setupEventListeners=function()
    {
        document.querySelector.(DOM.inputBtn).addEventListener('click',ctrlAddItem);
	
	
	    document.addEventListener('keypress', function(event)
	  {
		  if(event.keyCode === 13)
		 {
			ctrlAddItem();
		 }
	  });
        
    }
    
	
    
	var ctrlAddItem = function()
	{
		// 1. Get input data
		var input = UICtrl.getInput();
		
	   // 2. Add the item to the budget controller
        budgetCtrl.addItem(input.type, input.description, input.value);
	   // 3. add to UI
	   // 4. Calculate Budget.
	   // 5. Display Budget.
	};
	
    return
    {
        init: function()
        {
            setupEventListeners();
        }
    }
	
})(budgetController, UIController);


controller.init();






