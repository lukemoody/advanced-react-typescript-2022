import { z } from "zod";
import {
  pizzaSchema,
  extraIngredientSchema,
  extraIngredientsSchema,
} from "./schemas";

// export type Pizza = {
//   name: string;
//   ingredients: string[];
//   price: number;
//   extras: string[];
// };
export type Pizza = z.infer<typeof pizzaSchema>;

// export type ExtraIngredients = Record<string, ExtraIngredient>;
export type ExtraIngredients = z.infer<typeof extraIngredientsSchema>;

// export type ExtraIngredient = {
//   name: string;
//   price: number;
// };
export type ExtraIngredient = z.infer<typeof extraIngredientSchema>;

export type PizzaOnOrder = {
  name: string;
  price: number;
  extraIngredients: ExtraIngredient[];
};

// By using ZOD here we are now using the same validation at compile and run time.
// Away of reducing duplication and to be able to rely on the same types
