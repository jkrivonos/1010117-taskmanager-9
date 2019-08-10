export const tasksWrapper = () =>`<div class="board__tasks">
    ${taskElement(`Example default task with default color.`, `23 September`, `11:15`, `card--blue`)} 
    ${taskElement(`Example default task with custom color.`, `23 September`, `11:15`, `card--yellow`)} 
    ${taskElement(`Example default task with custom color and without date.`)} 
    <!--$\{taskElement(\`Example default task with default color.\`, \`23 September\`, \`11:15\`, \`card&#45;&#45;blue\`, [\`#popular\`, \`#important\`, \`#todo\`])} -->
    <!--$\{taskElement(\`Example default task with custom color.\`, \`23 September\`, \`11:15\`, \`card&#45;&#45;yellow\`, [\`#popular\`, \`#important\`])} -->
    <!--$\{taskElement(\`Example default task with custom color and without date.\`)} -->
    </div>`;
