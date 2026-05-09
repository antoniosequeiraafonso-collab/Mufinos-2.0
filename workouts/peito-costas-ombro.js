window.WORKOUTS = window.WORKOUTS || [];

window.WORKOUTS.push({
  id: "peito-costas-ombro",
  name: "Peito, Costas & Ombro",
  description: "Treino focado em upper body: peito, costas, ombros e braços. Usa barra de elevações, halteres/kettlebell e peso corporal.",
  steps: [
    {
      id: "warmup-1",
      phase: "warmup",
      title: "Rotações de braços",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/07/Arm-Circles_Shoulders.gif",
      description: "Aquece ombros e prepara a articulação antes dos presses, flexões e elevações.",
      cues: ["Círculos controlados", "Ombros soltos", "Sem pressa"],
      medium: { duration: 45, prescription: "20s frente + 20s trás" },
      hard: { duration: 60, prescription: "30s frente + 30s trás" }
    },
    {
      id: "warmup-2",
      phase: "warmup",
      title: "Flexões escapulares",
      gif: "https://gymvisual.com/img/p/1/2/4/5/1/12451.gif",
      description: "Activa omoplatas e serrátil para proteger o ombro no treino.",
      cues: ["Braços esticados", "Só mexem as omoplatas", "Core apertado"],
      medium: { duration: 45, prescription: "10 reps" },
      hard: { duration: 60, prescription: "12 reps" }
    },
    {
      id: "warmup-3",
      phase: "warmup",
      title: "Dead hang",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/dead-hang.png",
      description: "Prepara grip, dorsais e ombros para as elevações.",
      cues: ["Mãos fortes", "Ombros activos", "Sem dor"],
      medium: { duration: 45, prescription: "2 x 20s" },
      hard: { duration: 60, prescription: "2 x 30s" }
    },
    {
      id: "warmup-4",
      phase: "warmup",
      title: "High plank",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2023/07/High-Plank.gif",
      description: "Liga o core e prepara a posição das flexões.",
      cues: ["Corpo em linha", "Glúteos contraídos", "Mãos debaixo dos ombros"],
      medium: { duration: 30, prescription: "1 x 30s" },
      hard: { duration: 45, prescription: "1 x 45s" }
    },
    {
      id: "pullup",
      phase: "main",
      title: "Elevações",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif",
      description: "Exercício principal de costas. Se não conseguires, faz negativas lentas.",
      cues: ["Sem balanço", "Peito em direcção à barra", "Desce controlado"],
      medium: { duration: 300, prescription: "3 séries x 5 reps" },
      hard: { duration: 360, prescription: "4 séries x 5 reps" }
    },
    {
      id: "pushup",
      phase: "main",
      title: "Flexões",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif",
      description: "Exercício principal de peito. Mantém o corpo rígido.",
      cues: ["Peito quase ao chão", "Cotovelos ligeiramente para trás", "Corpo em linha"],
      medium: { duration: 240, prescription: "3 séries x 15 reps" },
      hard: { duration: 300, prescription: "4 séries x 15 reps" }
    },
    {
      id: "row",
      phase: "main",
      title: "Remada unilateral",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif",
      description: "Mais volume para costas. Puxa o peso para a anca.",
      cues: ["Tronco estável", "Cotovelo para trás", "Controla a descida"],
      medium: { duration: 240, prescription: "3 séries x 12 por lado" },
      hard: { duration: 300, prescription: "4 séries x 12 por lado" }
    },
    {
      id: "shoulder-press",
      phase: "main",
      title: "Press militar",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
      description: "Exercício principal de ombros. Não arqueies a lombar.",
      cues: ["Barriga apertada", "Empurra acima da cabeça", "Desce controlado"],
      medium: { duration: 240, prescription: "3 séries x 10 reps" },
      hard: { duration: 300, prescription: "4 séries x 10 reps" }
    },
    {
      id: "lateral-raise",
      phase: "main",
      title: "Elevações laterais",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif",
      description: "Foco no deltóide lateral. Usa carga leve e controlo.",
      cues: ["Cotovelos suaves", "Não encolher ombros", "Sobe até linha dos ombros"],
      medium: { duration: 180, prescription: "3 séries x 12 reps" },
      hard: { duration: 240, prescription: "4 séries x 12 reps" }
    },
    {
      id: "incline-pushup",
      phase: "main",
      title: "Flexões inclinadas ou pés elevados",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Decline-Push-Up.gif",
      description: "Segundo estímulo de peito. Se pés elevados for pesado, faz normal.",
      cues: ["Corpo rígido", "Peito desce controlado", "Sem deixar a lombar cair"],
      medium: { duration: 180, prescription: "3 séries x 12 reps" },
      hard: { duration: 240, prescription: "4 séries x 12 reps" }
    },
    {
      id: "rear-delt-row",
      phase: "main",
      title: "Remada alta / rear delt row",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Delt-Row.gif",
      description: "Foco em parte de trás do ombro e postura.",
      cues: ["Cotovelos abrem ligeiramente", "Peso controlado", "Pescoço relaxado"],
      medium: { duration: 180, prescription: "3 séries x 12 reps" },
      hard: { duration: 240, prescription: "4 séries x 12 reps" }
    },
    {
      id: "biceps",
      phase: "main",
      title: "Bicep curl",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif",
      description: "Acabamento de bíceps após as puxadas.",
      cues: ["Cotovelos quietos", "Sem balanço", "Desce devagar"],
      medium: { duration: 180, prescription: "3 séries x 12 reps" },
      hard: { duration: 240, prescription: "4 séries x 12 reps" }
    },
    {
      id: "triceps",
      phase: "main",
      title: "Extensão de tríceps acima da cabeça",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Overhead-Triceps-Extension.gif",
      description: "Acabamento de tríceps para complementar peito e ombro.",
      cues: ["Cotovelos apontam para a frente", "Não abrir demasiado", "Movimento controlado"],
      medium: { duration: 180, prescription: "3 séries x 12 reps" },
      hard: { duration: 240, prescription: "4 séries x 12 reps" }
    },
    {
      id: "core-1",
      phase: "core",
      title: "High plank",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2023/07/High-Plank.gif",
      description: "Fecha com core e estabilidade de ombro.",
      cues: ["Mãos firmes", "Costas direitas", "Respiração controlada"],
      medium: { duration: 60, prescription: "2 x 30s" },
      hard: { duration: 90, prescription: "3 x 30s" }
    },
    {
      id: "core-2",
      phase: "core",
      title: "Dead bug",
      gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif",
      description: "Core lento e controlado para terminar.",
      cues: ["Lombar estável", "Movimento lento", "Braço e perna opostos"],
      medium: { duration: 60, prescription: "2 séries x 10 por lado" },
      hard: { duration: 90, prescription: "3 séries x 10 por lado" }
    }
  ]
});
