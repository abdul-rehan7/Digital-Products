import { createClient } from "next-sanity";

const apiVersion = "2023-01-01"; // Your Sanity API version
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

console.log("Sanity Config:", { projectId, dataset, apiVersion });

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Use false for fresh data
});
