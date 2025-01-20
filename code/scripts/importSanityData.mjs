import { createClient } from "@sanity/client";
import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

// Function to upload images to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", imageUrl, error);
    return null;
  }
}

// Main function to import data
async function importData() {
  try {
    console.log("Migrating data, please wait...");
    
    const response = await axios.get(
      "https://my-custom-api.vercel.app/api/products"
    );
    
    // Check the structure of the response and log it
    const products = response.data?.data || response.data;
    
    if (!Array.isArray(products)) {
      throw new Error("Products data is not an array. Check the API response structure.");
    }
    
    console.log("Products fetched:", products);
    

    for (const product of products) {
      let imageRef = null;

      // Upload image if exists
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Prepare Sanity product object
      const sanityProduct = {
        id: product.id,
        _type: "product",
        imageUrl:product.imageUrl,
        productName: product.productName,
        description: product.description,
        category: product.category,
        price: product.price,
        discountPercentage: product.discountPercentage,
        priceWithoutDiscount: product.priceWithoutDiscount,
        rating: product.rating,
        ratingCount: product.ratingCount,
        tags: product.tags || [],
        features: product.features || [],
        compatibility: product.compatibility,
        supportedPlatforms: product.supportedPlatforms || [],
        fileSize: product.fileSize,
        demoUrl: product.demoUrl,
        downloadableFiles: product.downloadableFiles || [],
        image: imageRef
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageRef,
              },
            }
          : undefined,
      };

      // Create document in Sanity
      await client.create(sanityProduct);
    }

    console.log("Data migrated successfully!");
  } catch (error) {
    console.error("Error in migrating data:", error);
  }
}

// Run the import function
importData();
