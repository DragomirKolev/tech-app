### `Components: reusable outside business logic`

The Input is kind of self explanatory, take in some props and render an input based on them. (Bonus 1) This can easily be achieved by using the step attribute on the input and giving it the step that we want, the browser shows native buttons for up and down and you can also use keyboard up and down keys to trigger the step.

The Timer component is made to be reusable (Bonus 6) with the precondition that it can only display the timer in format (MM:SS). By passing in a timerFunction prop it will get executed every time the timer reaches 0. It also takes in the startingFrom prop which is time in seconds. I’ve also added the label prop for making it a bit nicer not just the time. 

The board with 80 buttons is also made into a reusable component (Bonus 6) called GameBoard which takes in a few props to allow for the reusability. A few rules are in place here of course but this allows you to make a game board of any size and give the buttons any function to execute onClick. For (Bonus 2) in the Input css I used the grid-template-columns to achieve the min/max of 360/800 and on the GameBoard css i used min-width and max-width this way the grid scales within that boundary. The buttons in the grid get scale using the minmax on the repeat. The buttons are square (Bonus 4) in the GameBoards largest form with a width of 800px. To achieve (Bonus 5) this as mentioned above I used a grid, by just defining the template-columns and grid-auto-rows, this not only allows for a grid of 10 x 8 but also 10 x N.


### `Containers: business logic wrappers`

These are components used to extract our business logic in containers. All of the data manipulation is done here and passed down components do extract the logic. This way I keep all of the features and components self contained while passing down props to them to do what I need them to do. This way for example I don’t need to have a dependency in my comments feature on the playField features state (Bonus 3), what I do instead is use the selector in the TimedComments container to get the selectedNumbers and pass them down to the Comments component as a prop.


### `Features: business logic slices`

I also looked into using Reselect (Bonus 7) but I think that in the minimalistic app that I have it does not help with performance as my selectors are very simple and if they do change a re-render is necessary in each case they are used. I can see it being useful if I had more business logic in my Containers then there would be more reasons for the component to re-render. I have however used React.memo on the Timer component so that it does not get re-rendered whenever the TimedComments container updates the Comments component that selectedNumbers has changed.
