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
    const negatives = numArray.filter((num) => parseInt(num, 10) < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}
