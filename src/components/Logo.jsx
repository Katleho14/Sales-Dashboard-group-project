import { Bolt } from 'lucide-react';

const Logo = () => (
    <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <Bolt size={20} />
        </div>
        <span className="ml-3 text-xl font-bold text-gray-800">Hiphonic</span>
    </div>
);

export default Logo;