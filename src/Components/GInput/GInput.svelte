<script>
  export let { id, value, label, type = "text" } = $$props;

  function typeAction(node) {
    node.type = type;
  }
</script>

<div class="GInputWrapper">
  <input use:typeAction {id} placeholder=" " required autocomplete="off" bind:value />
  <label for={id}>{label}</label>
</div>

<style lang="scss" src="./GInput.scss"></style>
