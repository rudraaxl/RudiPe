import { Bell } from 'lucide-react'; 
import { Balance } from './Balance';

export const AppBar = () => {
    return (
        <header className="w-full h-16 bg-white shadow-sm border-b flex items-center justify-between px-6">
            {/* App name / logo */}
            <div className="text-2xl font-bold text-blue-600 tracking-tight">
                RudiPe
            </div>

            {/* Right section */}
            <div className="flex items-center gap-6">
                {/* Balance Display */}
                <div className="text-sm text-gray-600">
                    <span className="font-medium"> <Balance /> </span> 
                </div>

                {/* Notification icon (optional) */}
                <button className="relative">
                    <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" />
                    {/* Notification Dot */}
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
                </button>

                {/* User Section */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Hello</span>
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-lg font-semibold text-gray-800 shadow">
                        U
                    </div>
                </div>
            </div>
        </header>
    );
};
