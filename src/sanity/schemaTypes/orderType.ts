import { BasketIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
    },
    {
      name: "itemsOrdered",
      title: "Items Ordered",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "itemName",
              title: "Item Name",
              type: "string",
            },
            {
              name: "itemQuantity",
              title: "Quantity",
              type: "number",
            },
            {
              name: "itemPrice",
              title: "Price",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Canceled", value: "canceled" },
        ],
      },
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "customerName",
      subtitle: "orderStatus",
      media: "icon", // This can be customized, here we use the BasketIcon
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || "Unnamed Order",
        subtitle: subtitle || "No status",
        media: media || BasketIcon,
      };
    },
  },
});
