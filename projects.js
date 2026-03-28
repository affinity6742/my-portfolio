// এই কোডটুকু আগের জাভাস্ক্রিপ্টের জায়গায় বসিয়ে দিন
const grid = document.getElementById('portfolio-grid');
projects.forEach(project => {
    let mediaHtml = '';
    
    // ফাইলটি ভিডিও নাকি ছবি তা চেক করার জন্য
    if (project.type === "video" || project.image.endsWith('.mp4')) {
        mediaHtml = `<video controls class="w-full h-48 object-cover">
                        <source src="projects/${project.image}" type="video/mp4">
                     </video>`;
    } else {
        mediaHtml = `<img src="projects/${project.image}" alt="${project.title}" class="w-full h-48 object-cover">`;
    }

    const card = `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            ${mediaHtml}
            <div class="p-4">
                <h3 class="font-bold text-lg">${project.title}</h3>
                <p class="text-sm text-gray-500">${project.category}</p>
            </div>
        </div>
    `;
    grid.innerHTML += card;
});
