// schemas/order.js
export default {
    name: 'order',
    type: 'document',
    title: 'Orders',
    fields: [
      {
        name: 'user',
        type: 'reference',
        to: [{ type: 'user' }], // Optional: if you have a user schema
        title: 'User',
      },
      {
        name: 'items',
        type: 'array',
        title: 'Ordered Items',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'product', type: 'reference', to: [{ type: 'product' }] },
              { name: 'quantity', type: 'number' },
            ],
          },
        ],
      },
      {
        name: 'totalPrice',
        type: 'number',
        title: 'Total Price',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: {
          list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        },
      },
    ],
  };
  