import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BottomSheet from "../src/Components/BottomSheet/BottomSheet";
import GInput from "../src/Components/GInput/GInput";
import Spinner from "../src/Components/Spinner/Spinner";
import "../styles/routes/Place.scss";

export async function getServerSideProps(context) {
  const questions = [
    "Something that catches more attention when it is louder.",
    "What gets larger the more you take away from it?",
    "What's something that belongs to you but others tend to use it more than you?",
  ];

  const funFacts = {
    "a-block": {
      location: "A block",
      facts: ["Morning nightmare of boys."],
    },
    "c-block": {
      location: "C block",
      facts: ["I am the luckiest block I have food stalls on either sides."],
    },
    "d-block": {
      location: "D block",
      facts: [
        "Amazon packets are waiting for their owners!!!",
        "I am usually most preferred block by the clubs.",
      ],
    },
    library: {
      location: "Library",
      facts: [
        "The place where non-ac people come and hang out.",
        "You might be having a gala time here until the curator enters.",
      ],
    },
    arcade: {
      location: "Arcade",
      facts: ["Grocery store with so called ADIDAS showroom :)"],
    },
    "mini-mart": {
      location: "Mini Mart",
      facts: [
        "The place where you will always think “The other line moves faster.",
      ],
    },
    dh1: {
      location: "DH1",
      facts: ["Trust me! I am overcrowded mostly during 4-5."],
    },
    dh2: {
      location: "DH2",
      facts: [
        "Only SNU has No. 2 bigger than 3",
        "The only dh where we get curd:)",
      ],
    },
    dh3: {
      location: "DH3",
      facts: ["Cool atmosphere but its far better if you skip the meal."],
    },
    "hostel-1a": {
      location: "Hostel 1A",
      facts: ["I'm Hostel 1A"],
    },
    "hostel-1b": {
      location: "Hostel 1B",
      facts: [
        "Whenever you enter the lift you have to knock twice.",
        "Freshers getting freshing up for the college.",
        "Jadoo's(Dog’s name) territory.",
      ],
    },
    "hostel-2a": {
      location: "Hostel 2A",
      facts: ["I'm Hostel 2A"],
    },
    "hostel-2b": {
      location: "Hostel 2B",
      facts: ["I'm Hostel 2B"],
    },
    towers: {
      location: "Towers",
      facts: [
        "Girls judge each other for their dresses and makeup.",
        "Too lazy to go to the arcade?? Let's go to the tuck shops.",
      ],
    },
    isc: {
      location: "ISC",
      facts: [
        "The best place to enjoy the evenings play gossip enjoy eat and cheer!!",
        "Booking gym slot? or sleep?",
      ],
    },
    "snu-lake": {
      location: "SNU Lake",
      facts: [
        "One can view some amazing flora and fauna along with perfect sunrise and sunset.",
        "Everything except a lake:(",
      ],
    },
    dargah: {
      location: "DARGAH",
      facts: [
        "The place to find uncle, John.",
        "Students of different religions go and pray before the end of the semester.😂😂",
        "Mandatory spot to visit on a Saturday night out (but we aware of neel gaya 😉)",
      ],
    },
    "horse-stables": {
      location: "Horse Stables",
      facts: [
        "The place you can find the another lead of the famous Disney “secretariat” movie.",
      ],
    },
    "c-and-d": {
      location: "C&D",
      facts: [
        "I am suddenly loved even more when mess says “Lauki ki sabji in menu” today.",
        "The best place to chill with friends and sometimes professors too😂",
      ],
    },
  };
  return {
    props: {
      question: questions[Math.floor(Math.random() * questions.length)],
      funFacts: funFacts,
      factIndex: Math.floor(
        Math.random() * funFacts[context.params["place"]].facts.length
      ),
      place: context.params["place"],
    },
  };
}

export default function Home({ question, funFacts, factIndex, place }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  // const place = router.query.place;
  const [isDesktopSize, setIsDesktopSize] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [localData, setLocalData] = useState({
    name: "",
    email: "",
    majorAndYear: "1",
    answer: "",
    location: place,
  });
  const setData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  const post = "https://www.instagram.com/p/Celi7BaBIeH/";

  useEffect(() => {
    if (window.innerWidth >= 768) {
      localStorage.setItem("kfjen", "gghdnsd");
    }
    setIsDesktopSize(
      window.innerWidth >= 768 || localStorage.getItem("kfjen") === "gghdnsd"
    );
  }, []);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setLocalData({
        question: question,
        location: funFacts[place].location,
        ...JSON.parse(localStorage.getItem("data")),
      });
    }
  }, [isOpen]);

  return (
    <>
      {loadingScreen && (
        <div className="LoadingOverlay">
          <Spinner />
        </div>
      )}
      {!isDesktopSize && Object.keys(funFacts).includes(place) && (
        <div className="PlaceWrapper">
          <Head>
            <title>GDSC</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/assets/gdsc.png" />
          </Head>
          {isOpen ? (
            <BottomSheet setData={setData} setIsOpen={setIsOpen} />
          ) : (
            <>
              <div className="PlaceWrapper__top">
                <img
                  className="PlaceWrapper__top--logo"
                  src="/assets/gdscLogo.png"
                />
                <img
                  className="PlaceWrapper__top--squareStretch"
                  src="/assets/squareStretch.svg"
                />
              </div>
              <div className="PlaceWrapper__heading">
                <h2>Hello, {localData.name}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur dolor sit adipiscing
                  elit Ut et.
                </p>
              </div>

              <div className="PlaceWrapper__funfact">
                <h3>
                  Welcome to <span>{funFacts[place].location}</span>
                </h3>
                <div className="PlaceWrapper__funfact--card">
                  <img
                    className="PlaceWrapper__funfact--placeImg"
                    src="/assets/DiningGif.png"
                  />
                  <p>{funFacts[place].facts[factIndex]}</p>
                  <img
                    className="PlaceWrapper__funfact--noise"
                    src="/assets/Noise.svg"
                  />
                </div>
              </div>

              <form
                className="PlaceWrapper__question"
                onSubmit={(e) => {
                  e.preventDefault();
                  setData(localData);
                  setLoadingScreen(true);

                  if (localStorage.getItem("isFilled") === null) {
                    fetch("/api/excel", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(localData),
                    })
                      .then((r) => r.text())
                      .then((result) => {
                        setLoadingScreen(false);
                        localStorage.setItem("isFilled", "true");
                        if (
                          window.confirm("Thanks for answering the question!")
                        ) {
                          window.location.href = post;
                        }
                      })
                      .catch(() => {
                        window.alert("Some error occured. Please try again.");
                      });
                  } else {
                    if (
                      window.confirm(
                        "Looks right you have already filled it once. You can follow us on instagram though(if you haven't yet)"
                      )
                    ) {
                      window.location.href = post;
                    }
                  }
                }}
              >
                <h2>
                  Answer this question and get a chance to be featured during
                  GDSC orientation
                </h2>
                <p>
                  <i>{question}</i>
                </p>
                <GInput
                  id="answer"
                  label="Write your answer..."
                  pattern="*"
                  setValue={(e) => {
                    setLocalData({ ...localData, answer: e.target.value });
                  }}
                />
                <div className="PlaceWrapper__question--buttonContainer">
                  <img src="/assets/yetiThumb.svg" />
                  <button type="submit">Submit</button>
                </div>
              </form>
              <footer className="PlaceWrapper__footer">
                <span>
                  <img src="/assets/gdscLogo.png" />
                  <p>Google Developer Student Clubs</p>
                </span>
                <p>Shiv Nadar University</p>
              </footer>
            </>
          )}
        </div>
      )}
      {(isDesktopSize || !Object.keys(funFacts).includes(place)) && (
        <div className="DesktopOverLay">
          <span>
            <img className="DesktopOverLay__logo" src="/assets/gdscLogo.png" />
            <p>Google Developer Student Clubs</p>
          </span>
          <img
            className="DesktopOverLay__lostImg"
            src="/assets/desktopOverlay.png"
          />
          <p>
            {!Object.keys(funFacts).includes(place)
              ? "This place is not in SNU!"
              : "uhh you're not supposed to be accessing this in a desktop"}
          </p>
        </div>
      )}
    </>
  );
}
