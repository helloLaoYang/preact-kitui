interface DialogInterface {
    title?: string;
    content?: string;
    imageUrl?: string;
    type?: 'text' | 'alter' | 'confirm' | 'prompt';
    align?: 'left' | 'center' | 'right';
    inputType?: string;
    inputValue?: string | number;
    inputPlaceholder?: string;
    className?: string;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    buttonList?: {
        label: string;
        value: string;
        className?: string;
    }[];
}
interface DialogOptions extends DialogInterface {
    onConfirm?(value: string): void;
    onCancel?(): void;
}
declare const Dialog: {
    (options: DialogOptions): void;
    destory: () => void;
};
export default Dialog;
