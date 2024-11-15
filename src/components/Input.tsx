interface IInput {
    label: string,
    id: string,
    type: string,
    placeholder?: string,
    value: any,
    state: any
}

export default function Input({ label, id, type, placeholder, value, state }: IInput): JSX.Element {
    let styleInput: string = '';
    let styleLabel: string = '';
    let styleField: string = '';

    switch (type) {
        case 'checkbox':
            styleInput = 'c-input-checkbox'
            styleLabel = 'c-input-checkbox__label';
            styleField = 'c-input-checkbox__check';
            break
        default:
            styleInput = 'c-input'
            styleLabel = 'c-input__label';
            styleField = 'c-input__field';
            break
    }
    
    return (
        <div className={ styleInput + ' o-flex-container' }>
            <label className={ styleLabel } htmlFor={ id }>{ label }</label>
            <input 
                id={ id } 
                className={ styleField } 
                type={ type } 
                placeholder={ placeholder !== undefined ? placeholder : label }
                value={ value } 
                onChange={(e) => state(e.target.value)} 
            />
        </div>
    )
}