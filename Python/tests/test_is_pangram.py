from practices.is_pangram import is_pangram


def test_is_pagram_when_is_true():
    expect_scripts = [
        ("Cwm fjord bank glyphs vext quiz", True),
        ("The quick, brown fox jumps over the lazy dog!", True),
        ("Pack my box with five dozen liquor jugs.", True),
        ("How quickly daft jumping zebras vex.", True),
        ("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ", True),
    ]
    for phrase, expect in expect_scripts:
        assert is_pangram(phrase) == expect


def test_is_pagram_when_is_false():
    expect = False
    phrase = "1bcdefghijklmnopqrstuvwxyz"
    assert is_pangram(phrase) == expect
