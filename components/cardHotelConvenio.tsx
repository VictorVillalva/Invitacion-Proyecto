import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import Image from 'next/image'
import Hotel1 from '../ui/assets/images/Hotel1.jpg'
import Link from 'next/link';


function CardHotelConvenio() {

    return ( 
            <Card className="bg-neutrals-200">
                <CardHeader>
                    <CardTitle>
                        <p className="text-[32px] font-semibold text-primary-400 text-center">Hotel Posada Señorial</p>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-[24px]">
                        <div className="gap-3 flex flex-col">
                            <div className="h-[388px]">                            
                                <Image
                                    src={Hotel1}
                                    alt="Hotel1"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <CardDescription className="text-center">
                                <Link href={'https://maps.app.goo.gl/CpJ4H3AD8HFbJYnK6'} className='font-light text-center'>Av. 5 de Mayo 1400, San Juan Aquiahuac, 72810 San Andrés Cholula, Pue.</Link>   
                            </CardDescription>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[12px] text-primary-200">*Incluye un porcentaje de descuento en su reservación solamente debes dar los siguientes datos:</p>
                            <div className="p-2 border border-primary border-dashed rounded">
                                <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-center">
                                    <span className="font-semibold text-primary-400 text-xs">* Evento:  XV años Daniela Medel  </span>
                                    </li>
                                    <li className="flex items-center">
                                    <span className="font-semibold text-primary-400 text-xs">* Fecha:  6 de septiembre de 2025 </span>
                                    </li> 
                                    <li className="flex items-center">
                                    <span className="font-semibold text-primary-400 text-xs">* Salón: Luzcina </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link  href={'https://maps.app.goo.gl/CpJ4H3AD8HFbJYnK6'} className="w-full p-2 bg-primary text-[#FFFFFF] rounded text-center font-semibold">Ver ubicación</Link>
                </CardFooter>
            </Card>
    );
}

export default CardHotelConvenio;