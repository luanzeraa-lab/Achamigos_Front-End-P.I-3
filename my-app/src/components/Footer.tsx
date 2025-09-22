import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="flex flex-row px-5 py-3 place-content-between bg-[#f3f4f6] ">
        <div className="self-center">
          <Image
            src="/images/logocerto.png"
            alt="logo"
            width={200}
            height={100}
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="font-[600] text-[1rem] mb-3">Parceiros</p>
          <div className="flex gap-4 mb-3">
            <Image
              className="rounded-full hover:scale-[1.25]"
              src="/images/cachorro.avif"
              alt="Logo de Parceiro"
              width={60}
              height={60}
            />

            <Image
              className="rounded-full hover:scale-[1.25]"
              src="/images/cachorro_osso.jpg"
              alt="Logo de Parceiro"
              width={60}
              height={60}
            />

            <Image
              className="rounded-full hover:scale-[1.25]"
              src="/images/cachorrosaude.jpg"
              alt="Logo de Parceiro"
              width={60}
              height={60}
            />

            <Image
              className="rounded-full hover:scale-[1.25]"
              src="/images/passaro.avif"
              alt="Logo de Parceiro"
              width={60}
              height={60}
            />
          </div>

          <p className="mb-0 h-fit self-end font-[700]">
            Copyright 2025® Todos os direitos reservados
          </p>
        </div>

        <div className="flex flex-col gap-1 items-center self-end">
          <p className="font-[600] text-[1rem]">Contato</p>
          <div className="flex flex-row gap-4 h-fit">
            <figure className="flex flex-row gap-2 items-center m-0">
              <Image
                src="/icons/whatsapp-logo-bold-svgrepo-com.svg"
                alt="icone Whatsapp"
                width={600}
                height={600}
                style={{
                  objectFit: 'cover',
                  width: '24px',
                  height: '24px',
                }}
              ></Image>
              <figcaption>
                <span className="hover:text-[#d9376e] hover:underline underline-offset-1 hover:cursor-pointer">
                  Whatsapp
                </span>
              </figcaption>
            </figure>

            <figure className="flex flex-row gap-2 items-center m-0">
              <Image
                src="/icons/instagram-logo-facebook-2-svgrepo-com.svg"
                alt="icone instagram"
                width={600}
                height={600}
                style={{
                  objectFit: 'cover',
                  width: '24px',
                  height: '24px',
                }}
              ></Image>
              <figcaption>
                <span className="hover:text-[#d9376e] hover:underline underline-offset-1 hover:cursor-pointer">
                  Instagram
                </span>
              </figcaption>
            </figure>

            <figure className="flex flex-row gap-2 items-center m-0">
              <Image
                src="/icons/phone-svgrepo-com.svg"
                alt="icone insta"
                width={600}
                height={600}
                style={{
                  objectFit: 'cover',
                  width: '24px',
                  height: '24px',
                }}
              ></Image>
              <figcaption>
                <span className="hover:text-[#d9376e] hover:underline underline-offset-1 hover:cursor-pointer">
                  Telefone
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
