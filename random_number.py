import random

def generate_random_number():
    return random.randint(1, 100)

if __name__ == "__main__":
    input("Press Enter to generate a random number between 1 and 100. ")
    print(f"Random number: {generate_random_number()}")