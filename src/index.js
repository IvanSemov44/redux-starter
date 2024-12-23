import * as actions from "./actions";
import store from "./custorScore";

store.subscribe(() => {
  console.log("Store changed");
});

store.dispatch(actions.bugAdded("Bug 1"));

console.log(store.getState());

// import { bugAdded, bugAddedResolver, bugResolved } from "./actions";
// import store from "./store";

// console.log(store);

// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugAddedResolver("Bug 2"));
// store.dispatch(bugResolved(1));

// console.log(store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

// import { produce } from "immer";

// let book = { title: "Harry Potter" };

// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublisher = true;
//   });
// }

// let updated = publish(book);

// console.log(book);
// console.log(updated);

// const numbers = [1, 2, 3];
// console.log(numbers);

// //Adding
// const index = numbers.indexOf(2);
// const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
// console.log(added);

// //Removing
// const remove = numbers.filter((n) => n !== 2);
// console.log(remove);

// //Updating
// const updated = numbers.map((n) => (n === 2 ? 20 : n));
// console.log(updated);
// const person = {
//   name: "John",
//   address: {
//     country: "USA",
//     city: "San Francisco",
//   },
// };
// const update2 = {
//   ...person,
//   address: {
//     ...person.address,
//     city: "New York",
//   },
//   name: "Bob",
// };

// update2.address.city = "New York";
// // const updated = Object.assign({}, person, { name: "Bob", age: 30 }); //Coping a object with new data without dusturb the old one.

// console.log(update2);
// console.log(person);
// // import { pipe } from "lodash/fp";

// // let input = "   JavaScript      ";
// // let output = "<div>" + input + "</div>";

// // const trim = (str) => str.trim();
// // const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// // const toLowerCase = (str) => str.toLowerCase();

// // // const transform = compose(wrapInDiv, toLowerCase, trim);
// // const transform = pipe(trim, toLowerCase, wrap("span"));
// // console.log(transform(input));

// // // const result = wrapInDiv(toLowerCase(trim(input)));
