[![Beanbag Coffee](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/f8fshe&style=flat&logo=cypress)](https://cloud.cypress.io/projects/f8fshe/runs)

# Quickstart

### Install dependencies

Use Yarn to install all dependencies.

```shell
yarn
```

### Start developing

You are now ready to start up your project.

```shell
yarn dev
```

### Open the code and start customizing

Your site is now running at <http://localhost:8000>!

# Payment integrations

By default this starter supports the following payment integrations

- [Stripe](https://stripe.com/)
- [Paypal](https://www.paypal.com/)

To enable the integrations you need to add the following to your `.env.local` file:

```shell
NEXT_PUBLIC_STRIPE_KEY=<your-stripe-public-key>
NEXT_PUBLIC_PAYPAL_CLIENT_ID=<your-paypal-client-id>
```

You will also need to setup the integrations in your Medusa server. See the [Medusa documentation](https://docs.medusajs.com) for more information on how to configure [Stripe](https://docs.medusajs.com/add-plugins/stripe) and [PayPal](https://docs.medusajs.com/add-plugins/paypal) in your Medusa project.

# Search integration

This starter is configured to support using the `medusa-search-meilisearch` plugin out of the box. To enable search you will need to enable the feature flag in `./store.config.json`, which you do by changing the config to this:

```javascript
{
  "features": {
    // other features...
    "search": true
  }
}
```

Before you can search you will need to install the plugin in your Medusa server, for a written guide on how to do this – [see our documentation](https://docs.medusajs.com/add-plugins/meilisearch).

The search components in this starter are developed with Algolia's `react-instant-search-hooks-web` library which should make it possible for you to seemlesly change your search provider to Algolia instead of MeiliSearch.

To do this you will need to add `algoliasearch` to the project, by running

```shell
yarn add algoliasearch
```

After this you will need to switch the current MeiliSearch `SearchClient` out with a Alogolia client. To do this update `@lib/search-client`.

```ts
import algoliasearch from "algoliasearch/lite"

const appId = process.env.NEXT_PUBLIC_SEARCH_APP_ID || "test_app_id" // You should add this to your environment variables

const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key"

export const searchClient = algoliasearch(appId, apiKey)

export const SEARCH_INDEX_NAME =
  process.env.NEXT_PUBLIC_INDEX_NAME || "products"
```

Then, in `src/app/(main)/search/actions.ts`, remove the MeiliSearch code (line 10-16) and uncomment the Algolia code.

```ts
"use server"

import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"

/**
 * Uses MeiliSearch or Algolia to search for a query
 * @param {string} query - search query
 */
export async function search(query: string) {
  const index = searchClient.initIndex(SEARCH_INDEX_NAME)
  const { hits } = await index.search(query)

  return hits
}
```

After this you will need to set up Algolia with your Medusa server, and then you should be good to go. For a more thorough walkthrough of using Algolia with Medusa – [see our documentation](https://docs.medusajs.com/add-plugins/algolia), and the [documentation for using `react-instantsearch-hooks-web`](https://www.algolia.com/doc/guides/building-search-ui/getting-started/react-hooks/).

# Serverless Modules

> Serverless Modules are currently in beta. You can learn more about them [here](https://docs.medusajs.com/experimental). In addition, the Serverless Modules in the Next.js storefront can't be used without the Medusa backend running at the moment.

This starter has full support for our new experimental [Product Module](https://docs.medusajs.com/experimental/product/overview) and [Pricing Module](https://docs.medusajs.com/experimental/pricing/overview) for retrieving and manipulating product and pricing data directly from a serverless function. This keeps your product logic close to the frontend, making it easy to customize or extend Medusa's core functionality from within your Next.js project.

By default, this starter uses the standard Medusa API for product and collection retrieval.

To enable the new modules on your server, refer to their [docs](https://docs.medusajs.com/experimental).

Then, make sure to set the following environment variables in your Next.js storefront project:

> WARNING: This is a one way process. Once you opt in to these features and update your database, there's no way back. Proceed with caution.

- `POSTGRES_URL`: the URL of your PostgreSQL databsae.
- `NEXT_PUBLIC_BASE_URL`: the URL of your storefront's base URL. If you're running it locally, it should be <http://localhost:8000>.

After that, add the following environment variable to **both your Next.js storefront and Medusa backend** to enable the feature flag:

- `MEDUSA_FF_MEDUSA_V2=true`

Finally, run migrations in your Medusa backend to prepare your database for the new modules.

```shell
npx medusa migrations run
```

Make sure the Medusa backend is running, then start (or restart) your Next.js storefront.

Done! All product and collection data should now be coming from the module. The Product Module routes are all in `src/app/api` for you to edit and play around with.

> Deploying to Vercel? If you're not planning on using the serverless modules, you might encounter errors when deploying to Vercel. You can safely delete or exclude the `src/app/api` folder before deploying. The API routes are only used by the serverless modules.

# Resources

## Learn more about Medusa

- [Website](https://www.medusajs.com/)
- [GitHub](https://github.com/medusajs)
- [Documentation](https://docs.medusajs.com/)

## Learn more about Next.js

- [Website](https://nextjs.org/)
- [GitHub](https://github.com/vercel/next.js)
- [Documentation](https://nextjs.org/docs)
"# beanbag-storefront"
