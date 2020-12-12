const generateQuery = queryOptions => {
  console.log("query options", queryOptions);
  let query = `q=${queryOptions.title ||
    queryOptions.author ||
    queryOptions.language ||
    queryOptions.publishedDate ||
    ""}`;
  query += queryOptions.title && `+intitle:${queryOptions.title}`;
  query += queryOptions.author && `+inauthor:${queryOptions.author}`;
  query += queryOptions.language && `+inlanguage:${queryOptions.language}`;
  query += queryOptions.publisher && `+inpublisher:${queryOptions.publisher}`;
  console.log("query", query);
  return query;
};

export default generateQuery;
