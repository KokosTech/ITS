using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

namespace SudokuSharp
{
    public struct Cell
    {
        public const int Unknown = -1;
        public int Value;
        public int Possible;

        public Cell(int value)
        {
            if (value != Unknown && (value < 0 || value > 8))
                throw new ArgumentOutOfRangeException(nameof(value));
            Value = value;
            Possible = value != Unknown
                ? 1 << value
                : (1 << 9) - 1;
        }

        public bool Set(int value)
        {
            if (Value != Unknown)
                return false;
            Value = value;
            return true;
        }

        public bool TryRemovePossible(int value)
        {
            int mask = 1 << value;
            if ((Possible & mask) == 0u || Value != Unknown)
                return false; // already known

            Possible &= ~mask;
            CheckPossible();
            return true;
        }

        public bool CheckPossible()
        {
            // count ones (number of possibilities left)
            int ones = Utils.CountOnes(Possible);

            if (ones != 1 || Value != Unknown)
                return false;

            Value = GetOnlyPossibleValue();
            return true;

        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public bool IsPossible(int value)
        {
            return (Possible & (1 << value)) != 0;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private int GetOnlyPossibleValue()
        {
            switch (Possible)
            {
                case 0x001: return 0;
                case 0x002: return 1;
                case 0x004: return 2;
                case 0x008: return 3;
                case 0x010: return 4;
                case 0x020: return 5;
                case 0x040: return 6;
                case 0x080: return 7;
                case 0x100: return 8;
                default: return Unknown;
            }
        }
    }
}

namespace SudokuSharp
{
    internal static class HiddenSolver
    {
        public static bool Solve<T>(Span<Cell> cells, ref T indexer)
            where T : struct, IIndexer
        {
            Span<int> possRows = stackalloc int[9];
            bool changed = false;
            for (int major = 0; major < 9; major++)
            {
                int any = 0; // bit is 1 if any cells have that possibility
                int ovr = 0; // bit is 1 once a second cell has it
                for (int minor = 0; minor < 9; minor++)
                {
                    int i = indexer.Get(major, minor);
                    Cell cell = cells[i];
                    int pos = cell.Possible;
                    if (cell.Value != Cell.Unknown)
                    {
                        // value already exists, take it out of contention
                        possRows[minor] = 0;
                        ovr |= pos;
                    }
                    else
                    {
                        possRows[minor] = pos;
                        ovr |= any & pos;
                    }
                    any |= pos;
                }
                int uniqs = any ^ ovr;
                if (uniqs != 0)
                {
                    // there are bits in any that are not in ovr
                    // second pass, find cells with unique possibles
                    for (int minor = 0; minor < 9; minor++)
                    {
                        int p = possRows[minor] & uniqs;
                        if (p != 0)
                        {
                            // cell has unique possible
                            int i = indexer.Get(major, minor);
                            cells[i].Possible = p;
                            changed |= cells[i].CheckPossible();
                        }
                    }
                }
            }
            return changed;
        }
    }
}

namespace Sudoku
{
    public delegate bool Del();

    public struct CellCoordinate
    {
        public int row;
        public int column;


        public CellCoordinate(int row, int column)
        {
            if (row < 0 || row > 9 || column < 0 || column > 9)
                throw new ArgumentOutOfRangeException();

            this.row = row;
            this.column = column;
        }

        public void init()
        {
            row = 0;
            column = 0;
        }

        public void Randomize()
        {
            Random random = new Random();

            row = random.Next(0, 9);
            column = random.Next(0, 9);
        }

        public bool MoveToNextCellInGrid()
        {
            if (column < 8)
            {
                column++;
                return true;
            }

            if (row < 8)
            {
                column = 0;
                row++;
                return true;
            }

            return false;
        }

        public bool MoveToNextCellInRow()
        {
            if (column < 8)
            {
                column++;
                return true;
            }

            return false;
        }

        public bool MoveToNextCellInColumn()
        {
            if (row < 8)
            {
                row++;
                return true;
            }

            return false;
        }

        public bool MoveToNextCellInBlock()
        {
            int columnInBlock = column % 3;
            int rowInBlock = row % 3;

            if (columnInBlock < 2)
            {
                column++;
                return true;
            }

            if (rowInBlock < 2)
            {
                column = (column / 3) * 3;
                row++;
                return true;
            }

            return false;

        }

    }
}

namespace Sudoku
{
    class SudokuBoard
    {
        int iterations = 0;
        int[,] board = new int[9, 9];

        public void Print()
        {
            //            System.Threading.Thread.Sleep(1);
            System.Console.Clear();
            /* 
            board[3, 3] = 0;
          board[3, 4] = 0;
          board[3, 5] = 7;
*/
            for (int i = 0; i < 9; i++)
            {
                if (i % 3 == 0)
                    System.Console.Write("+-------+-------+-------+" + Environment.NewLine);

                for (int j = 0; j < 9; j++)
                {
                    if (j % 3 == 0)
                        System.Console.Write("| ");

                    if (board[i, j] == 0)
                        System.Console.Write("  ");
                    else
                        System.Console.Write(board[i, j] + " ");
                }
                System.Console.Write("|" + Environment.NewLine);
            }
            System.Console.Write("+-------+-------+-------+" + Environment.NewLine);
            System.Console.WriteLine(iterations);

        }

        public void GenerateSimple()
        {
            for (int i = 0; i < 81; i++)
            {
                int value = i;
                value += 3 * (i / 9);   // Shift rows
                value += i / 27;      // Shift on block (3 rows)
                value %= 9;
                value++;

                board[i / 9, i % 9] = value;
            }
        }


        private bool Verify(Del handler)
        {
            HashSet<int> used = new HashSet<int>();

            do
            {
                if (IsCellEmpty((CellCoordinate)handler.Target))
                    continue;

                if (!used.Add(GetCell((CellCoordinate)handler.Target)))
                    return false;

            } while (handler());

            return true;
        }

        public bool VerifyRow(int rowNumber)
        {
            CellCoordinate cell = new CellCoordinate(rowNumber, 0);
            Del handler = cell.MoveToNextCellInRow;

            return Verify(handler);
        }

        public bool VerifyColumn(int columnNumber)
        {
            CellCoordinate cell = new CellCoordinate(0, columnNumber);
            Del handler = cell.MoveToNextCellInColumn;

            return Verify(handler);
        }

        public bool VerifyBlock(int blockNumber)
        {
            int rowOffset = (blockNumber / 3) * 3;
            int columnOffset = (blockNumber % 3) * 3;

            CellCoordinate cell = new CellCoordinate(rowOffset, columnOffset);
            Del handler = cell.MoveToNextCellInBlock;

            return Verify(handler);
        }

        public void SwapRows(int row1, int row2)
        {
            int tmp;

            for (int i = 0; i < 9; i++)
            {
                tmp = board[row1, i];
                board[row1, i] = board[row2, i];
                board[row2, i] = tmp;
            }

        }

        public void SwapColumns(int column1, int column2)
        {
            int tmp;

            for (int i = 0; i < 9; i++)
            {
                tmp = board[i, column1];
                board[i, column1] = board[i, column2];
                board[i, column2] = tmp;
            }

        }

        public void SwapRowBlocks(int blockRow1, int blockRow2)
        {
            int rowOffset1 = blockRow1 * 3;
            int rowOffset2 = blockRow2 * 3;

            for (int i = 0; i < 3; i++)
            {
                SwapRows(rowOffset1 + i, rowOffset2 + i);
            }


        }

        public void DeleteRandomCells(int numberOfCellsToDelete)
        {

            foreach (int i in Enumerable.Range(1, numberOfCellsToDelete))
                DeleteRandomCell();
        }

        public void DeleteRandomCell()
        {
            CellCoordinate cell = new CellCoordinate();

            do
            {
                cell.Randomize();

            } while (IsCellEmpty(cell));

            ClearCell(cell);
        }

        public bool VerifyBoard()
        {
            for (int i = 0; i < 9; i++)
            {
                if ((VerifyRow(i) & VerifyColumn(i) & VerifyBlock(i)) == false)
                    return false;
            }
            return true;
        }

        public bool setField()
        {
            iterations++;
            Print();
            for (int i = 0; i < 9; i++)
                for (int j = 0; j < 9; j++)
                {
                    if (board[i, j] != 0)
                        continue;

                    int n;
                    for (n = 0; n < 9; n++)
                    {
                        board[i, j] = n + 1;
                        if (!VerifyBoard())
                            continue;

                        if (setField())
                            break;
                    }

                    if (n == 9)
                    {
                        board[i, j] = 0;
                        return false;
                    }
                }

            return true;

        }

        public void Solve()
        {
            CellCoordinate cell = new CellCoordinate();

            FillBoard(cell);

        }

        public void SetCell(CellCoordinate cell, int value)
        {
            board[cell.row, cell.column] = value;
        }

        public int GetCell(CellCoordinate cell)
        {
            return board[cell.row, cell.column];
        }

        public bool IncreaseCellValue(CellCoordinate cell)
        {
            if (board[cell.row, cell.column] < 9)
            {
                board[cell.row, cell.column]++;
                return true;
            }

            board[cell.row, cell.column] = 0;

            return false;
        }

        public void ClearCell(CellCoordinate cell)
        {
            board[cell.row, cell.column] = 0;
        }

        public bool IsCellEmpty(CellCoordinate cell)
        {
            return board[cell.row, cell.column] == 0;
        }

        public bool TrySetCell(CellCoordinate cell, int value)
        {
            SetCell(cell, value);

            return VerifyBoard();

        }

        public bool FillBoard(CellCoordinate cell)
        {

            if (IsCellEmpty(cell))
            {
                iterations++;

                foreach (int value in Enumerable.Range(1, 9))
                {
                    if (!TrySetCell(cell, value))
                        continue;

                    Print();

                    if (FillBoard(cell))
                        return true;

                }

                ClearCell(cell);

                return false;
            }

            if (cell.MoveToNextCellInGrid())
                return FillBoard(cell);
            return true;

        }

    }
}

namespace Sudoku
{
    class Program
    {
        static void Main(string[] args)
        {

            var board = new SudokuBoard();

            board.GenerateSimple();
            board.Print();


            board.SwapRows(0, 2);
            board.SwapColumns(0, 1);
            board.SwapRows(3, 4);
            board.SwapColumns(3, 5);
            board.SwapRows(7, 8);
            board.SwapRowBlocks(0, 1);
            board.SwapColumns(7, 8);
            board.SwapRowBlocks(1, 2);
            board.SwapColumns(1, 2);

            board.SwapRows(0, 2);
            board.SwapColumns(0, 1);
            board.SwapRows(3, 4);
            board.SwapColumns(3, 5);
            board.SwapRows(7, 8);
            board.SwapRowBlocks(0, 1);
            board.SwapRows(7, 8);
            board.SwapRowBlocks(0, 1);
            board.SwapColumns(7, 8);
            board.SwapRowBlocks(1, 2);
            board.SwapColumns(1, 2);

            board.SwapRows(0, 2);
            board.SwapColumns(0, 1);
            board.SwapRows(3, 4);
            board.SwapColumns(3, 5);
            board.SwapRows(7, 8);
            board.SwapRowBlocks(0, 1);
            board.SwapColumns(7, 8);
            board.SwapRowBlocks(1, 2);
            board.SwapColumns(1, 2);

            board.SwapRows(0, 2);
            board.SwapColumns(0, 1);
            board.SwapRows(3, 4);
            board.SwapColumns(3, 5);
            board.SwapRows(7, 8);
            board.SwapRowBlocks(0, 1);
            board.SwapColumns(7, 8);
            board.SwapRowBlocks(1, 2);
            board.SwapColumns(1, 2);

            board.SwapColumns(0, 1);
            board.SwapColumns(0, 2);
            board.SwapRows(0, 1);

            board.DeleteRandomCells(81 - 30);

            board.Print();

            board.Solve();

        }
    }
}
