+++
title = "A Fun Tech Stack"
date = 2023-01-07
+++

If you want to enjoy writing web applications, I highly recommend the following web stack.

The *SKPTPS* stack. Unfortunately, it doesn't roll off the tongue.

## [Svelte](https://svelte.dev/) + [SvelteKit](https://kit.svelte.dev/)


Svelte offers a component based model that is a joy to use. It is both expressive and a powerful. No frontend framework feels closer to the web.

SvelteKit is the obvious choice to pair with Svelte. SSR, SSG, dev server and everything else you would expect in a modern web framework. Data fetching and forms actions are the quickest, and most robust way to add server side functionality to a site.

## [PicoCSS](https://picocss.com/)

Don't both reinventing the wheel, PicoCSS restyles most HTML component and provides the basic styling required for 95% of your application.

## [TypeScript](https://www.typescriptlang.org/)

Share your types between client and server to catch a bunch of bugs. Svelte is flexible, so for simple, or purely view-oriented, components you don't even need to use TS.

## [Prisma](https://www.prisma.io/) + [SQLite](https://www.sqlite.org/)

Querying your DB with GraphQL is sexy stuff, and once again generated types help catch bugs. With Prisma you have a bunch of options for your database, but unless you have a good reason - why not SQLite?

A lot of folks pick something fancier, becoming carried away with plans to scale. I think it is a mistake to give up the simplicity of SQLite so easily.

<br>

### Bonus Tech

- [Caddy](https://www.sqlite.org/index.html) if you need a web server
- [Zod](https://github.com/colinhacks/zod) makes validation a breeze.
