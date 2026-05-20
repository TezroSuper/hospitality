import { injectTezroLayout } from './components/sharedLayout.js';

const renderHospitalityHome = () => `
    <div class="p-4 space-y-4 text-right">
        <h3 class="text-xs font-black text-gray-900">ٹیزرو ہوسپیٹلٹی اینڈ ہوٹلز</h3>
        <div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div class="p-3 space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-mono font-black text-[#0D47A1]">Rs. 4,500 / رات</span>
                    <h4 class="text-xs font-black text-gray-900">ایگزیکٹو سنگل روم</h4>
                </div>
                <button onclick="window.triggerHotelBooking('Executive Room Stay', 'Rs. 4,500')" class="w-full bg-[#0A192F] text-white text-[9px] font-black py-2 rounded-lg uppercase">روم بک کریں</button>
            </div>
        </div>
    </div>
`;

const initApp = () => {
    const root = document.getElementById('app-root');
    if (root) root.innerHTML = injectTezroLayout('HOSPITALITY', renderHospitalityHome());
};

window.triggerHotelBooking = (name, price) => {
    window.location.href = `http://localhost:5174?item=${encodeURIComponent(name)}&amount=${encodeURIComponent(price)}&ref=hospitality`;
};

document.addEventListener('DOMContentLoaded', initApp);
