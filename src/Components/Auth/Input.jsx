

function Input(props) {
    
  return (
    <div>
      <label htmlFor={props.id} className="block text-gray-300 text-sm font-medium mb-2">
        {props.label}
      </label>
      <input
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        name={props.id}
        className={`w-full p-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent  ${props.classStyle}`}
      />
      <div className=" text-white text-sm">{props.err=="Required"?"":props.err}</div>
    </div>
  );
}

export default Input;
