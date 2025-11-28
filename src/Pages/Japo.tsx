import FondoSvg from 'Media/Imagen.svg'

function moveCarusel() {
    const carusel = document.getElementById('carusel')
    if (carusel?.scrollLeft + carusel?.offsetWidth === carusel?.scrollWidth) {
        carusel.scrollTo({left: 0, behavior: 'smooth'})
    } else {
        document.getElementById('carusel')?.scrollBy({left: 200, behavior: 'smooth'})
    }
    // setTimeout(() => {
    //     moveCarusel()
    // }, 6000)
}
export function Japo() {
    const CAROUSELIMGs = [
        "fondoJapo.jpg", "fondoJapo2.jpg", "CaruselJapo.jpg",
        "CaruselJapo2.jpg", "CaruselJapo3.jpg", "CaruselJapo4.jpg",
        "CaruselJapo5.jpg", "CaruselJapo6.jpg",
    ]
    const caruselItems = CAROUSELIMGs.map((src, i) => {
        return <img src={`/Media/${src}`} alt={src} width={200} key={i} className='rounded-2xl snap-center snap-always w-[200px] h-[200px]'/>
    })
    
    setInterval(() => {
        moveCarusel();
    }, 6000);
    

    return (
        <article className='relative'>
            <div className='font-BebasNeue text-9xl w-1/2 text-center'>
                <h2 className={`bg-[url(Media/fondoJapo2.jpg)] bg-contain bg-clip-text text-transparent backdrop-blur-xs p-4`}>
                    <i>JAPON</i>
                </h2>
                <h2 className='absolute top-6 left-[18.5vw] z-[-1]'>
                    <i>JAPON</i>
                </h2>
            </div>
            <section className='w-3/4 z-[-1] h-[220px] bg-[#c198c045] mx-12 mt-8 rounded-2xl flex flex-row overflow-hidden'>
                <div id='carusel' className='snap-x snap-mandatory flex flex-col gap-16 p-2 flex-wrap overflow-hidden'>
                    {caruselItems}
                </div>
            </section>
            <section className='max-w-lg text-justify leading-relaxed mb-8 font-BilboSwashCaps absolute left-[12vw] mt-8 text-2xl flex flex-col gap-4 text-[#2D2363] backdrop-blur-lg [text-shadow:0_4px_4px_#fff]'>
                <p>
                    Descubre Japón, un destino donde la tradición y la modernidad conviven en perfecta armonía. Recorre templos milenarios en Kioto.
                </p>
                <p>
                    maravíllate con la energía vibrante de Tokio y contempla la belleza natural del monte Fuji.
                </p>
                <p>
                    Disfruta de una gastronomía única, desde el sushi más fresco hasta sabores regionales inolvidables.
                </p>
                <p>
                    Japón te espera con su hospitalidad incomparable, paisajes sorprendentes y experiencias culturales que recordarás toda la vida. ¡Atrévete a vivir la magia del País del Sol Naciente!
                </p>
            </section>
            <figure className='justify-self-end absolute top-0'>
                <img src={FondoSvg} alt="Imagen de el Monte Fuji" className='h-[140vh]'/>
            </figure>
        </article>
    );
}