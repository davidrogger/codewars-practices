def replace(caracter: str, string: str) -> None:
    splited_string = string.split(caracter)

    for index in range(1, len(splited_string)):
        first_letter = splited_string[index][0]
        capitalize = first_letter.upper()
        splited_string[index] = capitalize + splited_string[index][1:]

    return "".join(splited_string)


def to_camel_case(string: str) -> str:
    target_caracters = ["-", "_"]

    if "-" in string or "_" in string:
        for caracter in target_caracters:
            new_string = replace(caracter, string)
            string = new_string

    return string
