import { serve, Response } from "https://deno.land/std@0.56.0/http/server.ts";
import { readFileStrSync } from "https://deno.land/std/fs/mod.ts";

const s = serve({ port: 8000 });

console.log("http://localhost:8000/");

for await (const req of s)  {
  const page = req.url.includes('/about') ? 'about.html' : 'home.html';

  const body = readFileStrSync(`./content/${page}`, { encoding: "utf8" });
  
  const response: Response = {
    headers: new Headers({
      "content-type": "text/html",
    }),
    body,
  };

  req.respond(response);
}