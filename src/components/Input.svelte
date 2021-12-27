<script lang="ts">
  export let value: number;
  export let onChange: (value: number) => void;
</script>

<input
  {value}
  on:input={e => {
    const newValue = +e.currentTarget.value;
    if (!isNaN(newValue)) {
      onChange(newValue);
    } else {
      e.currentTarget.value = `${value}`;
    }
  }}
/>

<style>
  input {
    grid-column: 2;
    border: none;
    background: none;
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 30px;
    color: green;
    width: 250px;
    border: none;
    outline: none;
  }
</style>
