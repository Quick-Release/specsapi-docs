import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Specs API',
      plugins: [
        // 1. Configure the OpenAPI plugin
        starlightOpenAPI([
          {
            base: 'api', // Your API docs will live at /api/...
            label: 'API Reference', // The label in your sidebar
            schema: './schema.yaml', // Path to the local file we just copied
          },
        ]),
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Authentication', link: '/guides/example/' },
          ],
        },
        // 2. Automatically inject the generated API routes into the sidebar
        openAPISidebarGroups,
      ],
    }),
  ],
});
