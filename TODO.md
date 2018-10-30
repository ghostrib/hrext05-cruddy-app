### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] **create indivdiual items**
  * check for duplicate data
  * create a new `div` for each item
  * time stamp each item
- [ ] **delete individual items**
  * append an `<a>` tag to each `div` with a link to delete the item
- [ ] **edit individual items**
  * append an `<a>` tag to each `div` with a link to edit the item
  * when editing an item, display an input box with the original text

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin
- [ ] allow the user to post formatted code
- [ ] create a confirmation box/dialog when the user deletes an item
- [ ] make the app look pretty utilizing css and bootstrap
- [ ] transform time stamp into human readable format
