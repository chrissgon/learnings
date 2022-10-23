package main

import "testing"

func TestRomanToNumber(t *testing.T) {
	want := 1120
	got := RomanToNumber("MCXX")

	if got != want {
		t.Errorf("want %v, but got %v", want, got)
	}
}
func TestNumberToRoman(t *testing.T) {
	want := "V"
	got := NumberToRoman(5)

	if got != want {
		t.Errorf("want %v, but got %v", want, got)
	}
}
