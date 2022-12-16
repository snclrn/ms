import { createSignal } from "solid-js";
import Modal from "./Modal";

const Image = ({ src, date, paragraph }) => {
  const [openModal, setOpenModal] = createSignal(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <figure class="w-full p-2 bg-[#d8b895] border-t border-[#ddc1a2]">
          <div class="w-full bg-[#a58562]">
            <img src={src} alt="Image Asset" class="max-h-56 mx-auto" />
          </div>
          <figcaption class="mt-2 text-sm font-medium text-[#281b11]">
            {date}
          </figcaption>
        </figure>
      </button>

      {openModal() && (
        <Modal
          closeFunc={() => setOpenModal(false)}
          img={src}
          date={date}
          paragraph={paragraph}
        />
      )}
    </>
  );
};

export default Image;
