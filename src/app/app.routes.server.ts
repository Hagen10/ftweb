import { RenderMode, ServerRoute } from '@angular/ssr';

// This file is only to let the application know where the 
// rendering should take place. The actual routes are defined
// in src/app/app.routes.ts to be shared between client and server.
export const serverRoutes: ServerRoute[] = [
  {
    path: 'overview',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // Use RenderMode.Server for Server Side Rendering and RenderMode.Client for Client Side Rendering
  },
];
