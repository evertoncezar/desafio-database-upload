import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface RequestDTO {
  transactions: Transaction[];
  balance: Balance;
}

class GetTransactionsService {
  public async execute(): Promise<RequestDTO> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactions = await transactionsRepository.find();
    const balance = await transactionsRepository.getBalance();

    return {
      transactions,
      balance,
    };
  }
}

export default GetTransactionsService;
