'use client'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import Image, {StaticImageData} from 'next/image'
import Link from 'next/link';

interface PropsCard{
    nameHotel: string;
    img: StaticImageData,
    location: string,
    locationUrl: string
}

function CardHotel({nameHotel, img,location,locationUrl=''}: PropsCard) {

    return ( 
            <Card className="bg-neutrals-200">
                <CardHeader>
                    <CardTitle>
                        <p className="text-[32px] font-semibold text-primary-400 text-center truncate">{nameHotel}</p>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-[24px]">
                        <div className="gap-3 flex flex-col">
                            <div className="h-[388px]">                            
                                <Image
                                    src={img}
                                    alt="Hotel1212341"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <CardDescription className="text-center h-16">
                                <Link href={locationUrl} className='font-light text-center'>{location}</Link>   
                            </CardDescription>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link  href={locationUrl} className="w-full p-2 bg-primary text-[#FFFFFF] rounded text-center font-semibold">Ver ubicación</Link>
                </CardFooter>
            </Card>
    );
}

export default CardHotel;