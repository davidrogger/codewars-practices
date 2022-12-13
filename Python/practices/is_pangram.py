def is_pangram(phrase: str) -> bool:
    need_letters_to_be_pangram = set("abcdefghijklmnopqrstuvwxyz")

    for letter in need_letters_to_be_pangram:
        if letter not in phrase.lower():
            return False

    return True
