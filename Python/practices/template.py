def base_template(phrase: str) -> str:
    return phrase


if __name__ == "__main__":
    assert base_template("testing") == "testing"
