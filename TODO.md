1. ADDITION: Write prompts/Decide on best prompt flow, given the architecture
  - Setting a products quantity to zero removes it from the cart, do you wish to continue?
  - Selecting a product multiple times increases its quantity in your cart, do you wish to continue?
  - You are about to remove all items from your cart, do you wish to continue?


2. ADDITION: Write tests
  - at least for the actions/thump dispatchers, I just didn't want to risk blowing up the build somehow after I completing the basic requirements by installing a dependency. Probably should have started with it. 

3. REFACTOR: Figure out how to have my initalState accepted instead of how, whatever is being accepted, is accepted

4. REFACTOR: SET_QUANTITY action to pass ID's would probably be more efficient than mapping through all items in the cart, although it's hard to imagine a cart big enough for this to really be an issue.

5. REFACTOR: Pass product to item.js instead of having to acquire all products again. 
