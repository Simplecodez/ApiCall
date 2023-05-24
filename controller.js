// require
const url = require("url");
const result = require("./app");
// Handler function to avoid repetition
const handler = async (query, res, resource) => {
  // Using a try-catch block to effectively handle errors incase the occur when trying to retrieve data.
  //then().catch() method can also be used

  if (Array.isArray(result)) {
    if (Object.keys(query).length === 0) {
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      return res.end(
        JSON.stringify({
          status: "success",
          results: result.length,
          data: { [resource]: result },
        })
      );
    }

    if (query.limit * 1 > result.length) {
      res.writeHead(404, {
        "Content-type": "application/json",
      });
      return res.end(
        JSON.stringify({ status: "fail", message: `${resource} not found!` })
      );
    }

    let comments = [];

    for (i = 1; i <= query.limit * 1; i++) {
      comments.push(result[i - 1]);
    }

    const data = JSON.stringify({
      status: "success",
      results: comments.length,
      data: { [resource]: comments },
    });

    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(500, {
      "Content-type": "text/html",
    });
    res.end(result);
  }
};

module.exports = (req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  //Handler for '/api/posts'
  if (pathname === "/api/comments" && req.method === "GET") {
    handler(query, res, "comments");
    //Handler for '/api/posts'
  } else if (pathname === "/api/posts" && req.method === "GET") {
    handler(query, res, "posts");
    //Handler for '/api/posts'
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "fail",
        message:
          "Sorry, the resource you are looking for, can not be found on this server!",
      })
    );
  }
};
