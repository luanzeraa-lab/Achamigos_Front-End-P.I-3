import Image from 'next/image';

const comoUsar = () => {
  return (
    <>
      <div className="relative">
        
        <div className="grid grid-cols-2 gap-4">
          <div className="ml-auto w-[25rem] h-[25rem] bg-gradient-to-b from-[#e6732e] via-[#ff8e3c] to-[#ffb86c] rounded-[1rem]">Card 1</div>
          <div className="w-[25rem] h-[25rem] bg-gradient-to-b from-[#e6732e] via-[#ff8e3c] to-[#ffb86c] rounded-[1rem]">Card 2</div>
          <div className="shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/dog-.jpg"
            alt="Imagem de um cachorro"
            width={350}
            height={350}
            className="rounded-full shadow-lg object-cover"
          />
        </div> 
          <div className="ml-auto w-[25rem] h-[25rem] bg-gradient-to-b from-[#e6732e] via-[#ff8e3c] to-[#ffb86c] rounded-[1rem]">Card 3</div>
          <div className="w-[25rem] h-[25rem]  bg-gradient-to-b from-[#e6732e] via-[#ff8e3c] to-[#ffb86c] rounded-[1rem]">Card 4</div>
        </div>

         
      </div>
    </>
  );
};

export default comoUsar;
