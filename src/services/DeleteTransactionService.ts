import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<any> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const findDelete = await transactionsRepository.findOne(id);

    if (!findDelete) {
      throw new AppError('Transaction not found!');
    }

    await transactionsRepository.delete(id);

    return {};
  }
}

export default DeleteTransactionService;
