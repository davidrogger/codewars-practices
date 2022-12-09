def solution(number: int) -> int:
    if number < 0:
        return 0

    total = 0

    while number > 0:
        number -= 1
        if number % 5 == 0 or number % 3 == 0:
            total += number

    return total
