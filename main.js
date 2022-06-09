//create Header and declaration
const body = document.querySelector("body");
const navContainer = document.createElement("div");
const navbar = document.createElement("div");
navContainer.classList.add("navContainer")
navbar.classList.add("navbar");
navbar.textContent="My Library";
body.append(navContainer);
navContainer.appendChild(navbar);

//Add Book Part
const bookContainer = document.createElement("div")
const btnContainer = document.createElement("div")
const addBookBtn = document.createElement("button");
btnContainer.classList.add("btnContainer");
addBookBtn.classList.add("btn");
addBookBtn.textContent="Add Book"
navContainer.after(btnContainer);
btnContainer.appendChild(addBookBtn);

//Add Book Layout
const lTitle = document.createElement("label");
const lAuthor = document.createElement("label");
const lPages = document.createElement("label");
const lRead = document.createElement("label");
const iTitle = document.createElement("input");
const iAuthor = document.createElement("input");
const iPages = document.createElement("input");
const iRead = document.createElement("input");
const bookForm = document.createElement("div");
const addBtn = document.createElement("button")
bookContainer.classList.add("bookContainer");

//Title
lTitle.classList.add("title");
lTitle.textContent="Title";
lTitle.name="title";
iTitle.classList.add("title");
iTitle.type ="text";
iTitle.for="title";
iTitle.textContent="Title";
iTitle.required;


//Author
lAuthor.classList.add("author");
lAuthor.textContent="Author";
lAuthor.name="author";
iAuthor.classList.add("author");
iAuthor.type ="text";
iAuthor.for="author";
iAuthor.textContent="author";

//Pages
lPages.classList.add("pages");
lPages.textContent="Pages";
lPages.name="pages";
iPages.classList.add("pages");
iPages.type ="number";
iPages.for="pages";
iPages.textContent="pages";

//Read or not
lRead.classList.add("read");
lRead.textContent="Did you read the book?";
lRead.name="read";
iRead.classList.add("read");
iRead.type ="checkbox";
iRead.for="read";
iRead.textContent="read";

//Button
addBtn.classList.add("btn");
addBtn.textContent="Add";
addBtn.addEventListener("click",function(e){
    addBookToLibrary();
})

//Form
bookForm.classList.add("bookForm");
bookContainer.style.display="none";
btnContainer.after(bookContainer);
bookContainer.appendChild(bookForm);
bookForm.appendChild(lTitle);
bookForm.appendChild(iTitle);
bookForm.appendChild(lAuthor);
bookForm.appendChild(iAuthor);
bookForm.appendChild(lPages);
bookForm.appendChild(iPages);
bookForm.appendChild(lRead);
bookForm.appendChild(iRead);
bookForm.appendChild(addBtn);

//Open/Close form function

function toggleAddBook(){
    if(bookContainer.style.display==="none"){
        bookContainer.style.display ="flex";
        addBookBtn.textContent="Close"
        addBookBtn.classList.add("btn-close")
    }
    else{
        bookContainer.style.display="none";
        addBookBtn.textContent="Add Book"
        addBookBtn.classList.remove("btn-close")
    }
}

addBookBtn.addEventListener("click",function(e){
    toggleAddBook();
})

//Add book to library
let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(){
    console.log(iTitle.value,iAuthor.value,iPages.value,iRead.checked);
}

//Flex Layout for each Book

const libDiv = document.createElement("div");
const libTitle = document.createElement("input");
const libAuthor = document.createElement("input");
const libPages = document.createElement("input");
const libRead = document.createElement("input");

libDiv.classList.add("libDiv");
libTitle.classList.add("title");
libAuthor.classList.add("author");
libPages.classList.add("author");
libRead.classList.add("pages");

//Add Layout
bookContainer.after(libDiv);
libDiv.appendChild(libTitle);
libDiv.appendChild(libAuthor);
libDiv.appendChild(libPages);
libDiv.appendChild(libRead);