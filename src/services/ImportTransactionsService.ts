import csvParse from 'csv-parse';
import fs from 'fs';

import Transaction from '../models/Transaction';
import AppError from '../errors/AppError';
import CreateTransactionService from './CreateTransactionService';

class ImportTransactionsService {
  async execute(csvFilePath: string): Promise<Transaction[]> {
    const readCSVStream = fs.createReadStream(csvFilePath);
    const parseStream = csvParse({
      from_line: 2, // descarta a 1a linha do arquivo
      ltrim: true, // Remover espaços desnecessários
      rtrim: true, // Remover espaços desnecessários
    });

    const parseCSV = readCSVStream.pipe(parseStream);
    const transactions: Transaction[] = [];
    const createTransactionService = new CreateTransactionService();
    const lines: any[] = [];

    try {
      // layout do arquivo csv title, type, value, category
      parseCSV.on('data', async line => {
        lines.push(line);
      });

      await new Promise(resolve => {
        parseCSV.on('end', resolve);
      });

/*       lines.forEach(async line => {
        const transaction = await createTransactionService.execute({
          title: line[0],
          type: line[1],
          value: line[2],
          category: line[3],
        });
        transactions.push(transaction);
      }); */

       for (let index = 0; index < lines.length; index++) {
        const line = lines[index];

        const transaction = await createTransactionService.execute({
          title: line[0],
          type: line[1],
          value: line[2],
          category: line[3],
        });
        transactions.push(transaction);
      }

      return transactions;
    } catch (error) {
      throw new AppError('Error on the csv file import');
    }
  }
}

export default ImportTransactionsService;
