# Treino Mufino 2.0

Estrutura do site:

```text
index.html
workouts.js
workouts/
  treino-to-gordo.js
  peito-costas-ombro.js
```

## Como publicar no GitHub Pages

1. Cria ou abre o teu repositório.
2. Mete estes ficheiros exactamente na mesma estrutura.
3. Vai a `Settings > Pages`.
4. Source: `Deploy from a branch`.
5. Branch: `main` e folder `/root`.
6. Save.

## Como adicionar um treino novo

1. Cria um ficheiro novo dentro da pasta `workouts`, por exemplo:

```text
workouts/pernas-core.js
```

2. Dentro desse ficheiro usa esta estrutura:

```js
window.WORKOUTS = window.WORKOUTS || [];

window.WORKOUTS.push({
  id: "pernas-core",
  name: "Pernas & Core",
  description: "Treino focado em pernas e core.",
  steps: [
    {
      id: "squat",
      phase: "main",
      title: "Goblet Squat",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2025/07/Heel-Elevated-Goblet-Squat.gif",
      description: "Séries controladas.",
      cues: ["Peito alto", "Desce controlado", "Joelhos acompanham os pés"],
      medium: { duration: 240, prescription: "3 séries x 12 reps" },
      hard: { duration: 300, prescription: "4 séries x 12 reps" }
    }
  ]
});
```

3. Abre o ficheiro `workouts.js` e adiciona uma linha:

```js
loadWorkoutFile("workouts/pernas-core.js");
```

## Notas

- `duration` é sempre em segundos.
- `phase` deve ser `warmup`, `main` ou `core`.
- O histórico fica guardado no browser via localStorage.
