export const createFiltersPanel = (filterName, count) =>`<section class="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__all" class="filter__label">
          ${filterName}<span class="filter__all-count"> ${count}</span></label
        >
      </section>
`;
