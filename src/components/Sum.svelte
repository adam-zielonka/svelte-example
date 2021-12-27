<script lang="ts">
  import { sum } from "../store";
  import Box from "./Box.svelte";
  import InnerBox from "./InnerBox.svelte";
</script>

<div>
  <Box>
    <InnerBox>
      <span>
        {$sum}
      </span>
    </InnerBox>
  </Box>
</div>

<style>
  span {
    grid-column: 2;
  }

  div {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 35px;
  }
</style>
