import { serve, Response } from "https://deno.land/std@0.56.0/http/server.ts";
import { aboutpage } from "./content/aboutpage.ts";
import { homepage } from "./content/homepage.ts";

const s = serve({ port: 8000 });

console.log("http://localhost:8000/");

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