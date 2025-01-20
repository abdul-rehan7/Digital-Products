const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'auf2vsuj', // Replace with your project ID
  dataset:  "production",     // Replace with your dataset name
  useCdn: false,
  token: "skDc6q065raxQbJt5VvYUTby01nrtPP9t1b4kuc5NDdpdVS5wJ6vyE4U61OnVKTXF49Uo9ZjzRQcuw1ngTeyCFqK55sQrGfpRqHGsTR1B6Nj3kM0y2ynC460JJZpPqOFVnXdLY6a4iM4Rvk3OHNxb23CSZ3oPLgxRUexVNz0WdTthQS5QM6Z",
      
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
