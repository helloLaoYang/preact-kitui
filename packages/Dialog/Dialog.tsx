
/**
 * dialog components
 */
import { h, render as mount, Component } from 'preact'

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

interface DialogComponentProps extends DialogInterface {
  onConfirm?(value?: string): void;
  onCancel?(): void;
  onClosed?(): void;
}

interface DialogOptions extends DialogInterface {
  onConfirm?(value: string): void;
  onCancel?(): void;
}

class DialogComponent extends Component<DialogComponentProps> {
  constructor (props: DialogComponentProps) {
    super(props)
  }

  closedHandler = () => {
    const { onClosed } = this.props
    if (onClosed instanceof Function) {
      onClosed()
    }
  }

  clickButtonHandler = (value?: string) => {
    const { onConfirm } = this.props
    if (onConfirm instanceof Function) {
      onConfirm(value)
    }
    this.closedHandler()
  }

  confirmClickHandler = () => {
    this.clickButtonHandler()
  }

  cancelClickHandler = () => {
    const { onCancel } = this.props
    if (onCancel instanceof Function) {
      onCancel()
    }
    this.closedHandler()
  }

  render () {
    const {
      title,
      content,
      align = 'left',
      imageUrl,
      showCancelButton,
      showConfirmButton = true,
      cancelButtonText,
      confirmButtonText,
      buttonList,
    } = this.props
    return (
      <div>
        <div className="kit-dialog__transparent"></div>
        <div className="kit-dialog">
          <div className="kit-dialog__hd">
            { imageUrl
              ? (
                <div className="kit-dialog__media"></div>
              )
              : null }
            { title
              ? (
                <div className="kit-dialog__title">
                  { title }
                </div>
              )
              : null }
            { content
              ? (
                <div
                  className={ [
                    'kit-dialog__content',
                    `kit-dialog__content--align-${align}`,
                  ].join(' ') }
                >
                  { content }
                </div>
              )
              : null }
          </div>
          { showCancelButton || showConfirmButton || (buttonList && buttonList.length)
            ? (
              <div className="kit-dialog__bd">
                { (buttonList && buttonList.length)
                  ? (
                    buttonList.map(({ label, value, className: buttonListClassName }) => (
                      <div
                        className={ [
                          'kit-dialog__button',
                          'kit-dialog__button--type-confirm',
                          buttonListClassName,
                        ].filter((_) => _).join(' ') }
                        onClick={ this.clickButtonHandler.bind(this, value) }
                        key={ value }
                      >
                        { label }
                      </div>
                    ))
                  )
                  : (
                    <div className="kit-dialog__button-group">
                      { showConfirmButton
                        ? (
                          <div
                            className="kit-dialog__button kit-dialog__button--type-confirm"
                            onClick={ this.confirmClickHandler }
                          >
                            { confirmButtonText || '确定' }
                          </div>
                        )
                        : null }
                      { showCancelButton
                        ? (
                          <div className="kit-dialog__button"
                            onClick={ this.cancelClickHandler }
                          >
                            { cancelButtonText || '取消' }
                          </div>
                        )
                        : null }
                    </div>
                  ) }
              </div>
            )
            : null }
        </div>
      </div>
    )
  }
}

export default (() => {
  let instance: Element | undefined

  const removeInstance = () => {
    if (instance) {
      document.body.removeChild(instance)
      instance = undefined
    }
  }

  const Dialog = (options: DialogOptions) => {
    instance = document.createElement('div')
    mount(
      <DialogComponent
        { ...options }
        onClosed={ removeInstance }
      />, instance,
    )

    document.body.appendChild(instance)
  }

  Dialog.destory = removeInstance

  return Dialog
})()
