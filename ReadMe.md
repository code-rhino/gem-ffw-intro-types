[Video](https://vimeo.com/912004712?share=copy)

# Intro to types

- **Understanding Types and Interfaces:** Explains the purpose of using types and interfaces to set up expectations, make coding easier, and prevent mistakes when passing around data.
- **Modeling a Library System:** Illustrates the process of modeling a simple library system with books and authors, emphasizing the importance of unique identifiers and structured data for authors and books.
- **Benefits of Structured Data:** Discusses the benefits of using interfaces to represent complex data structures like authors, allowing for easier data management and future expansions of the model.

### Step 1: Defining Types and Interfaces
- **Unique Identifier (UniqueId):** A type alias is created for `UniqueId` as a `number`. This will be used as the identifier for both authors and books.
- **Author Interface:** Defines the structure for an author object, including `id` (as `UniqueId`), `firstName`, and `lastName`.
- **Book Interface:** Defines the structure for a book object, including `id` (as `UniqueId`), `title`, `author` (as `Author`), and `isAvailable` (as `boolean`).

### Step 2: Creating Instances
- **Author Instance:** An instance of the `Author` interface is created (`author01`), representing John Wick with a unique `id`.
- **Book Instance:** An instance of the `Book` interface is created (`book01`), titled "How to care for dogs," linked to the author instance (`author01`), and marked as available.

### Step 3: Implementing Functionality
- **Check Availability Function:** A function (`checkAvailable`) is implemented to check if a book is available. It takes a `Book` object as its parameter and returns a string indicating whether the book is "available" or "currently out on loan" based on the `isAvailable` property.

### Step 4: Output
- A `console.log` statement is used to print out the availability of `book01`, displaying the title, author's last name, author's first initial, and its availability status.


