import numpy as np
from scipy.integrate import quad

def integrand(x):
    numerator = np.sqrt(1.2 * x + 0.7)
    denominator = 1.4 * x + np.sqrt(1.3 * x**2 + 0.5)
    return numerator / denominator

a, b = 1.2, 2.8
result = quad(integrand, a, b)

print("Результат интеграла:", result[0])
