from practices.multiples import solution


def test_solution_positive_number():
    expect = 23
    assert solution(10) == expect


def test_solution_negative_number():
    expect = 0
    assert solution(-10) == expect
