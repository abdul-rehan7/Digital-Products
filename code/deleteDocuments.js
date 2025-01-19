const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'auf2vsuj', // Replace with your project ID
  dataset: 'production',     // Replace with your dataset name
  useCdn: false,
  token:"sk2b81QPrPzgQedyuop7nAdR9ffjSlj2GgUU8tC4FsQ9bz5nwgkbZ1gdFElnjpTsSlZ0BIFLc8qFCkwgWfXLndjmWoS6xvhOfjJSD23fV7FPwbu9pWS7x1WsdTbaw0N8wi55BDdlvc9bGPukvitakwtMkbe5vcAbDeETWG4NU22ngR9kA1Yj"              // Optional: Set to false for real-time data
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
