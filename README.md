# Creating template

Each challenge will be archive by branch, this mean each branch will have a different readme with the challenge statement, having this main as a base to develop all challenges as the time goes the template can be changed to better perform the challenges.

# Python diretory

The diretory has a dev-requirements file with the models need it to develop the challenge in the virtual environment.

steps used:
1. python3 -m venv .venv && source ./venv/bin/activate
2. pip install black flake8 pytest
3. pip freeze
4. create file dev-requirements.txt added installations with there versions
5. create diretory tests, with the file test_template.py with a template tests
6. create diretory practices, with the file template.py, with the feature to test.
