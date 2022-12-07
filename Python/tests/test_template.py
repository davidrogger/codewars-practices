from practices.template import base_template


def test_template():
    expect = "testing"
    assert base_template("testing") == expect
