import Invitacion from "@/components/pre-invitacion/invitacion";
import Sobre from "@/components/sobre";

export default function Home() {
  return (
    <>
      <Sobre>      
        <div className="flex flex-col px-6 py-[80px]">
          <Invitacion />
        </div>
        <div className="w-full flex flex-col justify-center items-center p-4">
          <p className="text-neutrals-100 font-semibold text-xs text-center">Derechos Reservados 2024 </p>
          <p className="text-neutrals-100 font-semibold text-xs text-center">Contacto  📞961 374 4444 ✉️venturinaaylin@gmail.com</p>
        </div>
      </Sobre>
    </>
  );
}
