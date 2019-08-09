export const tagsWrapper = (tags) => `<div class="card__hashtag">
<div class="card__hashtag-list">
      <span class="card__hashtag-inner">
        <span class="card__hashtag-name">
        </span>
      </span>
      ${tagElement(tags[0])}
      ${tagElement(tags[1])}
      ${tagElement(tags[2])}
</div>
</div>`;