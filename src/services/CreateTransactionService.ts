import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateCategoriesService from './CreateCategoriesService';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: RequestDTO): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    // não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa
    if (type === 'outcome') {
      const getTotalBalance = await transactionsRepository.getBalance();

      if (value > getTotalBalance.total) {
        throw new AppError('Transaction without a valid balance!', 400);
      }
    }

    const categoryService = new CreateCategoriesService();
    const findCategory = await categoryService.execute(category);

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category_id: findCategory.id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
