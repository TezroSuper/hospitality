export const renderHospitalityHome = () => {
    return `
    <main class="p-4 space-y-4 select-none pb-24 text-right">
        
        <div class="bg-gray-50 border border-gray-200 p-3 rounded-xl space-y-2">
            <span class="text-[8px] font-black text-gray-400 block uppercase tracking-wider">منزل کا انتخاب کریں (Select Destination)</span>
            <div class="relative">
                <span class="material-icons absolute left-3 top-2.5 text-gray-400 text-base">public</span>
                <input type="text" value="لاہور، پاکستان" class="w-full bg-white pl-9 pr-4 py-1.5 text-xs border border-gray-200 outline-none rounded-lg font-bold text-right">
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2">
            <button onclick="window.switchHospitalityTab('halls')" class="border border-gray-200 bg-white hover:border-gray-300 p-3 rounded-xl flex items-center justify-between gap-2 active:scale-95 transition-all text-right">
                <div>
                    <span class="text-[10px] font-black text-gray-900 block">فنکشن ہالز</span>
                    <span class="text-[7px] font-bold text-gray-400 block mt-0.5">شادی اور بزنس ایونٹس</span>
                </div>
                <span class="material-icons text-xl text-[#0D47A1]">corporate_fare</span>
            </button>
            <button onclick="window.switchHospitalityTab('rooms')" class="border border-[#0D47A1] bg-blue-50/40 p-3 rounded-xl flex items-center justify-between gap-2 active:scale-95 transition-all text-right">
                <div>
                    <span class="text-[10px] font-black text-[#0D47A1] block">ہوٹل رومز</span>
                    <span class="text-[7px] font-bold text-blue-500 block mt-0.5">لگژری ہوٹلز اور ریزورٹس</span>
                </div>
                <img src="/public/butans/hotel-room.jpg" class="h-6 w-6 object-contain" alt="Rooms">
            </button>
        </div>

        <div class="space-y-2">
            <h3 class="text-[9px] font-black text-gray-400 uppercase tracking-wider px-0.5">مقبول ہوٹلز اور ہالز (Featured Properties)</h3>
            
            <div onclick="window.viewListing('room_1')" class="border border-gray-200 bg-white rounded-xl overflow-hidden cursor-pointer hover:border-gray-300 active:scale-[0.99] transition-all">
                <div class="h-28 bg-gray-200 relative flex items-center justify-center text-gray-400 font-bold text-[10px]">
                    [ Premium Hotel Room Image Placeholder ]
                    <span class="absolute top-2 left-2 bg-[#0A192F] text-white text-[7px] font-mono font-black px-1.5 py-0.5 rounded">Rs. 12,000 / رات</span>
                </div>
                <div class="p-3 space-y-1">
                    <div class="flex items-center justify-between flex-row-reverse">
                        <h4 class="text-[11px] font-black text-gray-900">ٹیزرو رائل پیلس ہوٹل</h4>
                        <span class="text-[8px] font-black text-amber-500">⭐ 4.9 (240 جائزے)</span>
                    </div>
                    <p class="text-[8px] font-bold text-gray-400">لاہور کینٹ • فری وائی فائی، اے سی، اور ناشتہ شامل ہے</p>
                </div>
            </div>

            <div onclick="window.viewListing('hall_1')" class="border border-gray-200 bg-white rounded-xl overflow-hidden cursor-pointer hover:border-gray-300 active:scale-[0.99] transition-all">
                <div class="h-28 bg-gray-200 relative flex items-center justify-center text-gray-400 font-bold text-[10px]">
                    [ Luxury Function Hall Image Placeholder ]
                    <span class="absolute top-2 left-2 bg-[#0A192F] text-white text-[7px] font-mono font-black px-1.5 py-0.5 rounded">Rs. 150,000 / ایونٹ</span>
                </div>
                <div class="p-3 space-y-1">
                    <div class="flex items-center justify-between flex-row-reverse">
                        <h4 class="text-[11px] font-black text-gray-900">ٹیزرو پریمیم رائل ہال (ایونٹس و ویڈنگز)</h4>
                        <span class="text-[8px] font-black text-amber-500">⭐ 4.8</span>
                    </div>
                    <p class="text-[8px] font-bold text-gray-400">مین بلیوارڈ • 500 مہمانوں کی گنجائش، اسٹیج سیٹ اپ اور مکمل کیٹرنگ</p>
                </div>
            </div>

        </div>
    </main>
    `;
};
