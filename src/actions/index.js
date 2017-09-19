export function selectBook(book){
//select book is an ActionCreator and needs to return an action,
//an object with a type priority
return{
  type:'BOOK_SELECTED',
  payload: book
};

}
