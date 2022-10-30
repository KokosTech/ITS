using System;

namespace Collections
{
    internal class Program
    {
        static void PrintMatrix(int[,] matrix)
        {
            for(int i = 0; i < matrix.GetLength(0); ++i)
            {
                for(int j = 0; j < matrix.GetLength(1); ++j)
                {
                    Console.Write(matrix[i, j] + " ");
                }
                Console.WriteLine();
            }
            /*foreach (var data in matrix)
            {
                Console.Write(data  + " ");
            }*/
        }

        static void CmdOpr(int[,] matrix, string cmd)
        {
            var row = int.Parse(cmd[1].ToString());
            var col = int.Parse(cmd[3].ToString());
            var opr = cmd[5];
            var number = int.Parse(cmd[6].ToString());
            var res = 0;
            switch (opr)
            {
                case '+':
                    res = matrix[row, col] + number;
                    break;
                case '-':
                    res = matrix[row, col] - number;
                    break;
                case '*':
                    res = matrix[row, col] * number;
                    break;
                case '/':
                    res = matrix[row, col] / number;
                    break;
                default:
                    break;
            }

            Console.WriteLine(matrix[row, col].ToString() + opr + number + "=" + res);
        }

        static void Main(string[] args)
        {
            int[,] matrix = new int[3, 3] {
                { 1, 2, 3 }, 
                { 4, 5, 6 },
                { 7, 8, 9 } 
            };
            //PrintMatrix(matrix);
            string cmd = Console.ReadLine();
            while (cmd != "end")
            {
                CmdOpr(matrix, cmd);
                cmd = Console.ReadLine();
            }
            
        }
    }
}
