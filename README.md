## About

`twitter-clone` is an educational project built during the 2024 mentorship program in Relativity.

The purpose of this project is to explore and learn how to build distributed SaaS applications by attempting to clone basic Twitter functionality.

## Tech stack

### Frontend

Building the UI from scratch was not the point of this project so as many ready to use solutions as possible were selected to build the frontend.

* [Svelte](https://svelte.dev) and [SvelteKit](https://kit.svelte.dev)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/Svelte](https://www.shadcn-svelte.com/) for UI components
* [unplugin-icons](https://github.com/unplugin/unplugin-icons) and [iconify](https://github.com/iconify/iconify) for svg icons
* [clerk-sveltekit](https://github.com/markjaquith/clerk-sveltekit) for Clerk auth

### Backend

* [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet)
* [.NET Aspire](https://learn.microsoft.com/pl-pl/dotnet/aspire/)

## Getting started

### Prerequisites

* [.NET SDK](https://dotnet.microsoft.com/en-us/download)
* [.NET Aspire workload](https://learn.microsoft.com/pl-pl/dotnet/aspire/fundamentals/setup-tooling)
* [Node.js](https://nodejs.org/en/download/package-manager) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Install dependencies

Run `npm i` in the `/frontend/` directory.

### Configure the `aspire` script

Set the Aspire port environment variable usage in the `aspire` script in the `/frontend/package.json` file according to your OS, `$PORT` for Windows and `%PORT%` for MacOS.

### Set up `Clerk` environment variables

Add these values to your `/frontend/.env` (get them from Clerk after creating an application there):

```env
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_abcdefg123
CLERK_SECRET_KEY=sk_test_abcdefg123
```


## Running

Run the following command from the root directory:

```bash
dotnet run --project backend/src/TwitterClone.AppHost/TwitterClone.AppHost.csproj
```