import numpy as np
import matplotlib.pyplot as plt

# Data
aj_brown = [23.6, 19.9, 13.4, 5.6, 15.9, 11.5, 22.9, 11.6, 8.3, 25, 23.7, 12.6]
derrick_henry = [10.6, 16.6, 30.4, 35.9, 16.6, 25.2, 25.2, 14.7, 26.3, 14.1, 10.5, 14, 14.1, 6.7, 20.9, 24.5, 30.1]

def normal_pdf(x, mean, std):
    return (1 / (std * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - mean) / std) ** 2)

# Means & stds
mean_aj, std_aj = np.mean(aj_brown), np.std(aj_brown)
mean_henry, std_henry = np.mean(derrick_henry), np.std(derrick_henry)

# Curves
x = np.linspace(min(min(aj_brown), min(derrick_henry)), max(max(aj_brown), max(derrick_henry)), 1000)
plt.plot(x, normal_pdf(x, mean_aj, std_aj), 'b-', linewidth=2, label='Normal Fit (AJ Brown)')
plt.plot(x, normal_pdf(x, mean_henry, std_henry), 'r-', linewidth=2, label='Normal Fit (Derrick Henry)')

# Mean + std deviation markers
for mean, std, color, name in [
    (mean_aj, std_aj, 'blue', 'AJ Brown'),
    (mean_henry, std_henry, 'red', 'Derrick Henry')
]:
    # Mean
    plt.axvline(mean, color=color, linestyle='--', linewidth=2, label=f'{name} Mean')
    
    # ±1σ
    plt.axvline(mean - std, color=color, linestyle=':', linewidth=1, label=f'{name} -1σ')
    plt.axvline(mean + std, color=color, linestyle=':', linewidth=1, label=f'{name} +1σ')
    
    # ±2σ
    plt.axvline(mean - 2*std, color=color, linestyle='-.', linewidth=1, label=f'{name} -2σ')
    plt.axvline(mean + 2*std, color=color, linestyle='-.', linewidth=1, label=f'{name} +2σ')

# Labels
plt.title("Normal Curves with Mean ±1σ and ±2σ")
plt.xlabel("Fantasy Points")
plt.ylabel("Density")
plt.grid(True)

# Legend outside
plt.legend(loc='upper left', bbox_to_anchor=(1.05, 1), borderaxespad=0.)
plt.show()
