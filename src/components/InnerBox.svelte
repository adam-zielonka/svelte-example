<span>
  <slot />
</span>

<style>
  span {
    grid-column: 1 / 5 span;
    text-align: center;
    font-size: 30px;

    background-color: lightgreen;
    color: green;
    box-shadow: inset -2px -2px 7px 3px rgba(47, 121, 53, 0.3);

    border: 2px solid green;
    padding: 5px;
    border-radius: 15px;

    display: grid;
    grid-template-columns: 40px 1fr 40px;
    align-items: center;
  }
</style>
