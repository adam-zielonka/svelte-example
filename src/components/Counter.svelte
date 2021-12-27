<script lang="ts">
  import Button from "./Button.svelte";
  import { deleteCounter, setCounter, updateCounter } from "../store";
  import Input from "./Input.svelte";
  import InnerBox from "./InnerBox.svelte";
  import Box from "./Box.svelte";

  export let value: number;
  export let index: number;
</script>

<Box>
  <InnerBox>
    <Input {value} onChange={newValue => setCounter(index, newValue)} />
    <Button hidden on:click={() => deleteCounter(index)}>X</Button>
  </InnerBox>
  <Button on:click={() => updateCounter(index, -100)}>-100</Button>
  <Button on:click={() => updateCounter(index, -1)}>-1</Button>
  <Button on:click={() => updateCounter(index, -value)}>0</Button>
  <Button on:click={() => updateCounter(index, +1)}>+1</Button>
  <Button on:click={() => updateCounter(index, +100)}>+100</Button>
</Box>
