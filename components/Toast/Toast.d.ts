interface ToastOptions {
    icon?: string;
    imgUrl?: string;
    content: string;
    duration?: number;
}
declare const Toast: {
    (options: ToastOptions): void;
    destory: () => void;
};
export default Toast;
