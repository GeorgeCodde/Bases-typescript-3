export const printObject = (argument: any) => {
    console.log(argument);
    
}


export function genericFuntion<T>(argument:T):T{
    return argument;
}

export const genericFuntionArrow = <T>(argument: T) => argument;
