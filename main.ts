import { serve, Response } from "https://deno.land/std@0.56.0/http/server.ts";

const s = serve({ port: 8000 });

console.log("http://localhost:8000/");

const homepage = `
<!doctype html>
<html>
  <head>
    <title>Hello Deno!</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="mb-3 bd-text-purple-bright">Deno.js 1.0 HTTP Server</h1>
    </div>
    <div>
      <div class="col-md-6 order-md-1 text-center text-md-left pr-md-5">
        <p class="lead">
        Hello World.
        </p>
        <p class="lead mb-4">
        This example is an a simple http server that sends you an html string that says 'Hello World'.
        </p>
        <p>
        <a href='/about'>About Page</a> 
        </p>
      </div>
    </div>
  </body>
</html>
`

const aboutpage = `
<!doctype html>
<html>
  <head>
    <title>About This!</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="mb-3 bd-text-purple-bright">Deno.js 1.0 HTTP Server</h1>
    </div>
    <div>
      <div class="col-md-6 order-md-1 text-center text-md-left pr-md-5">
        <p class="lead">
          About Page
        </p>
        <p class="lead mb-4">
          What about you?
        </p>
      </div>
    </div>
  </body>
</html>
`


for await (const req of s) {

  const body = req.url.includes('/about') ? aboutpage : homepage;


  const response: Response = {
    headers: new Headers({
      "content-type": "text/html",
    }),
    body,
  };

  req.respond(response);
}