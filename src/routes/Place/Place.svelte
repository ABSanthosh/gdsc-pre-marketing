<script>
  import BottomSheet from "../../Components/BottomSheet/BottomSheet.svelte";
  import GDSCLogo from "../../../public/assets/gdscLogo.png";
  import SquareStretch from "../../../public/assets/squareStretch.svg";
  import DiningGif from "../../../public/assets/DiningGif.png";
  import NoiceImg from "../../../public/assets/Noise.svg";
  import YetiHands from "../../../public/assets/yetiThumb.svg";

  import { user } from "../../lib/store.js";
  import GInput from "../../../src/Components/GInput/GInput.svelte";
  const post = "https://www.instagram.com/p/Celi7BaBIeH/";

  export let { params } = $$props;
  let userInfoSheet = true;

  const handleUser = () => {
    userInfoSheet = false;
  };
</script>

<div class="PlaceWrapper">
  {#if userInfoSheet}
    <BottomSheet on:submit={handleUser} />
  {/if}
  <div class="PlaceWrapper__top">
    <img class="PlaceWrapper__top--logo" src={GDSCLogo} />
    <img class="PlaceWrapper__top--squareStretch" src={SquareStretch} />
  </div>
  <div class="PlaceWrapper__heading">
    <h2>Hello, {$user.name}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur dolor sit adipiscing elit Ut et.
    </p>
  </div>

  <div class="PlaceWrapper__funfact">
    <h3>Welcome to <span>{params["placeName"]}</span></h3>
    <div class="PlaceWrapper__funfact--card">
      <img class="PlaceWrapper__funfact--placeImg" src={DiningGif} />
      <p>
        The dining hall with the most number of attractions for a foodie with
        evening snacks to midnight snacks.
      </p>
      <img class="PlaceWrapper__funfact--noise" src={NoiceImg} />
    </div>
  </div>

  <form
    class="PlaceWrapper__question"
    on:submit={(e) => {
      e.preventDefault();
      if (window.confirm("Thanks for answering the question!")) {
        window.location.href = post;
      }
    }}
  >
    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
      Aliquam in hendrerit urna. Pellentesque sit?
    </p>
    <GInput
      id="answer"
      label="Write your answer..."
      bind:value={$user.answers}
    />
    <div class="PlaceWrapper__question--buttonContainer">
      <img src={YetiHands} />
      <button type="submit">Submit</button>
    </div>
  </form>
</div>

<style lang="scss" src="./Place.scss"></style>
