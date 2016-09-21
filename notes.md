#Notes

##Framework Thoughts

### Thump
Originally I was a little upset over some syntax choices (as in, my lack of understanding hurt my brain and made me upset) and the use of redux-actions + thunk (neither of which I've looked at for more than a cursory glance) for such a small application. 

After writing the dispatch thunk functions I was sold (although I would still call it over engineering for small applications). One problem with actions is the urge to write business logic in them, I feel like that path contains too much coupling. Being able to separate the state change functions from business logic using thump feels like nice separation of concerns and decoupling. 
I was debating separating them into their own 'dispatchers' directory but with only two functions and working with only one reducer I shrugged. When an application starts to have a lot more of these functions that would deffinitely be necessary, probably subdirectories based on the reducer they're performing on. Of all possible feedback I would like to hear your opinion on this.

My one hold up came when I wanted to set a warning pop up the first time someone sets a quantity to 0. Does one call a function conditionally from react? Bake it into the function I wrote? Write a new dispatch function that conditionally dispatches setQuantityOrRemove? I didn't see any answers I found immediately pleasing (that also use thump and redux).

### General

There is a lot of 'magic' for me between handleActions, combineReducers, and using compose to create the store. They aren't things you necessarily have to touch on too regular of a basis, but I would be worried if things started to break around them. Darn framework/config wizardy 

### No Tests?

Interested to know what you use for testing redux, I've only ever seen examples with mocha. I'm putting it in the TODO list. 

## Changes

I changed the UX of the plus and minus buttons because having them next to eachother seems like a possible user pain point.

I made it so clicking on a product will continue to increment the product instead of just doing nothing. Ideally this would follow up with a prompt asking them to continue incrementing such as: "Click on a product multiple times increases the number you have in your cart, do you wish to continue?". Only show once.

Couldn't remember or find the same font, sigh. 

## Largest Challenges and Time Spent

7 hours on the javascript & library doc reading
3 hours on styling (my css is fairly week, but I think it's close!)

Looking at the readme prompted a famous last words "doesn't look so hard" phrase. The features themselves aren't difficult nor are SOME available options to achieving them. Placing them in the 'best' position while considering the libraries used I found challenging because of whats stated above. 

Still hopping on the -use as much functional as possible- javascript train. Coming from Ruby it's a bit of a leap in brain power, had to go re-do some 'the good parts' questions heh.

## Questions

How does createElement always know what to use from the page?
Where does one set initialState when building like this (my effort was to know avail)? I see it in the store's creation but thats about as far as I got.
