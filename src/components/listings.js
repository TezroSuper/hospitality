export const renderListingDetail = (listingId) => {
    const data = listingId === 'hall_1' ? {
        title: 'ٹیزرو پریمیم رائل ہال',
        type: 'فنکشن ہال / شادی ہال',
        price: 'Rs. 150,000',
        specs: ['500 مہمانوں کی گنجائش', 'انڈور فلی اے سی سٹیج', 'ٹیزرو کیٹرنگ سروس فلو', 'پروٹیکشن سیکیورٹی گارڈز']
    } : {
        title: 'ٹیزرو رائل پیلس ہوٹل',
        type: 'لگژری ڈیلکس روم',
        price: 'Rs. 12,000',
        specs: ['کنگ سائز بیڈ', 'فری ٹیزرو ہائی سپیڈ وائی فائی', '24/7 روم سروس لائیو', 'روزانہ فری بریک فاسٹ']
    };

    return `
    <main class="p-4 space-y-4 select-none pb-24 text-right">
        <div class="flex items-center justify-between border-b border-gray-100 pb-2">
            <button onclick="window.loadHospitalityTab('home')" class="p-1.5 bg-gray-100 text-gray-700 rounded-lg active:scale-90 transition-transform">
                <span class="material-icons text-lg block">arrow_forward</span>
            </button>
            <h2 class="text-xs font-black text-gray-900 uppercase tracking-wide">تفصیلات (Details)</h2>
            <div class="w-8"></div>
        </div>

        <div class="space-y-3">
            <div class="h-36 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold text-[10px]">
                [ Full Image Grid View Available ]
            </div>

            <div class="space-y-1">
                <span class="text-[7.5px] font-black text-white bg-[#0D47A1] px-1.5 py-0.5 rounded uppercase tracking-wider">${data.type}</span>
                <h3 class="text-xs font-black text-gray-900 mt-1">${data.title}</h3>
                <p class="text-[11px] font-mono font-black text-[#0D47A1]">${data.price} <span class="text-[7.5px] text-gray-400 font-sans">قابل ادائیگی گیٹ وے</span></p>
            </div>

            <hr class="border-gray-100">

            <div class="space-y-2">
                <h4 class="text-[8.5px] font-black text-gray-400 uppercase tracking-wider">سہولیات (Amenities Included)</h4>
                <div class="grid grid-cols-2 gap-2">
                    ${data.specs.map(spec => `
                        <div class="border border-gray-100 bg-gray-50 p-2 rounded-lg flex items-center justify-end gap-1.5 text-[8.5px] font-bold text-gray-700">
                            <span>${spec}</span>
                            <span class="material-icons text-xs text-blue-600">done</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <button onclick="window.triggerHospitalityCheckout('${data.title}', '${data.price}')" class="w-full bg-[#0A192F] hover:bg-[#0D47A1] text-white py-3 rounded-xl font-black text-xs tracking-wide uppercase transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-1.5 mt-4">
            <span class="material-icons text-sm">bolt</span>
            فوری بکنگ کریں (PROCEED TO BOOK)
        </button>
    </main>
    `;
};
