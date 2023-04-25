package main

func RomanToNumber(romans string) int {
	numbers := map[string]int{
		"M": 1000,
		"D": 500,
		"C": 100,
		"L": 50,
		"X": 10,
		"V": 5,
		"I": 1,
	}

	number, exists := numbers[romans]

	if exists {
		return number
	}

	sum := 0
	for _, letter := range romans {
		sum += numbers[string(letter)]
	}

	firstNumber := numbers[string(romans[0])]
	lastNumber := numbers[string(romans[len(romans)-1])]

	if lastNumber > firstNumber {
		return lastNumber - (sum - lastNumber)
	}

	return sum
}

func NumberToRoman(number int) string {
	romans := map[int]string{
		1000: "M",
		500:  "D",
		100:  "C",
		50:   "L",
		10:   "X",
		5:    "V",
		1:    "I",
	}

	roman, exists := romans[number]

	if exists {
		return roman
	}

	return "I"
}
