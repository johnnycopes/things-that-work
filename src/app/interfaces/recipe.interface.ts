import { Ingredient } from './ingredient.interface';

interface Process {
  title?: string;
  steps: string[];
}

export interface Recipe {
  name: string;
  description?: string;
  serves?: number;
  ingredients: Ingredient[];
  instructions: Process[];
}
