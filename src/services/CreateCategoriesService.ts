import { getCustomRepository } from 'typeorm';
import Category from '../models/Category';
import CategoriesRepository from '../repositories/CategoriesRepository';

class CreateCategoryService {
  public async execute(title: string): Promise<Category> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);

    const findCategory = await categoriesRepository.findByTitle(title);

    let newCategory: Category;

    if (!findCategory) {
      newCategory = categoriesRepository.create({ title });
      await categoriesRepository.save(newCategory);
    } else {
      newCategory = findCategory;
    }

    return newCategory;
  }
}

export default CreateCategoryService;
