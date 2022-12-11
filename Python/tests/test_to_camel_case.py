from practices.to_camel_case import to_camel_case


def test_convert_to_camel_case():
    script_expects = [
        ("the-stealth-warrior", "theStealthWarrior"),
        ("The_Stealth_Warrior", "TheStealthWarrior"),
        ("", ""),
        ("A-B-C", "ABC"),
        ("A-Cat_was_Hungry", "ACatWasHungry"),
        ("a_Pippi-was-pippi", "aPippiWasPippi"),
        ("The_pippi-was_Savage", "ThePippiWasSavage"),
        ("The_PippiWasPippi", "ThePippiWasPippi"),
    ]

    for input, expect in script_expects:
        assert to_camel_case(input) == expect
