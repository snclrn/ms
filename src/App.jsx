import {
  createEffect,
  createRenderEffect,
  createSignal,
  For,
  Show,
} from "solid-js";
import { Transition } from "solid-transition-group";
import data from "../data";
import emojis from "../emojis";
import headImg from "./assets/head-img.jpg";
import myLoveImg from "./assets/hehe.svg";
import Image from "./Image";

function App() {
  const [progress, setProgress] = createSignal(99);
  const [btnMessage, setBtnMessage] = createSignal("Click");
  const [openMail, setOpenMail] = createSignal(false);

  const handleOpenMail = () => {
    if (progress() < 100) {
      setProgress(progress() + Math.floor(Math.random() * 3));

      if (progress() >= 1) {
        setBtnMessage("Oops punuin mo muna hehe");
      }

      if (progress() > 20) {
        setBtnMessage("Go go go loveeee!!!");
      }

      if (progress() > 50) {
        setBtnMessage("You can do ittttt :3");
      }

      if (progress() > 60) {
        setBtnMessage("Almost there!!!");
      }

      if (progress() > 70) {
        setBtnMessage("Bagalan mo lang love ah");
      }

      if (progress() > 90) {
        setBtnMessage("Yeyyyy! Almost done naaa!!");
      }

      if (progress() > 95) {
        setBtnMessage("Thankyou :3");
      }

      if (progress() >= 100) {
        setBtnMessage("Open Mail");
      }
    } else {
      setOpenMail(true);
    }
  };

  return (
    <div class="font-[Quicksand] bg-[#ba966e] [background-image:url('/heart.png')] [background-size:2rem]">
      <div class="p-4 bg-[#d8b895] text-center text-[#281b11] pb-6">
        <img src={headImg} alt="Asset" class="rounded-xl mb-4" />
        <div class="mb-2 text-[#281b11] font-medium mb-6 border-b-2 border-[#281b11] w-max mx-auto pb-1">
          12/17/22
        </div>
        <h1 class="font-[Pacifico] text-3xl mb-4">
          Happy Monthsary, <br /> Love{" "}
          <img
            src={emojis.brown_heart}
            alt="heart"
            class="inline-block w-5 h-5 mb-1"
          />
        </h1>
        <h2>
          Click each picture and read some of the memories we had.{" "}
          <img
            src={emojis.smile}
            alt="smile"
            class="inline-block w-5 h-5 mb-1"
          />
        </h2>
      </div>
      <div class="p-3 mt-6">
        <fieldset class="border border-[#d8b895]">
          <legend class="text-center">
            <p class="bg-[#d8b895] mt-5 px-3 py-1 text-center text-2xl mb-6 text-[#281b11] font-[Pacifico]">
              Memorable pictures
            </p>
          </legend>
          <div class="gap-8 flex flex-col md:grid md:grid-cols-2">
            <For each={data}>
              {(item, i) => (
                <Image
                  src={item.img}
                  date={item.date}
                  paragraph={item.paragraph}
                />
              )}
            </For>
          </div>
          <div class="pt-16 -mt-1 border-[#7c6449]">
            <div class="px-2 bg-[#d8b895] border-t-2 border-[#d8b895] py-4 text-[#281b11] text-center text-lg font-semibold">
              Marami pang pictures, pero late ko na nagawa to and ilang oras na
              lang before monthsary natin. So bibitinin muna kita hehe
            </div>
          </div>
          <div class="pt-16 -mt-1 border-[#7c6449]">
            <div class="px-2 bg-[#d8b895] border-t-2 border-[#d8b895] py-4 text-[#281b11] text-center text-lg font-semibold">
              Thankyou for scrolling all the way to here.
            </div>
          </div>
          <div class="pt-16 -mt-1 border-[#7c6449]">
            <div class="px-2 bg-[#d8b895] border-t-2 border-[#d8b895] py-4 text-[#281b11] text-center text-lg font-semibold">
              To be honest, everyday has been a memorable day since you've been
              with me.
            </div>
          </div>
          <div class="pt-16 -mt-1 border-[#7c6449]">
            <div class="px-2 bg-[#d8b895] border-t-2 border-[#d8b895] py-4 text-[#281b11] text-center text-lg font-semibold">
              I love you so much.
              <img
                src={emojis.heart}
                alt="smile"
                class="inline-block w-5 h-5 ml-1"
              />
            </div>
          </div>
        </fieldset>
      </div>
      <div class="bg-[#d8b895] mt-20 pb-10 pt-3 text-[#281b11] text-center">
        <p class="text-center my-4 text-2xl font-[Pacifico]">Lastly</p>
        {openMail()
          ? "Please read this letter I wrote for you."
          : "I want you to open this mail."}
        <div class="p-2">
          {!openMail() && (
            <div class="bg-gradient-to-r from-rose-500 mb-6 rounded-full to-indigo-500 p-0.25">
              <button
                onClick={handleOpenMail}
                class="relative block w-full text-white font-medium rounded-full overflow-hidden bg-[#7c6449]"
              >
                <p class="w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {btnMessage()}
                </p>
                <div
                  style={{
                    width: progress() + "%",
                  }}
                  class="bg-gradient-to-r from-rose-500 to-rose-600 rounded-full duration-200 py-5"
                ></div>
              </button>
            </div>
          )}
          <Transition
            onExit={(el, done) => {
              const a = el.animate(
                [
                  { opacity: 1, transform: "translate(0, 0)" },
                  { opacity: 0, transform: "translate(0, 40px)" },
                ],
                {
                  duration: 500,
                }
              );

              a.finished.then(done);
            }}
          >
            {!openMail() && (
              <div class="border border-dashed border-[#7C6449] p-4 bg-[#cfa77b]">
                <p class="text-2xl underline underline-offset-4 mb-4 font-[Pacifico] text-[#281b11]">
                  A letter for my love
                </p>

                <img src={myLoveImg} alt="My Love" class="mb-6 w-56 mx-auto" />

                <div class="font-[Pacifico] flex justify-between">
                  <p>{"From Aeron <3"}</p>

                  <p>12/17/22</p>
                </div>
              </div>
            )}
          </Transition>

          <Transition
            onEnter={(el, done) => {
              const a = el.animate(
                [
                  { opacity: 0, transform: "translate(0, 40px)" },
                  { opacity: 1, transform: "translate(0, 0)" },
                ],
                {
                  duration: 500,
                }
              );

              a.finished.then(done);
            }}
          >
            {openMail() && (
              <div class="border border-dashed border-[#7C6449] p-4 bg-[#cfa77b]">
                <p class="text-2xl underline-offset-4 mb-4 font-[Pacifico] text-[#281b11]">
                  A letter for my love
                </p>
                <p class="mb-2 font-medium font-[Pacifico]">12/17/22</p>

                <p>
                  <span>Dear Love,</span>
                  <br />
                  Happy Monthsary, Love! First of all, I want to thank you from
                  the very bottom of my heart. Thank you for loving me, trusting
                  in me, and having faith in me. I didn't expect na aabot tayo
                  sa ganto, parang dati lang nag t-tyempuhan lang sa pag online
                  around 7:30pm - 9pm pero ngayon may pa 'I love you' na. Ever
                  since I've met you, my day always starts great, thank you for
                  being a part of my life love. And since ikaw lang lagi kausap
                  ko whole day everyday, I don't know how will I start my day
                  without you. I fall in love with you even more each day. I
                  love how you give all of your attention to me, though
                  sometimes it scares me that I might bore you one day. I also
                  love how you assure me, yung tipong sasabihin mo na lahat para
                  lag hindi ako mag-overthink. I'm also not going to get tired
                  of calling you pretty because as the day goes by, you get more
                  prettier. I love your eyes, smile, laugh — everything, they
                  are perfect. Thank you for staying with me when times our
                  situation gets tough, kahit na nag-aaway tayo lagi ka pa rin
                  nandyan and ready ako na kausapin. Please don't ever think
                  that you don't have anyone in this world, because I am here, I
                  will always be by your side. When you're dealing with some
                  problems, don't deal with them alone, I'm here with you to
                  deal with all the problems, haharapin natin lahat yan ng sabay
                  love. You will always be my sure thing love, please be my
                  forever. I love you so much
                </p>

                <div class="mt-4 font-[Pacifico]">
                  <p>Sincerely,</p>
                  <p>Aeron</p>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
}

export default App;
