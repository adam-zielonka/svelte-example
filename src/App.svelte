<script lang="ts">
  import Button from "./components/Button.svelte";
  import Counter from "./components/Counter.svelte";
  import Footer from "./components/Footer.svelte";
  import { addCounter, canAddMoreCounters, counters } from "./store";
  import SumCounter from "./components/Sum.svelte";
</script>

<main>
  <SumCounter />
  {#each $counters as value, index}
    <Counter {value} {index} />
  {/each}
  {#if $canAddMoreCounters}
    <Button on:click={addCounter}>+</Button>
  {/if}
  <Footer />
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  main {
    display: grid;
    place-items: center;
  }
</style>
