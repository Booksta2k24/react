export interface InputFieldProps {
    label: string;                
    type: string;                 
    id: string;                   
    placeholder?: string;         
    required?: boolean;           
    value?: string;               
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}
