export interface StepProps{
    props:{
        index:number
        lineNext?:boolean
    }
    indexActive:number,
    onclick?:()=>void,
    succesFinal?:boolean,
}


export interface controllerStep{
    indexActive:number,
    onNext?: () => void;
    onBack?: () => void;
    onSubmit?:()=>void;
    succesFinal?:boolean,
}


export interface HeaderProps{
    active:number,
    succesFinal:boolean,
}


export interface FormProps{
    skillSelect: string,
    active:number,
    handleLevelSelect: (level: string) => void;
    fullName: string;
    email: string;
    phoneNumber: string;
    Portfolio: string;
    onFullNameChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onPhoneNumberChange: (value: string) => void;
    onPortfolioChange: (value: string) => void;
    succussFinal:boolean;
    selectedTechnologie:string;
    handleCheckboxChange:(value:string)=>void
}
