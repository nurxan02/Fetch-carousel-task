// let container = document.querySelector(".container")
// fetch("https://jsonplaceholder.typicode.com/photos").then((res)=>res.json()).then((res)=>{
//     res.forEach((data, index) => {
//         if (index<=18) {
//             console.log(data);
//             let image = document.createElement("img");
//             let title = document.createElement("p")
//             let swiperSlide = document.createElement("div")
//             let swiperWrapped = document.createElement("div")
//             let mySwiper = document.createElement("div")

//             image.srcset = `${data.url}`
//             title.innerText = `${data.title}`

//             swiperSlide.className = "swiper-slide"
//             swiperWrapped.className = "swiper-wrapped"
//             mySwiper.className = "swiper mySwiper"

//             swiperSlide.append(image, title)
//             swiperWrapped.append(swiperSlide)
//             mySwiper.append(swiperWrapped)
//             container.append(mySwiper)


            
//         }

//     });

// })