window.WORKOUTS = [];

/*
  Para adicionar novo treino:
  1) Cria um ficheiro em /workouts, por exemplo workouts/treino-novo.js
  2) Nesse ficheiro faz: window.WORKOUTS.push({ ... })
  3) Adiciona aqui uma linha com loadWorkoutFile("workouts/treino-novo.js");
*/

function loadWorkoutFile(path) {
  document.write('<script src="' + path + '"><\/script>');
}

loadWorkoutFile("workouts/treino-to-gordo.js");
loadWorkoutFile("workouts/peito-costas-ombro.js");
