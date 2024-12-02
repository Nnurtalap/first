import numpy as np
import matplotlib.pyplot as plt


def integrand(x):
    return np.sqrt(1.7 * x**2 + 0.5) / (1.4 + np.sqrt(1.2 * x + 1.3))

a, b = 0.7, 2.1


n = 10

x_left = np.linspace(a, b, n + 1)[:-1]  
dx = (b - a) / n
left_sum = np.sum(integrand(x_left) * dx)

x_right = np.linspace(a, b, n + 1)[1:] 
right_sum = np.sum(integrand(x_right) * dx)

n1 = 8
dx1 = (b - a) / n1
x_mid1 = np.linspace(a + dx1 / 2, b - dx1 / 2, n1)
mid_sum1 = np.sum(integrand(x_mid1) * dx1)


n2 = 10
dx2 = (b - a) / n2
x_mid2 = np.linspace(a + dx2 / 2, b - dx2 / 2, n2)
mid_sum2 = np.sum(integrand(x_mid2) * dx2)


print(f"Метод левых прямоугольников (n={n}): {left_sum:.5f}")
print(f"Метод правых прямоугольников (n={n}): {right_sum:.5f}")
print(f"Метод средних прямоугольников (n1={n1}): {mid_sum1:.5f}")
print(f"Метод средних прямоугольников (n2={n2}): {mid_sum2:.5f}")
print(f"Оценка точности (разница между n1 и n2 для метода средних прямоугольников): {abs(mid_sum2 - mid_sum1):.5e}")

x = np.linspace(a, b, 1000)
y = integrand(x)

plt.plot(x, y, label="Интегрируемая функция")
plt.bar(x_left, integrand(x_left), width=dx, alpha=0.3, align='edge', label="Левые прямоугольники")
plt.bar(x_right, integrand(x_right), width=-dx, alpha=0.3, align='edge', label="Правые прямоугольники")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.legend()
plt.title("Численное интегрирование методом прямоугольников")
plt.show()