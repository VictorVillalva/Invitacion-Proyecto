'use client'
import Image from 'next/image'
import XvPortada from '../../ui/assets/images/XV-Presentation.png'
import LogoXV from '../../ui/assets/images/LogoXV.png'
import CardSalon from '../cardSalon';
import Location from '@/ui/assets/icons/location';
import Link from 'next/link';
import CardHotel from '../cardHotel';
import CardHotelConvenio from '../cardHotelConvenio';
import Hotel2 from '@/ui/assets/images/Hotel2.jpg'
import ZonaArqueologicaPiramides from '@/ui/assets/images/ZonaArqueologicaPiramides.jpg'
import EstrellaPuebla from '@/ui/assets/images/EstrellaPuebla.jpg'
import Valquiro from '@/ui/assets/images/Valquiro.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"

function Invitacion() {
    return (
        <div className="flex flex-col gap-[80px]">
            <div className='w-full flex flex-col justify-center items-center'>
                <Image
                    src={XvPortada}
                    alt="XV"
                    // width={500} automatically provided
                    // height={500} automatically provided
                />
            </div>
            <div className='flex flex-col gap-[233px]'>                
                <div className='w-full flex flex-col justify-center items-center text-neutrals-200'>
                    <p className='font-extralight text-[20px]'>Aparta la fecha</p>
                    <h2 className='font-semibold text-2xl'>6 de Septiembre del 2025</h2>
                </div>
                <div className='w-full flex flex-col justify-center items-center text-neutrals-200'>
                    <p className='italic text-center text-[20px]'>Dicen que los momentos más felices se comparten con quienes más queremos. Por eso, quiero que me acompañes en uno de los días más importantes de mi vida.</p>
                </div>
            </div>
            <hr  className='bg-neutrals-100'/>
            <div className='contador flex flex-col items-center'>
                <p className='font-semibold text-[32px] text-center text-neutrals-100'>¡Días restantes para el gran dia!</p>
            </div>
            <hr  className='bg-neutrals-100'/>
            <div className='flex flex-col items-center text-neutrals-100 gap-4'>
                <CardSalon />
                <div className='text-neutrals-300 flex flex-row'>
                    <Location height='24' width='24'/>
                    <Link href={'https://maps.app.goo.gl/CpJ4H3AD8HFbJYnK6'} className='font-light text-center'>Av. 5 de Mayo 1400, San Juan Aquiahuac, 72810 San Andrés Cholula, Pue.</Link>
                </div>
            </div>
            <hr  className='bg-neutrals-100'/>
            <div className="flex flex-col gap-[180px]">                
                <div className='flex flex-col items-center gap-5'>
                    <p className='text-[20px] font-normal text-neutrals-100'>Sugerencia de hospedaje</p>
                    <Carousel className="w-full">
                        <CarouselContent>
                            <CarouselItem >
                                <CardHotelConvenio />
                            </CarouselItem>
                            <CarouselItem >
                                <CardHotel 
                                    nameHotel='Hotel Xelhua'
                                    img={Hotel2}
                                    locationUrl='https://maps.app.goo.gl/QDB5wNSGhT36uN9N6'
                                    location='4 south No 106, C. 4 Sur 106, Centro, 72760 Puebla, Pue.'
                                />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <p className='text-[20px] font-normal text-neutrals-100'>Sugerencia de Actividades</p>
                    <Carousel className="w-full">
                        <CarouselContent>
                            <CarouselItem >
                                <CardHotel 
                                    nameHotel='Zona Arqueológica de Cholula'
                                    img={ZonaArqueologicaPiramides}
                                    locationUrl='https://maps.app.goo.gl/pYkqBiJkVbF3ZYWh8'
                                    location='C. 14 Pte. S/N, San Miguel, Zona Arqueológica San Andrés Cholula, 72810 San Andrés Cholula, Pue.'
                                />
                            </CarouselItem>
                            <CarouselItem >
                                <CardHotel 
                                    nameHotel='Estrella de Puebla'
                                    img={EstrellaPuebla}
                                    locationUrl='https://maps.app.goo.gl/KNispAvS4QPNGHFY6'
                                    location='4 south No 106, C. 4 Sur 106, Centro, 72760 Puebla, Pue.'
                                />
                            </CarouselItem>
                            <CarouselItem >
                                <CardHotel 
                                    nameHotel="Val'Quirico"
                                    img={Valquiro}
                                    locationUrl='https://maps.app.goo.gl/26jHNYj1WjQ92wtu7'
                                    location='Carretera Santa Isabel Tetlatauca, km 2, 90710 San Miguel Xoxtla, Tlax.'
                                />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            <hr  className='bg-neutrals-100'/>
            <div className="flex flex-col items-center gap-4">                
                <p className='font-semibold text-[20px] text-neutrals-100 text-center'> Te invitamos a reservar tu fecha para este evento inolvidable espera la invitación oficial.</p>
                <Image
                    src={LogoXV}
                    alt="Logo"
                    // width={500} automatically provided
                    // height={500} automatically provided
                />
            </div>
        </div>
    );
}

export default Invitacion;