
class CustomEventCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Event';
        const date = this.getAttribute('date') || 'TBD';
        const time = this.getAttribute('time') || 'TBD';
        const location = this.getAttribute('location') || 'TBD';
        const image = this.getAttribute('image') || 'https://picsum.photos/640/360?blur=1';

        this.innerHTML = `
            <style>
                .event-card {
                    transition: all 0.3s ease;
                }
                .event-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(209, 160, 84, 0.2);
                }
                .event-image {
                    height: 200px;
                    transition: transform 0.5s ease;
                }
                .event-card:hover .event-image {
                    transform: scale(1.05);
                }
            </style>

            <div class="event-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition duration-300">
                <div class="overflow-hidden">
                    <img 
                        src="${image}" 
                        alt="${title}" 
                        class="w-full event-image object-cover"
                    >
                </div>

                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-yellow-400">
                        ${title}
                    </h3>

                    <div class="space-y-3">
                        <div class="flex items-center gap-2">
                            <i data-feather="calendar" class="text-yellow-400"></i>
                            <span>${date}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-feather="clock" class="text-yellow-400"></i>
                            <span>${time}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-feather="map-pin" class="text-yellow-400"></i>
                            <span>${location}</span>
                        </div>
                    </div>

                    <button
                        class="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                        type="button"
                    >
                        <i data-feather="plus"></i>
                        <span>Register</span>
                    </button>
                </div>
            </div>
        `;

        feather.replace();
    }
}

customElements.define('custom-event-card', CustomEventCard);
