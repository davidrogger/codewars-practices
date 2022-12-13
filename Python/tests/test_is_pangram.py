from practices.is_pangram import is_pangram


def test_is_pagram_when_is_true():
    expect = True
    phrase = "The quick, brown fox jumps over the lazy dog!"
    assert is_pangram(phrase) == expect


def test_is_pagram_when_is_false():
    expect = False
    phrase = "1bcdefghijklmnopqrstuvwxyz"
    assert is_pangram(phrase) == expect
