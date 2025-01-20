const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'auf2vsuj', // Replace with your project ID
  dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET,     // Replace with your dataset name
  useCdn: false,
  token: process.env.SANITY_NEW_API,
      
});

const deleteDocuments = async () => {
  try {
    // This query deletes all documents of type "document"
    const deleted = await client.delete({ query: '*[_type == "product"]' });
    console.log('Documents deleted:', deleted);
  } catch (error) {
    console.error('Error deleting documents:', error.message);
  }
};

deleteDocuments();
