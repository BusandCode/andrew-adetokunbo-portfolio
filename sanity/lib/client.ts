import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../env";

// Only instantiate a real client once NEXT_PUBLIC_SANITY_PROJECT_ID is set.
// Until then, every page falls back to the static content in `lib/data.ts`.
export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

export async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch<T>(query, params);
}
