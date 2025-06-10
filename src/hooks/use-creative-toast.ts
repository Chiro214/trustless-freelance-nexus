
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
          return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white border-none shadow-lg shadow-green-400/25';
        case 'error': 
          return 'bg-gradient-to-r from-red-400 to-rose-500 text-white border-none shadow-lg shadow-red-400/25';
        case 'warning': 
          return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none shadow-lg shadow-yellow-400/25';
        case 'info': 
          return 'bg-gradient-to-r from-blue-400 to-purple-500 text-white border-none shadow-lg shadow-blue-400/25';
        default: 
          return 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border-none shadow-lg';
      }
    };

    toast.custom(() => (
      <div className={`
        ${getStyle(type)}
        p-4 rounded-xl max-w-md w-full mx-auto
        transform transition-all duration-300 ease-out
        hover:scale-105 cursor-pointer
        animate-in slide-in-from-top-2 fade-in-0
      `}>
        <div className="flex items-start gap-3">
          <div className="text-2xl animate-bounce">
            {getEmoji(type)}
          </div>
          <div className="flex-1">
            {title && (
              <div className="font-semibold text-sm mb-1">
                {title}
              </div>
            )}
            {description && (
              <div className="text-xs opacity-90">
                {description}
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl -z-10"></div>
      </div>
    ), {
      duration,
      position: 'top-center',
    });
  };

  return { showToast };
};
