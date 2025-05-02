export interface StepProps{
    props:{
        index:number
        lineNext?:boolean
    }
    indexActive:number
    onclick?:()=>void
}


export interface controllerStep{
    indexActive:number,
    onNext?: () => void;
    onBack?: () => void;
    onSubmit?:()=>void
}


export interface HeaderProps{
    active:number
}


export interface FormProps{
    skillSelect: string,
    active:number,
    handleLevelSelect: (level: string) => void;
}
