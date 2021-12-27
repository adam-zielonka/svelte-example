<script lang="ts">
  export let hidden: boolean = false;
</script>

<button class={hidden && "hidden"} on:click><slot /></button>

<style>
  .hidden {
    background: none;
    border: none;
    box-shadow: none;
    color: #90ee90;
  }

  .hidden:hover {
    color: black;
    font-size: 20px;
    border-radius: 100px;
    border: 2px solid rgb(42, 42, 156);
    background-color: rgb(175, 219, 247);
    cursor: pointer;
    outline: none;
    box-shadow: 2px 2px 2px 2px rgba(42, 42, 156, 0.2);
  }

  button {
    font-size: 20px;
    border-radius: 100px;
    border: 2px solid rgb(42, 42, 156);
    background-color: rgb(175, 219, 247);
    cursor: pointer;
    outline: none;
    box-shadow: 2px 2px 2px 2px rgba(42, 42, 156, 0.2);
  }

  button:hover {
    background-color: white;
  }

  button:active,
  .hidden:active {
    background-color: red;
    border-color: red;
    color: white;
    box-shadow: none;
  }
</style>
