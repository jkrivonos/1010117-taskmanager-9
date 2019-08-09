const tasksWrapper = () =>`<div class="board__tasks">
    ${taskElement(`Example default task with default color.`, `23 September`, `11:15`, `card--blue`, [`#popular`, `#important`, `#todo`])} 
    ${taskElement(`Example default task with custom color.`, `23 September`, `11:15`, `card--yellow`, [`#popular`, `#important`])} 
    ${taskElement(`Example default task with custom color and without date.`)} 
    </div>`;