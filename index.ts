// Define the Book type
type Book = {
    id: number;
    title: string;
    author: string;
    isAvailable: boolean;
  };
  
  // Define the Loan type
  type Loan = {
    loanId: number;
    bookId: number;
    dueDate: Date;
  };
  
  // Create a Book instance
  const book: Book = { 
    id: 1, 
    title: "TypeScript Basics", 
    author: "Jane Doe", 
    isAvailable: true 
  };
  
  // Create a Loan instance
  const loan: Loan = { 
    loanId: 1, 
    bookId: book.id, 
    dueDate: new Date("2024-03-01") 
  };
  
  // Function to check the availability of a book
  function checkAvailability(book: Book): string {
    return book.isAvailable ? "Available" : "Currently loaned out";
  }
  
  // Example usage
  console.log(`The book "${book.title}" is ${checkAvailability(book)}.`);
  
  // Demonstrate type checking by attempting an incorrect assignment (uncomment to see the error)
  // book.id = "two"; // This will cause a TypeScript compile-time error: Type 'string' is not assignable to type 'number'.
  