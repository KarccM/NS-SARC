import kareem from '../../Data/usersPics/karccm.jpg';

export const Picture = (urlPic) => {
  return (
    <div className="col-span-1  relative">
      <img
        alt="kareempicture
                "
        src={kareem}
        className="
                mx-auto object-cover object-top
                h-50 w-full rounded-md
                "
      />

      <button
        className="
                    absolute bg-gray-800 text-white
                    bottom-0 
                    opacity-80
                    transition
                    hover:opacity-100
                    h-6 w-full
                    "
        type="button"
      >
        Edit Photo
      </button>
    </div>
  );
};
