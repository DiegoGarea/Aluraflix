import trash from '../assets/trash.svg';
import edit from '../assets/edit.svg';

const VideoCard = () => {
  return (
    <div className="flex flex-col border-2 border-[#2271D1] rounded-md shadow-inner-blue-custom w-[400px] h-[300px]">
      <div className="w-[100%] h-4/5"></div>
      <div className="flex justify-evenly bg-black text-white h-1/5 font-bold">
        <button className="flex items-center uppercase">
          {' '}
          <img src={trash} alt="trash" className="mr-4" /> Borrar
        </button>
        <button className="flex items-center uppercase">
          {' '}
          <img src={edit} alt="edit" className="mr-4" /> Editar
        </button>
      </div>
    </div>
  );
};

export default VideoCard;