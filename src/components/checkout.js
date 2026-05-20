export const renderHospitalityCheckout = (title, price) => {
    return `
    <main class="p-4 space-y-4 select-none pb-24">
        
        <div class="bg-white border border-gray-200 rounded-2xl shadow-xl p-4 space-y-4 relative overflow-hidden text-right">
            <div class="absolute top-0 inset-x-0 h-1.5 bg-[#0D47A1]"></div>

            <div class="text-center py-2 space-y-1">
                <div class="w-9 h-9 bg-blue-50 text-[#0D47A1] rounded-full flex items-center justify-center mx-auto border border-blue-200">
                    <span class="material-icons text-xl font-black">domain_verification</span>
                </div>
                <h2 class="text-xs font-black text-gray-900 uppercase tracking-wide mt-1">بکنگ کامیابی سے رجسٹرڈ!</h2>
                <p class="text-[7.5px] font-bold text-gray-400">ٹیزرو گلوبل ہوسپیٹلیٹی سروس نیٹ ورک</p>
            </div>

            <div class="space-y-1.5 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
                <div class="flex justify-between items-center text-[9px] font-bold text-gray-600">
                    <span>پراپرٹی / ہال نام</span>
                    <span class="font-black text-gray-800">${title}</span>
                </div>
                <div class="flex justify-between items-center text-[9px] font-bold text-gray-600">
                    <span>بکنگ چارجز و ٹیکس</span>
                    <span class="font-mono">${price}</span>
                </div>
                <hr class="border-gray-200 my-1">
                <div class="flex justify-between items-center text-[11px] font-black text-gray-900">
                    <span>کل کٹوتی (Tezro Digital Bank)</span>
                    <span class="font-mono text-[#0D47A1]">${price}</span>
                </div>
            </div>

            <div class="border border-blue-100 bg-blue-50/40 p-2.5 rounded-xl flex items-center justify-between text-right">
                <span class="text-[7.5px] font-black text-blue-700 bg-blue-100 px-2 py-0.5 rounded border border-blue-200/50 uppercase">PAID & BOOKED</span>
                <div class="min-w-0">
                    <span class="text-[8px] font-black text-gray-800 block">ٹیزرو ڈیجیٹل والٹ کلیئرنس</span>
                    <span class="text-[7px] font-mono font-bold text-gray-400 block mt-0.5">Booking Ref: TZ-HOTEL-7741</span>
                </div>
            </div>
            
            <p class="text-[7.5px] font-bold text-gray-400 text-center mt-2">آپ کا ڈیجیٹل پاس اور بکنگ کیو آر کوڈ (QR Code) ٹیزرو ہوم والٹ میں محفوظ کر دیا گیا ہے۔</p>
        </div>

        <button onclick="window.location.href='http://localhost:5173'" class="w-full bg-[#0A192F] hover:bg-[#0D47A1] text-white py-3 rounded-xl font-black text-xs tracking-wide uppercase transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-1.5">
            <span class="material-icons text-sm">home</span>
            مرکزی ہوم اسکرین پر جائیں
        </button>
    </main>
    `;
};
