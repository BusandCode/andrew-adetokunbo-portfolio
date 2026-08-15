import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "stack", title: "Tech Stack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "link", title: "Live Link", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
