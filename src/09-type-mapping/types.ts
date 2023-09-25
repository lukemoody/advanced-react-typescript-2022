import { z } from "zod";
import {
  extraIngredientSchema,
  extraIngredientsSchema,
  pizzaSchema,
} from "./schemas";

export type Pizza = z.infer<typeof pizzaSchema>;
export type ExtraIngredients = z.infer<typeof extraIngredientsSchema>;
export type ExtraIngredient = z.infer<typeof extraIngredientSchema>;

// export type PizzaOnOrder = {
//   name: string;
//   price: number;
//   extraIngredients: ExtraIngredient[];
// };

// Omit allows you to remove 'extras' from the ype in this example
// and `&` allows you to add on additional items
// export type PizzaOnOrder = Omit<Pizza, "extras"> & {
//   extraIngredients: ExtraIngredient[];
// };

// Pick will let you choose specific items out of types
// and & lets you add additonal items onto it
export type PizzaOnOrder = Pick<Pizza, "name" | "price"> & {
  extraIngredients: ExtraIngredient[];
};
