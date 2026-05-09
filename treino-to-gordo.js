window.WORKOUTS = window.WORKOUTS || [];

window.WORKOUTS.push({
  id: "treino-to-gordo",
  name: "Treino Tó Gordo",
  description: "Full body com aquecimento, força, braços e core. Ideal para repetir 3x por semana.",
  steps: [
    {
      id: "warmup-1",
      phase: "warmup",
      title: "Marcha rápida no sítio",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/08/High-Knee-Run.gif",
      description: "Sobe ligeiramente os joelhos e mexe os braços.",
      cues: ["Postura alta", "Respiração controlada", "Ritmo confortável"],
      medium: { duration: 30, prescription: "30 segundos contínuos" },
      hard: { duration: 30, prescription: "30 segundos contínuos" }
    },
    {
      id: "warmup-2",
      phase: "warmup",
      title: "Rotações de braços",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/07/Arm-Circles_Shoulders.gif",
      description: "Prepara ombros e parte superior.",
      cues: ["Braços esticados", "Círculos controlados", "Ombros relaxados"],
      medium: { duration: 30, prescription: "15s frente + 15s trás" },
      hard: { duration: 30, prescription: "15s frente + 15s trás" }
    },
    {
      id: "warmup-3",
      phase: "warmup",
      title: "Agachamento sem peso",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/05/bodyweight-squat-full-version.gif",
      description: "Aquece pernas, joelhos e ancas.",
      cues: ["Peito alto", "Calcanhares no chão", "Joelhos acompanham os pés"],
      medium: { duration: 45, prescription: "10 reps" },
      hard: { duration: 50, prescription: "12 reps" }
    },
    {
      id: "warmup-4",
      phase: "warmup",
      title: "Good morning sem peso",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2023/10/Dumbbell-Good-Morning.gif",
      description: "Prepara posterior da coxa, glúteos e lombar.",
      cues: ["Anca para trás", "Costas direitas", "Joelhos ligeiramente flectidos"],
      medium: { duration: 45, prescription: "10 reps" },
      hard: { duration: 50, prescription: "12 reps" }
    },
    {
      id: "warmup-5",
      phase: "warmup",
      title: "Flexões escapulares",
      gif: "https://gymvisual.com/img/p/1/2/4/5/1/12451.gif",
      description: "Activa omoplatas e serrátil. Braços sempre esticados.",
      cues: ["Braços esticados", "Só mexem as omoplatas", "Core apertado"],
      medium: { duration: 45, prescription: "10 reps" },
      hard: { duration: 50, prescription: "12 reps" }
    },
    {
      id: "warmup-6",
      phase: "warmup",
      title: "Prancha curta",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2023/07/High-Plank.gif",
      description: "Acorda o core antes dos exercícios principais.",
      cues: ["Corpo em linha recta", "Glúteos contraídos", "Lombar estável"],
      medium: { duration: 30, prescription: "1 x 30s" },
      hard: { duration: 40, prescription: "1 x 40s" }
    },
    {
      id: "warmup-7",
      phase: "warmup",
      title: "Dead hang",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/dead-hang.png",
      description: "Prepara mãos, dorsais e ombros para as elevações.",
      cues: ["Mãos fortes", "Ombros activos", "Sem dor no ombro"],
      medium: { duration: 45, prescription: "2 x 20s" },
      hard: { duration: 60, prescription: "2 x 30s" }
    },
    {
      id: "squat",
      phase: "main",
      title: "Heel Elevated Goblet Squat",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2025/07/Heel-Elevated-Goblet-Squat.gif",
      description: "Séries controladas. Prioridade: amplitude e técnica.",
      cues: ["Calcanhares elevados", "Peso junto ao peito", "Joelhos acompanham os pés"],
      medium: { duration: 240, prescription: "3 séries x 12 reps" },
      hard: { duration: 300, prescription: "4 séries x 12 reps" }
    },
    {
      id: "pullup",
      phase: "main",
      title: "Elevações",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif",
      description: "Se estiver pesado, faz negativas lentas.",
      cues: ["Sem balanço", "Peito em direcção à barra", "Pára antes da falha"],
      medium: { duration: 240, prescription: "3 séries x 5 reps" },
      hard: { duration: 300, prescription: "4 séries x 5 reps" }
    },
    {
      id: "pushup",
      phase: "main",
      title: "Flexões",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif",
      description: "Mantém boa forma. Joelhos no chão se a técnica cair.",
      cues: ["Corpo em linha recta", "Peito quase ao chão", "Cotovelos ligeiramente para trás"],
      medium: { duration: 240, prescription: "3 séries x 15 reps" },
      hard: { duration: 300, prescription: "4 séries x 15 reps" }
    },
    {
      id: "rdl",
      phase: "main",
      title: "Peso morto romeno",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif",
      description: "Posterior da coxa e glúteo. Reps lentas e limpas.",
      cues: ["Anca para trás", "Costas direitas", "Sente alongar atrás da coxa"],
      medium: { duration: 240, prescription: "3 séries x 12 reps" },
      hard: { duration: 300, prescription: "4 séries x 12 reps" }
    },
    {
      id: "row",
      phase: "main",
      title: "Remada unilateral",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif",
      description: "Alterna lado direito e esquerdo.",
      cues: ["Tronco estável", "Cotovelo para trás", "Não rodar o corpo"],
      medium: { duration: 240, prescription: "3 séries x 12 por lado" },
      hard: { duration: 300, prescription: "4 séries x 12 por lado" }
    },
    {
      id: "press",
      phase: "main",
      title: "Press militar",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
      description: "Empurra acima da cabeça com controlo.",
      cues: ["Barriga apertada", "Glúteos activos", "Desce controlado"],
      medium: { duration: 240, prescription: "3 séries x 10 reps" },
      hard: { duration: 300, prescription: "4 séries x 10 reps" }
    },
    {
      id: "biceps",
      phase: "main",
      title: "Bicep curl",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif",
      description: "Cotovelos perto do tronco, sem balançar o corpo.",
      cues: ["Cotovelos quietos", "Sobe controlado", "Desce devagar"],
      medium: { duration: 180, prescription: "3 séries x 12 reps" },
      hard: { duration: 240, prescription: "4 séries x 12 reps" }
    },
    {
      id: "core-1",
      phase: "core",
      title: "Prancha",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2023/07/High-Plank.gif",
      description: "Pranchas curtas e bem feitas.",
      cues: ["Corpo em linha recta", "Respiração controlada", "Abdómen firme"],
      medium: { duration: 60, prescription: "2 x 30s" },
      hard: { duration: 90, prescription: "3 x 30s" }
    },
    {
      id: "core-2",
      phase: "core",
      title: "Dead bug",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif",
      description: "Movimento lento, sem arquear a lombar.",
      cues: ["Lombar estável", "Braço e perna opostos", "Devagar"],
      medium: { duration: 60, prescription: "2 séries x 10 por lado" },
      hard: { duration: 90, prescription: "3 séries x 10 por lado" }
    }
  ]
});
