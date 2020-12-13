import generateQuery from "../QueryGenerator";

describe("Testing QueryGenerator", () => {
  test("Generate full query", () => {
    const queryOptions = {
      title: "a",
      author: "b",
      language: "c",
      publisher: "d"
    };
    const amount = 10;
    const startIndex = 0;

    const query =
      "q=a+intitle:a+inauthor:b+inlanguage:c+inpublisher:d&startIndex=0&maxResults=10";
    const generatedQuery = generateQuery(queryOptions, amount, startIndex);
    expect(generatedQuery).toBe(query);
  });
});
