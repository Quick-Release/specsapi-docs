import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import starlightLinksValidator from 'starlight-links-validator';

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
            schema: './schema.yaml',
          },
        ]),

        starlightLinksValidator(),
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Authentication', link: '/guides/example/' },
          ],
        },
        ...openAPISidebarGroups,
      ],
    }),
  ],
});
