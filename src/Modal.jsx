const Modal = ({ img, paragraph, date, closeFunc }) => {
  return (
    <div
      onclick={closeFunc}
      class="fixed bg-black/80 z-[100] flex items-center px-2 inset-0"
    >
      <div onclick={(e) => e.stopPropagation()} class="bg-[#d8b895] p-2 pb-6">
        <div class="items-center mb-2 flex justify-between">
          <p class="text-sm font-medium">{date}</p>
          <button onclick={closeFunc} class="leading-none">
            &#x2715;
          </button>
        </div>
        <div class="w-full bg-[#a58562]">
          <img src={img} alt="Asset" class="mb-4 max-h-56 mx-auto" />
        </div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Modal;
