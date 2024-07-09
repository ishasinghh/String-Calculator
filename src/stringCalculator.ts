export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(delimiterMatch[1]);
        numbers = numbers.substring(delimiterMatch[0].length);
      }
    }

    const numArray = numbers.split(delimiter);
    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}
