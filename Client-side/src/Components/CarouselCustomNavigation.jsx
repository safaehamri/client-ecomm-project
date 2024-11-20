import { Carousel } from "@material-tailwind/react";

const CarouselCustomNavigation = () => {
  return (
    <Carousel
      className="  h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="slide1.png"
        alt="image 1"
        className="h-full w-full  object-cover object-center"
        loading="lazy"
      />
      <img
        src="slide3.jpg"
        alt="image 2"
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
      <img
        src="https://images.pexels.com/photos/6538903/pexels-photo-6538903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&fm=webp"
        alt="image 3"
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </Carousel>
  );
};

export default CarouselCustomNavigation;
