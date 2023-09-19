// TypeScript-first schema validation with static type inference
// https://github.com/colinhacks/zod

import { z } from "zod";

export const extraIngredient = z.object({
  name: z.string(),
  price: z.number(),
});

export const extraIngredientsSchema = z.record(extraIngredient);

// Error finally given
// Something went wrong[ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "mushrooms", "price" ], "message": "Expected number, received string" } ]

// Then going network panel and looking at the response you get the following where you will see mushrooms.price being provided as a string.

// TypeScript check types only at compile time, so if the error happens at run time then things might get missed as in this case.

// {
//     "cheese": {
//       "name": "Cheese",
//       "price": 0.5
//     },
//     "peppers": {
//       "name": "Green and red bell pepper",
//       "price": 0.5
//     },
//     "pepperoni": {
//       "name": "Pepperoni",
//       "price": 0.75
//     },
//     "tomatoes": {
//       "name": "Tomatoes",
//       "price": 0.5
//     },
//     "olives": {
//       "name": "Olives",
//       "price": 0.6
//     },
//     "mushrooms": {
//       "name": "Mushrooms",
//       "price": "0.6"
//     }
//   }
