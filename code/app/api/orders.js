import { getSession } from 'next-auth/react';
import { sanityClient } from '../../sanity'; // Import your Sanity client

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    // Create an order in Sanity
    const { items, totalPrice } = req.body;

    const orderDoc = {
      _type: 'order',
      user: session.user.email, // Track the user placing the order
      items,
      totalPrice,
      status: 'Pending', // Default status
    };

    try {
      const result = await sanityClient.create(orderDoc);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create order' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
