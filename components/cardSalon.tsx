import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"
import Image from 'next/image'
import Salon1 from "../ui/assets/images/Salon1.jpg"
import Salon2 from "../ui/assets/images/Salon2.jpg"
import Salon3 from "../ui/assets/images/Salon3.jpg"
import Salon4 from "../ui/assets/images/Salon4.jpg"
import Salon5 from "../ui/assets/images/Salon5.jpg"

function CardSalon() {

    const imagesSalon = [
        { src: Salon1, alt: 'Salon' },
        { src: Salon2, alt: 'Salon 2' },
        { src: Salon3, alt: 'Salon 3' },
        { src: Salon4, alt: 'Salon 4' },
        { src: Salon5, alt: 'Salon 5' },
    ];
    return ( 
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center text-neutrals-100">
                <p className="text-[20px]">Salón</p>
                <p className="font-bold text-[48px]">Luzcina</p>
            </div>
            <Carousel className="w-full">
                <CarouselContent>
                    {imagesSalon.map((imagesSalon, index) => (
                    <CarouselItem key={index}>
                        <div className="h-[388px]">                            
                            <Image
                            src={imagesSalon.src}
                            alt={imagesSalon.alt}
                            className="w-full h-full object-cover rounded-lg"
                            priority={index === 0} // Prioriza la primera imagen
                            />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CardSalon;