const generateQuery = (queryOptions, amount, startIndex) => {
  let query = `q=${queryOptions.title ||
    queryOptions.author ||
    queryOptions.language ||
    queryOptions.publishedDate ||
    ""}`;
  query += queryOptions.title && `+intitle:${queryOptions.title}`;
  query += queryOptions.author && `+inauthor:${queryOptions.author}`;
  query += queryOptions.language && `+inlanguage:${queryOptions.language}`;
  query += queryOptions.publisher && `+inpublisher:${queryOptions.publisher}`;

  query += `&startIndex=${startIndex}&maxResults=${amount}`;
  return query;
};

export default generateQuery;
