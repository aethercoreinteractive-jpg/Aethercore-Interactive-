<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Details</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="data.js"></script>
</head>
<body class="bg-[#121417] text-[#E2E8F0]">

    <button onclick="history.back()" class="p-4 text-2xl text-blue-400">←</button>

    <div class="px-6 pb-6 flex items-center gap-4">
        <img id="logo" class="w-20 h-20 rounded-2xl shadow-md border border-[#2D3238]">
        <div>
            <h1 id="title" class="text-xl font-bold text-[#F8FAFC]"></h1>
            <p class="text-blue-400 font-bold text-sm">Aethercore Interactive</p>
        </div>
    </div>

    <div class="px-6 mb-8">
        <a id="btn" href="#" class="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold text-lg">Open App</a>
    </div>

    <div class="swiper mySwiper w-full h-auto mb-2">
        <div class="swiper-wrapper" id="slides"></div>
        <div class="swiper-pagination !relative mt-4"></div>
    </div>

    <div class="px-6 pb-20">
        <h2 class="font-bold text-lg mb-2 text-[#F8FAFC]">About this app</h2>
        <p id="desc" class="text-gray-400 text-sm leading-relaxed mb-3"></p>
        <div id="ratingContainer" class="flex items-center gap-1"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const id = new URLSearchParams(window.location.search).get('id');
            const app = aetherCoreApps.find(a => a.id == id);
            
            if (app) {
                document.getElementById('title').innerText = app.title;
                document.getElementById('desc').innerText = app.description;
                document.getElementById('logo').src = app.logo;
                document.getElementById('btn').href = app.url;
                
                // Rating System Logic
                if (app.rating) {
                    const ratingValue = parseInt(app.rating.split('/')[0]);
                    const container = document.getElementById('ratingContainer');
                    container.innerHTML = Array(5).fill(0).map((_, i) => 
                        `<svg class="w-5 h-5 ${i < ratingValue ? 'fill-yellow-400' : 'fill-gray-600'}" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`
                    ).join('');
                }
                
                document.getElementById('slides').innerHTML = app.preview.map((p, index) => {
                    const isVideo = p.endsWith('.mp4') || p.endsWith('.webm');
                    return `
                    <div class="swiper-slide flex justify-center">
                        <a href="fullscreen.html?id=${id}&index=${index}" class="block aspect-video w-[90%] overflow-hidden rounded-2xl border border-[#2D3238] bg-[#1E2126]">
                            ${isVideo 
                                ? `<video src="${p}" class="w-full h-full object-cover" playsinline></video>` 
                                : `<img src="${p}" class="w-full h-full object-cover">`}
                        </a>
                    </div>`;
                }).join('');
                
                new Swiper(".mySwiper", { 
                    slidesPerView: 1, 
                    spaceBetween: 0,
                    pagination: { el: ".swiper-pagination", clickable: true }
                });
            }
        });
    </script>
</body>
</html>
    
