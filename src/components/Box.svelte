<div>
  <slot />
</div>

<style>
  div {
    background-color: rgb(252, 252, 140);

    border: 4px solid rgb(255, 165, 0);
    padding: 15px;
    margin: 30px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 5px rgba(241, 122, 43, 0.2),
      inset 0px 0px 7px 6px rgba(255, 165, 0, 0.7);

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
</style>
