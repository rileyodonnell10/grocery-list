# My Grocery List #

This a simple app that allows the user to write, edit and delete items on a grocery list.

## Installing ##
Clone this repo, and then run `docker-compose up`.

If for whatever reason `docker-compose up` does not work, run `npm install` then `npm run start`.

Finally, navigate to http://localhost:8080.

## Possible Improvements ##
### 1. Scaling ###
In order to scale this application, an authentication system would need to be implemented, where a given user has
read/write access to their grocery and only their grocery list. Also, a Users collection would need to be created in the
database and an Items collection would need to be created and associated with the given user. This can all be achieved
relatively easily within Firebase by authenticating users with their Google account.

### 2. Multiple Lists ###
It would be useful to give users the capability of creating and managing multiple lists from their account, to allow
for the user to keep track of as many lists as they need, as well as to provide a history of previously created lists.
This can be achieved by adding a Lists collection associated with the user in the back-end, and displaying these lists as
a selectable dropdown on the front-end.

### 3. Sharing ###
It would also be useful to add sharing functionality to this application in order for users to share their grocery lists
with others. This can be achieved by providing the user an option to share a dynamic link that when clicked, prompts the
sharee to download the app and then displays the shared list once they open the app. This would require the given list
record to have a "viewers" field listing the users with view permissions for the shared list on the back-end. It would
also be useful to visually differentiate the shared list from the sharee's own lists on the front-end, perhaps with an icon.

### 4. Item Suggestions ###
An interesting feature to implement would be an "Item Suggestion" button, where when clicked the input field gets
automatically filled with a purchased item that has been added to previous lists in the past. This could be
beneficial to the user by serving as a reminder of a regularly-purchased item that they've potentially run out of.
The user can continue clicking this button to cycle through regularly-purchased items. The implementation of this
feature can be achieved by aggregating a list of all the user's previously purchased items, finding the most frequently
purchased items and serving those to the front-end.



