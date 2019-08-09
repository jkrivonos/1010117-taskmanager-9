export const contantWrapper = () =>`<section class="board container">
${createFiltersPanel()} ${tasksWrapper()} ${createLoadMoreElement()}
</section>`;