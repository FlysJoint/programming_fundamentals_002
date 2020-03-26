const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });

    test("returns false if the book exists in the list", () => { // "returns false if the book doesn't exist in the list"
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });

  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });

    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });

  });

  describe("catalogueService.countBooksByKeyword", () => {
    test("returns the number of books containing the keyword", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
    });

    test("returns the number of books containing the keyword", () => {
      expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
    });

    test("returns 'keyword must be string of at least 3 characters' because below min chars", () => {
      expect(catalogueService.countBooksByKeyword("a")).toBe('keyword must be string of at least 3 characters');
    });

    test("returns 'keyword must be string of at least 3 characters' because below min chars", () => {
      expect(catalogueService.countBooksByKeyword("as")).toBe('keyword must be string of at least 3 characters');
    });

    test("returns 'keyword must be string of at least 3 characters' because below min chars", () => {
      expect(catalogueService.countBooksByKeyword("")).toBe('keyword must be string of at least 3 characters');
    });

    test("returns 'keyword must be string of at least 3 characters' because below min chars", () => {
      expect(catalogueService.countBooksByKeyword(123)).toBe('keyword must be string of at least 3 characters');
    });

    test("returns 0 is not in any titles", () => {
      expect(catalogueService.countBooksByKeyword("lobster")).toBe(0);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns the books in the list by Dickens", () => {
     expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens"]);
    });

    test("returns the books in the list by Mantel", () => {
     expect(catalogueService.getBooksByAuthor("Hilary Mantel")).toEqual([
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",]);
    });

    test("returns 'No titles found' for George Orwell", () => {
      expect(catalogueService.getBooksByAuthor("George Orwell")).toBe('No titles found');
    });

    test("returns the books in the list by Charles", () => {
     expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Origin of Species by Charles Darwin"]);
    });

    test("returns the books in the list by Charl", () => {
     expect(catalogueService.getBooksByAuthor("Charl")).toEqual([
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Origin of Species by Charles Darwin"]);
    });

  });



});