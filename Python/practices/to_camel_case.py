def discouver_separetor(string):
    if "-" in string:
        return "-"
    elif "_" in string:
        return "_"


def to_camel_case(string: str) -> str:
    separetor = discouver_separetor(string)

    if separetor:
        splited_phrase = string.split(separetor)

        for index in range(1, len(splited_phrase)):
            splited_phrase[index] = splited_phrase[index].capitalize()

        return "".join(splited_phrase)

    return string
