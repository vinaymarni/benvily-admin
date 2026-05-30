'use client';

import { addDays, format, getDate, isValid, parse, subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface InputProp {
    inputId?: string;
    placeholder?: string;
    label?: string;
    labelClassName?:string
    inputClassName?: string;
    required?: boolean;
    containerClass?: string;
    value?: any;
    onChange?: any;
    name?: string;
    minDate?: any;
    maxDate?: any;
}

export default function MyDatePicker({
    required, inputId, label, labelClassName, inputClassName, value, onChange, name,
    containerClass, placeholder, minDate, maxDate
}:InputProp) {
    function parseDateString(dateString:any) {
        if (!dateString) return null;
        const parsed = parse(dateString, "dd/MM/yyyy", new Date());
        return isValid(parsed) ? parsed : null;
    }

    const finalVal = !value ? null : parseDateString(value);
    const finalMinVal = minDate ? subDays(parseDateString(minDate), -1) : null;
    const finalMaxVal = maxDate ? addDays(parseDateString(maxDate), -1) : null;

    function formatDate(date:any) {
        return format(date, "dd/MM/yyyy");
    }

    const renderDayContents = (day:any, date:any) => {
        const tooltipText = `Date: ${date}`;
        return <span title={tooltipText}>{getDate(date)}</span>;
    };

    return (
        <div className={`${containerClass}`}>
            {label != undefined && label != "" &&
            <label htmlFor={inputId} className={labelClassName}>
                {label}
                {required && <span className='requiredStar'>*</span>}
            </label>
            } 
            <DatePicker
                id={inputId}
                required={required ? true : false}
                selected={finalVal}
                name={name}
                onChange={(date:any) => onChange({target: {id: inputId, name: name, value: formatDate(date)}})}
                className={inputClassName}
                dateFormat= "dd/MM/yyyy"
                placeholderText={placeholder}
                {...(minDate ? { minDate: finalMinVal } : {})}
                {...(maxDate ? { maxDate: finalMaxVal } : {})}
                autoComplete="off"
                // icon={<CalendarIcon key={`date_icon_${id}`} className={Styles.datePickerFieldIcon} />}
                // showIcon
                toggleCalendarOnIconClick
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                renderDayContents={renderDayContents}
            />
        </div>
    );
}