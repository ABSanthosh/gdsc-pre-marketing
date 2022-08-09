<script>
  import { Router, Route } from "svelte-routing";
  import Place from "./routes/Place/Place.svelte";
  export let url = "";
</script>

<svelte:head>
  <style lang="scss" src="./styles/global.scss"></style>
  <style lang="scss" src="./styles/fonts.scss"></style>
</svelte:head>

<Router {url}>
  <Route path="/:placeName" let:params><Place {params} /></Route>
</Router>
