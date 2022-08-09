<script>
  import GDSCLogo from "../../../public/assets/gdscLogo.png";
  import GInput from "../GInput/GInput.svelte";
  import { user } from "../../lib/store.js";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<div class="BottomSheetWrapper">
  <form
    class="BottomSheetWrapper__form"
    on:submit={(e) => {
      e.preventDefault();
      dispatch("submit");
    }}
  >
    <div class="BottomSheetWrapper__form--top">
      <img src={GDSCLogo} />
      <h3>Register</h3>
      <p>Use your Shiv Nadar University Account</p>
    </div>
    <div class="BottomSheetWrapper__form--inputs">
      <GInput id="name" label="Name" bind:value={$user.name} />
      <GInput
        id="snuId"
        type="email"
        label="SNU Net Id"
        bind:value={$user.email}
      />
      <!-- <GInput
        id="majorAndYear"
        label="Major and Year"
        bind:value={$user.majorAndYear}
      /> -->
      <select>
        <option value="1" selected={$user.majorAndYear === "1"}>1st Year</option
        >
        <option value="2" selected={$user.majorAndYear === "2"}>2nd Year</option
        >
        <option value="3" selected={$user.majorAndYear === "3"}>3rd Year</option
        >
        <option value="4" selected={$user.majorAndYear === "4"}>4th Year</option
        >
      </select>
    </div>
    <p class="BottomSheetWrapper__form--terms">
      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. dolor sit
      <a href="#">Learn more</a>
    </p>
    <div class="BottomSheetWrapper__form--buttonContainer">
      <button type="submit">Next</button>
    </div>
  </form>
</div>

<style lang="scss" src="./BottomSheet.scss"></style>
