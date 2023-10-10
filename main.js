document.addEventListener("DOMContentLoaded", function () {
    const listaTarefas = document.getElementById("lista-tarefas");
    const novaTarefaInput = document.getElementById("nova-tarefa");
    const adicionarTarefaBotao = document.getElementById("adicionar-tarefa");

    adicionarTarefaBotao.addEventListener("click", function () {
        const novaTarefaTexto = novaTarefaInput.value.trim();

        if (novaTarefaTexto !== "") {
            const novaTarefaItem = document.createElement("li");
            novaTarefaItem.textContent = novaTarefaTexto;

            novaTarefaItem.addEventListener("click", function () {
                novaTarefaItem.classList.toggle("ok"); 
            });

            listaTarefas.appendChild(novaTarefaItem);

            novaTarefaInput.value = "";
        }
    });
});