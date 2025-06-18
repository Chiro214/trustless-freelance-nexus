
import { toast } from "sonner";

type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface CreativeToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  type?: NotificationType;
}

export const useCreativeToast = () => {
  const showToast = ({ title, description, type = 'info', duration = 4000 }: CreativeToastOptions) => {
    const getEmoji = (type: NotificationType) => {
      switch (type) {
        case 'success': return '🎉';
        case 'error': return '⚠️';
        case 'warning': return '⚡';
        case 'info': return '💫';
        default: return '✨';
      }
    };

    const getStyle = (type: NotificationType) => {
      switch (type) {
        case 'success': 
          return 'bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 text-white border-none shadow-2xl shadow-green-400/30';
        case 'error': 
          return 'bg-gradient-to-br from-red-400 via-rose-500 to-red-600 text-white border-none shadow-2xl shadow-red-400/30';
        case 'warning': 
          return 'bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 text-white border-none shadow-2xl shadow-yellow-400/30';
        case 'info': 
          return 'bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 text-white border-none shadow-2xl shadow-blue-400/30';
        default: 
          return 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white border-none shadow-2xl';
      }
    };

    toast.custom(() => (
      <div className={`
        ${getStyle(type)}
        p-5 rounded-2xl max-w-md w-full mx-auto
        transform transition-all duration-500 ease-out
        hover:scale-105 cursor-pointer
        animate-in slide-in-from-top-2 fade-in-0
        backdrop-blur-lg border border-white/20
        relative overflow-hidden
      `}>
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-50 animate-pulse"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-2 right-3 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping delay-300"></div>
        
        <div className="relative flex items-start gap-4">
          <div className="text-3xl animate-bounce drop-shadow-lg">
            {getEmoji(type)}
          </div>
          <div className="flex-1">
            {title && (
              <div className="font-bold text-base mb-2 drop-shadow-sm">
                {title}
              </div>
            )}
            {description && (
              <div className="text-sm opacity-95 leading-relaxed">
                {description}
              </div>
            )}
          </div>
        </div>
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-2xl blur-sm -z-10"></div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full w-full">
          <div className="h-full bg-white/60 rounded-full animate-[shrink_4s_linear_forwards]"></div>
        </div>
      </div>
    ), {
      duration,
      position: 'bottom-right',
    });
  };

  return { showToast };
};
