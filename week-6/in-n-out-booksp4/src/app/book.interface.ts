// Author: Travis Rosen
// Date: 09/04/2021
// Title: book.interface.ts
// Description: Interface file for book information

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
